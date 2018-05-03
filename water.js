$(document).ready(function(){

 // all code does in here

$("#puppy").click(function(){
    $("h1").addClass("page-header highlight");

}); // ends

$(".show-btn").click(function(){
    $("div.Money-Money-Money").show();
    $("div.The-Water-Girl").fadeIn("The-Water-Girl");
    $("div.A-Dry-Spell").fadeIn("A-Dry-Spell");
    $("div.Info-Graphic").fadeIn(50);
    $("div.End-Game").fadeIn(200);
}); // ends show function

$(".hide-btn").click(function(){
    $("div.Money-Money-Money").hide();
    $("div.The-Water-Girl").fadeOut("The-Water-Girl");
    $("div.A-Dry-Spell").fadeOut("A-Dry-Spell");
    $("div.Info-Graphic").fadeOut(50);
    $("div.End-Game").fadeOut(200);
}); // ends show function


}) // ends doc ready


