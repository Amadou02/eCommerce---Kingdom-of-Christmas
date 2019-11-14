$(function(){
//Carrousel
setInterval(function(){
let taille = $('#carrousel li').outerWidth(true);
$("#carrousel ul").animate({marginLeft: -taille},2000,function(){ $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
})
}, 6000);
$('#home').click(function(event){
  event.preventDefault();
  $('#carrousel, #article').hide();
  $('.home').show();
  $('#disguise').click(function(event){
    event.preventDefault();
    $('#carrousel, #article').hide();
    $('.disguise').show();
    $('#sweater').click(function(event){
      event.preventDefault();
      $('#carrousel, #article').hide();
      $('.sweater').show();
      $('#sock').click(function(event){
        event.preventDefault();
        $('#carrousel, #article').hide();
        $('.sock').show();
        $('#pajamas').click(function(event){
          event.preventDefault();
          $('#carrousel, #article').hide();
          $('.pajamas').show();
          $('#accessory').click(function(event){
            event.preventDefault();
            $('#carrousel, #article').hide();
            $('.accessory').show();
});
});
