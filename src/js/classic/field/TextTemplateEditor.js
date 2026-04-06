
Ext.define('Tualo.reportarticlesets.Trigger', {

    querySets: async function () {
        /*filter: JSON.stringify([{
            operator: 'eq',
            property: 'view_editor_blg_sets__belegart',
            value: me.grid.up().reportindex
        }])
            */
        let url = './ds/view_editor_blg_sets/read',
            request = await fetch(url);
        if (request.ok) {
            let response = await request.json();
            if (response.success) {
                console.log('querySets', response.data);
                return response.data;
            } else {
                Ext.toast({
                    html: response.msg,
                    title: 'Fehler',
                    width: 200,
                    align: 't'
                });
                return [];
            }
        } else {
            Ext.toast({
                html: 'Fehler beim Laden der Sets',
                title: 'Fehler',
                width: 200,
                align: 't'
            });
            return [];
        }


    },

    queryProductSets: async function (id) {
        /*filter: JSON.stringify([{
            operator: 'eq',
            property: 'view_editor_blg_sets_artikel__belegart',
            value: me.grid.up().reportindex
        }])
            */
        let url = './ds/view_editor_blg_sets_artikel/read',
            request = await fetch(url);
        if (request.ok) {
            let response = await request.json();
            if (response.success) {
                return response.data;
            } else {
                Ext.toast({
                    html: response.msg,
                    title: 'Fehler',
                    width: 200,
                    align: 't'
                });
                return [];
            }
        } else {
            Ext.toast({
                html: 'Fehler beim Laden der Sets',
                title: 'Fehler',
                width: 200,
                align: 't'
            });
            return [];
        }


    },

    createMenu: function (data) {
        let menu = new Ext.menu.Menu();
        data.forEach(element => {
            menu.add({
                text: element.name,
                configid: element.id,
                menu: [],
                listeners: {
                    scope: this,
                    render: this.onMenuRendered
                }
            })
        });
        return menu;
    },
    onMenuRendered: async function (menu) {
        console.log('onMenuRendered', menu, menu.configid);
        let me = this,
            sets = await me.queryProductSets(menu.configid);

        sets.forEach(element => {
            menu.getMenu().add({
                text: element.bemerkung,
                configData: element,
                listeners: {
                    scope: this,
                    click: this.onMenuClick
                }
            })
        });
    },
    onMenuClick: function (menu, item) {
        console.log('onMenuClick', this, menu, item);
        let data = menu.configData;
        var grid = this.up('grid'),
            plugin = grid.findPlugin('cellediting');
        plugin.context.record.set(data);
        try {
            plugin.context.record.set('article', data.artikel);
            plugin.context.record.set('notes', data.artikel);
            plugin.context.record.set('amount', data.amount);
            plugin.context.record.set('singleprice', data.epreis);
            plugin.context.record.set('unit', data.einheit);
        } catch (e) {
            console.error(e);
        }

        console.log(data, plugin.context.record);
    }

});

Ext.define('Tualo.reportarticlesets.form.field.SetsArea', {
    extend: 'Ext.form.field.Text',
    mixins: ['Tualo.reportarticlesets.Trigger'],
    alias: 'widget.tualo_report_article_set_area',
    requires: [
        'Ext.form.field.TextArea'
    ],
    triggers: {
        opends: {
            cls: 'x-fa fa-bars',
            tooltip: "Menü öffnen",
            handler: async function (btn) {
                let me = btn,
                    data = await me.querySets.bind(me)();

                me.createMenu(data).showAt(btn.getXY());
            }
        },
        initComponent: function () {
            let me = this;
            me.callParent();
            console.log('initComponent reportarticlesets', me);
        },

    }
});
