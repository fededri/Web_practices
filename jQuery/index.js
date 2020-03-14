$("h1").css("color","red");

$(document).keypress(function(event){
  console.log(event)
  $("h1").text(event.key)
});


$(document).on("click", function(){
  $("h1").css("color", "purple");
})
