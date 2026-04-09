Ext.define('Tualo.reportarticlesets.form.TemplateCommandWindow', {
    statics: {
        glyph: 'server',
        title: 'Vorgaben',
        tooltip: 'Vorgaben'
    },
    extend: 'Ext.panel.Panel',
    alias: 'widget.tualo_reportarticlesets_template_command',
    // insert ignore into ds_addcommands_xtypes (id,name) values ('tualo_reportarticlesets_template_command','Artikelvorgaben');

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'textfield',
        emptyText: "Suchen ...",
        triggers: {
            bar: {
                weight: 0,
                cls: Ext.baseCSSPrefix + "form-clear-trigger",
                handler: function (field) {
                    field.setValue("");
                    let store = field.up('window').getComponent('list').getStore(),
                        params = store.getProxy().getExtraParams();
                    if (Ext.isEmpty(params)) { params = {}; };
                    delete params.filter_by_search;
                    delete params.search;
                    store.getProxy().setExtraParams(params);
                    store.load();
                    // field.up('window').getController().setViewType("list");
                }
            }
        },
        listeners: {
            keyup: function (field, e) {
                if (!Ext.isEmpty(field.getValue())) {
                    if (field.getValue().length < 3) return;
                    let store = field.up('window').getComponent('list').getStore();
                    store.getProxy().setExtraParam("filter_by_search", 1);
                    store.getProxy().setExtraParam("search", field.getValue());
                    store.load();
                }
            },
            specialkey: function (field, e) {
                if (e.getKey() == e.ENTER) {
                    let store = field.up('window').getComponent('list').getStore();
                    store.getProxy().setExtraParam("filter_by_search", 1);
                    //                store.getProxy().setExtraParam("fulltext",2);
                    store.getProxy().setExtraParam("search", field.getValue());
                    store.load();
                    // field.up('window').getController().setViewType("list");
                }
            }
        },
    }, {
        title: null,
        itemId: 'list',
        xtype: 'dslist_view_editor_blg_sets_artikel',
        store: {
            type: 'view_editor_blg_sets_artikel_store',
            autoLoad: true,
        },
        listeners: {
            scope: this,
            itemdblclick: function (view, record) {
                console.log('itemdblclick', view, record);
            }
        },
        flex: 1,
    }],
    loadRecord: function (record, records, selectedrecords) {
        this.record = record;
        this.records = records;
        this.selectedrecords = selectedrecords;

    },
    getNextText: function () {
        return 'Übernehmen';
    },
    run: async function () {
        let me = this,
            data = me.selectedrecords[0].data;
        this.record.set(data);

        try {
            this.record.set('article', data.artikel);
            this.record.set('notes', data.artikel);
            this.record.set('amount', data.amount);
            this.record.set('singleprice', data.epreis);
            this.record.set('unit', data.einheit);
        } catch (e) {
            console.error(e);
        }

        return true;
    }
});

/*
// me.createMenu(data).showAt(btn.getXY());
var wnd = Ext.create('Ext.Window', {
    title: 'Artikelvorgaben',
    width: 600,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'textfield',
        emptyText: "Suchen ...",
        triggers: {
            bar: {
                weight: 0,
                cls: Ext.baseCSSPrefix + "form-clear-trigger",
                handler: function (field) {
                    field.setValue("");
                    let store = field.up('window').getComponent('list').getStore(),
                        params = store.getProxy().getExtraParams();
                    if (Ext.isEmpty(params)) { params = {}; };
                    delete params.filter_by_search;
                    delete params.search;
                    store.getProxy().setExtraParams(params);
                    store.load();
                    // field.up('window').getController().setViewType("list");
                }
            }
        },
        listeners: {
            specialkey: function (field, e) {
                if (e.getKey() == e.ENTER) {
                    let store = field.up('window').getComponent('list').getStore();
                    store.getProxy().setExtraParam("filter_by_search", 1);
                    //                store.getProxy().setExtraParam("fulltext",2);
                    store.getProxy().setExtraParam("search", field.getValue());
                    store.load();
                    // field.up('window').getController().setViewType("list");
                }
            }
        },
    }, {
        title: null,
        itemId: 'list',
        xtype: 'dslist_view_editor_blg_sets_artikel',
        store: {
            type: 'view_editor_blg_sets_artikel_store',
            autoLoad: true,
        },
        listeners: {
            scope: this,
            itemdblclick: function (view, record) {
                console.log('itemdblclick', view, record);
            }
        },
        flex: 1,
    }]

})
wnd.show();
*/