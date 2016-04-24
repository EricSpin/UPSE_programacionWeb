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

//creamos el menu lateral 
var $select = $("<select></select>");
$("#menu").append($select);

//Recorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
	//Crear una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");

	//Obtener el valor de la opcion del atributo href
	$option.val($anchor.attr("href"));

	//Obtener el text de cada opcion
	$option.text($anchor.text());

	//agregar la opcion al select
	$select.append($option);

	//Obtener si el link es la pagina actual

	if($(this).hasClass("selected"))
	{
		$option.prop("selected", true);
	}
});

//boton de seleccion
/*var $button = $("<button>Go</button>");
$("#menu").append($button);*/

/*$button.click(function(){
	//Toma el valor de la opcion seleccionada
	window.location = $select.val();
});*/

$select.change(function(){
	//Toma el valor de la opcion seleccionada
	window.location = $select.val();
});