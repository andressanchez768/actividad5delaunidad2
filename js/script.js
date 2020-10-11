$(document).ready(function(){

    $('#cuadro1').mouseover(function(){
        $(this).css("background","#eeeeee").css("color","black");
    });
    
    $('#cuadro1').mouseout(function(){
        $(this).css("background","white").css("color","black");
    });


    function changeIn(){
        $(this).css("background","#eeeeee").css("color","#297eff").css("font-weight","bold");
        }
        function changeOut(){
            $(this).css("background","white").css("color","#297eff").css("font-weight","normal");
        }
        $('.cuadro2').hover(changeIn, changeOut); 

});