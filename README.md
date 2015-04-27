# gsa-drupal7-facets
To add facets for google search appliance in Drupal 7. 

Add google-appliance-results.tpl.php to your theme folder 

Use the google search box (not block) in your code/theme. 
Add this code to your header or wherever you want your search box
$search_form = drupal_get_form('google_appliance_search_form'); 
and then just loaded that into page vars with  $vars['search_box'] = drupal_render($search_form);

OR just copy and paste this code:
<?php $search_form = drupal_get_form('google_appliance_search_form'); ?>
<?php print drupal_render($search_form); ?>

into a PHP block (admin --> structure --> blocks --> add new block)
PHP block is prolly the easiest way to make this happen. There is styling in the css file for it. We didn't use a name for the search box block so some of the styling is under block-block-43 which is the block number for the box.

The rest of the module functionality is working and will work with a general system. We used the metadata module to set our terms. 
We also added some extra tags that weren't inculded in the metadata module within the .module file.

The only other action you will need to take is with whoever oversees your Google Search Appliance settings. You will need to tell them whatfilters you would like exposed.


Hope this helps!
