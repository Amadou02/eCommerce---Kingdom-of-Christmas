$(function(){
//Carrousel
setInterval(function(){
let taille = $('#carrousel li').outerWidth(true);
$("#carrousel ul").animate({marginLeft: -taille},2000,function(){ $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
})
}, 6000);
});
