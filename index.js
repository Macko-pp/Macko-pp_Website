$(() => {

	$('.button').on("click", () => {
		var rangeVal = $(".range").val();
		console.log(rangeVal);
		$(".main-title").html(`<h1 class="title main-title is-${8 - rangeVal}">Macko++</h1>`);
	});
	
});
