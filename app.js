function updateHistory(input){
    $('#calc-history').text(input);
}

$(document).ready(function () {
    var result = "";
    $('.button').click(function () {
        var res = $(this).attr("value");
        result += res;
        updateHistory(result);
    });

    $('#btn-equal').click(function () {
        $('#calc-current').text(eval(result));
        result = "";
    });

    $('#btn-ac').click(function () {
        $('#calc-current').text("");
        result = "";
    });
});