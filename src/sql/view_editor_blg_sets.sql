delimiter ;

create or replace view  `view_editor_blg_sets` as
select 
  blg_artikel_set.belegart,
  blg_sets.id,
  blg_sets.name
from
  blg_artikel_set 
  join 
  blg_sets
  on blg_artikel_set.blg_sets = blg_sets.id

group by 
  blg_artikel_set.belegart,
  blg_sets.id;
call fill_ds('view_editor_blg_sets');
call fill_ds_column('view_editor_blg_sets');