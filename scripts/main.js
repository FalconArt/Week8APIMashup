$("#translateBtn").click(() => {

		$('#photos').html(" ");

		function makeLangString(wordTerm) {
			return `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0&text=${wordTerm}&lang=en`;
		}

		let newText;


	$.getJSON(makeLangString ($("#langInput").val() ) )
	.done(result => {
		newText = result.text[0];
		console.log(`The new text is ${newText}`);
		$("#langInput").val(newText);
		const photoURL = `https://api.unsplash.com/search/photos?page=1&query=${newText}&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0`;
		
		$("#photos").html("Loading...");

		$.getJSON(photoURL)
		.done(photos => {
			$("#photos").html("");
			//console.log(photos.results[0].urls.regular);
			for(let i = 0; i < photos.results.length; i++){
				const img = photos.results[i].urls.regular;
				$('#photos').append('<img src="' + img + '"/> <br />');
			}
		});

	});
	
});

/*Unsplash ID:
80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0

$.getJSON(url,function(apiresult1)}{
	
});

"https://api.unsplash.com/search/photos?page=1&query=" + newText + "&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0"

Yandex Key:
trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0
*/

skrollr.init();