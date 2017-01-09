$(document).ready(function () {
    
    $('#btn-equal1').click( function () {
        var res = $('#input').val();
        $('#calc-current').text(eval(res));
    });
});