/*$('#galeria li a').click(function(){
	var href = $(this).attr("href");
	console.log(href);
});*/

$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
});


//Agrega Overlay 

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//con imagen
$overlay.append($image);

//un texto
$overlay.append($caption);


//agregar el overlay al body
$("body").append($overlay);

//usuario da clic en un link
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");


	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
		$caption.text(texto);

		$overlay.show();

	console.log(href);
});

$overlay.click(function(){
	$overlay.hide();
});