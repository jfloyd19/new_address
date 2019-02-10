$(document).ready(function() { // do this when the document is loaded
	$("#Content_dialer").show(); // show the element with ID "element"
	$("#Content_Contact_List").hide(); // hide the element with ID "otherElement"
  $("#Content_Add_Contact").hide(); // hide the element with ID "otherElement"
	$("#Content_Help").hide();


});


$("#Contact_List").click(function() { // when "button_id" is clicked
	$("#Content_Contact_List").show(); // show element
	$("#Content_Dialer").hide();	// hide other element
  $("#Content_Add_Contact").hide();	// hide other element
	$("#Content_Help").hide();

});

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#Content_Dialer").show(); // show element
	$("#Content_Contact_List").hide();	// hide other element
  $("#Content_Add_Contact").hide();	// hide other element
	$("#Content_Help").hide();
});

$("#Add_Contact").click(function() { // when "button_id" is clicked
	$("#Content_Add_Contact").show(); // show element
	$("#Content_Contact_List").hide();	// hide other element
  $("#Content_Dialer").hide();	// hide other element
	$("#Content_Help").hide();
});

$("#Help").click(function() { // when "button_id" is clicked
	$("#Content_Help").show(); // show element
	$("#Content_Contact_List").hide();	// hide other element
  $("#Content_Dialer").hide();	// hide other element
	$("#Content_Add_Contact").hide();
});

$("#dialer_pad button").click(function() {
	$("#dialer_input").val($("#dialer_input").val() + this.innerText);
})

$("#Clear").click(function() {
	$("#dialer_input").val("");
})
