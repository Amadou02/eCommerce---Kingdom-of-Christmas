$(function(){
  //Carrousel
  setInterval(function(){
    let taille = $('#carrousel li').outerWidth(true);
    $("#carrousel ul").animate({marginLeft: -taille},2000,function(){ $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
  })
}, 6000);
$('#home').click(function(event){
  event.preventDefault();
});
$('#disguise').click(function(event){
  event.preventDefault();
});
$('#sweater').click(function(event){
  event.preventDefault();
});
$('#sock').click(function(event){
  event.preventDefault();
});
$('#pajamas').click(function(event){
  event.preventDefault();
});
$('#accessory').click(function(event){
  event.preventDefault();
});
});
