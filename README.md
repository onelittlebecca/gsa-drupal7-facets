# gsa-drupal7-facets
To add facets for google search appliance in Drupal 7. 

Add google-appliance-results.tpl.php to your theme folder 

Turn off the default drupal search in modules. Install and turn on google appliance module (this module works in hand with the google appliance). Set your GSA frontend and collection. Then install this module.

Use the google search box (not block) in your code/theme. 
Add this code to your header or wherever you want your search box
$search_form = drupal_get_form('google_appliance_search_form'); 
and then just loaded that into page vars with  $vars['search_box'] = drupal_render($search_form);

OR just copy and paste this code (EASIEST WAY):
<?php $search_form = drupal_get_form('google_appliance_search_form'); ?>
<?php print drupal_render($search_form); ?>

into a PHP block (admin --> structure --> blocks --> add new block)
PHP block is prolly the easiest way to make this happen. There is styling in the css file for it. We didn't use a name for the search box block so some of the styling is under block-block-43 which is the block number for the box.

The rest of the module functionality is working and will work with a general system. We used the metadata module to set our terms. 

We also added some extra tags that weren't inculded in the metadata module within the .module file.

The only other action you will need to take is with whoever oversees your Google Search Appliance settings. You will need to tell them what filters you would like exposed. You may need to change or alter some of the css in the css file to make it look and feel the way you want it to. 

There are three blocks that are created by the module. One is for dynamic nav and will offer subjects, authors, etc (your exposed filters). One is a data range which will allow the user to add date range via slider as a search filter. The third is a One Box collections block that you can add in if you want to use it (you also need to turn on OneBox in your GSA backend).


Hope this helps!
