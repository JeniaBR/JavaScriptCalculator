$(document).ready(function () {
    var result = "";
    $('.button').click(function () {
        var res = $(this).attr("value");
        result += res;
    });

    $('#btn-equal').click(function () {
        $('#calc-current').text(eval(result));
        result = "";
    });

    $('#btn-clear-ac').click(function () {
        $('#calc-current').text("");
        result = "";
    });
});