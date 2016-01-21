
/*
 * 		JS code for the gallery
 */
 
 // variables compiled once on page load. 
 var albums_template;
 
 // helper function to instantiate the template
 // and display the results in the content div
 function showTemplate(template, data) {
	var html = template(data);
	$('#content').html(html);
 }
 
 // document read will be called when the whole document
 // is loaded. Most of the code goes here.
 $(document).ready(function() {
	
	// Compile the template ready to use
	var source = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
	
	// display animals_data data into albums_template
	// and put it into content div.
	showTemplate(albums_template, animals_data);
 });