//Fact button
$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

//Facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//Pink button
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

//Orange button
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

//Green Button
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//Grow Button
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

//Shrink Button
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})