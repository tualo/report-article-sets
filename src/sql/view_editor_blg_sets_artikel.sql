delimiter ;
create or replace view  `view_editor_blg_sets_artikel` as
select 
  blg_artikel_set.*,
  mengeneinheiten.name einheit,
  mengeneinheiten.symbol einheit_symbol,
  mengeneinheiten.faktor einheit_faktor

  from blg_artikel_set
  join artikelgruppen
  on blg_artikel_set.artikel = artikelgruppen.gruppe
  join mengeneinheiten
on artikelgruppen.einheit = mengeneinheiten.id
order by blg_artikel_set.position;


call fill_ds('view_editor_blg_sets_artikel');

call fill_ds_column('view_editor_blg_sets_artikel');