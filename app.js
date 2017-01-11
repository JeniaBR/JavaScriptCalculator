var maxLength = "10";
var entryVal = "0";
var showHistory = "";
var evalHistory = "";

function hookEntryEvents() {
    $("#btn-0").click(function () {
        updateEntry("0");
    });
    $("#btn-1").click(function () {
        updateEntry("1");
    });
    $("#btn-2").click(function () {
        updateEntry("2");
    });
    $("#btn-3").click(function () {
        updateEntry("3");
    });
    $("#btn-4").click(function () {
        updateEntry("4");
    });
    $("#btn-5").click(function () {
        updateEntry("5");
    });
    $("#btn-6").click(function () {
        updateEntry("6");
    });
    $("#btn-7").click(function () {
        updateEntry("7");
    });
    $("#btn-8").click(function () {
        updateEntry("8");
    });
    $("#btn-9").click(function () {
        updateEntry("9");
    });
    $("#btn-dot").click(function () {
        updateEntry(".");
    });
}

function hookMathEvents() {
    $("#btn-percentage").click(function () {
        updateHistory("%");
    });
    $("#btn-division").click(function () {
        updateHistory("/");
    });
    $("#btn-multi").click(function () {
        updateHistory("*");
    });
    $("#btn-minus").click(function () {
        updateHistory("-");
    });
    $("#btn-plus").click(function () {
        updateHistory("+");
    });
}

function updateEntry(val) {
    if (entryVal.length < maxLength) {
        if (val == '.' && entryVal == '0') {
            entryVal = '0.';
        } else if (entryVal == '0') {
            entryVal = val;
        } else if (val == '.' && entryVal.indexOf('.') > 0) {
            return;
        } else {
            entryVal += val;
        }

        $('#calc-current').text(entryVal);
    }
}

function updateHistory(op) {
    $('#calc-current').text(op);
}

$(document).ready(function () {

    $('#calc-current').text('0');
    hookEntryEvents();
    hookMathEvents();

    $('#btn-ac').click(function () {
        entryVal = '0';
        $('#calc-current').text(entryVal);
    })
});