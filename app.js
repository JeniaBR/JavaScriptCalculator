$(document).ready(function () {
    
    $('#btn-equal').click( function () {
        var res = $('#input').val();
        $('#result').text(eval(res));
    });
});