$(document).ready(function(){
    $('.nav a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });
});

function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}