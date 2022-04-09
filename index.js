$(() => {

	$('.button').on("click", () => {
		var rangeVal = $(".range").val();
		console.log(rangeVal);
		$(".title").html(`<h1 class="title is-${8 - rangeVal}">Macko++</h1>`);
	});
	
});
