$(document).on('ready', function() {
	$("body").on("click", "#addTocart", function(event){
		var id = $(this).attr("data-book-id");
		event.preventDefault();
		$.ajax({
			url : "../cart/add/"+id,
			data : {bookid:1},
			success : function(data){

				$("#snackbar").html("Add To Cart");
				var x = document.getElementById("snackbar");
				x.className = "show";
				setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
				totalCart();
			}
		})
	});



function totalCart(){
	$.ajax({
		url: "../cart/totalcart",
		success: function(data){
			$("#gettotalcart").html(data);
			console.log(data)
		}
	})
}


$("input[name='qty']").TouchSpin({
	min: 1,
	max: 10,
	verticalbuttons: false
});
$('article').readmore({speed: 500});



