function makeString(wordTerm){
	return "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0&text=" + wordTerm + "&lang=en";
}

$("#translateBtn").click(function(){
	$.getJSON(makeString ($("#langInput").val() ),function(result){
		console.log(result);
	for(var i = 0; i < array[1].text; i++){
		$('#newText').append(array[1].text);
		}
	});
	
});


/*Unsplash ID:
80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0

Yandex Key:
trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0
*/

skrollr.init();