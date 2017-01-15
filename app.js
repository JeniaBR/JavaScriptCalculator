var maxLength = "9";
var maxHistoryLength = "27";
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
    var reg = /[\+\-\*\/]/g;
    var lastChar = evalHistory.slice(-1);

    if (entryVal.length > 0 && entryVal !== '0') {
        if (reg.test(lastChar)) {
            evalHistory = evalHistory + entryVal + op;
        } else {
            evalHistory = entryVal + op;
        }
        entryVal = '0';
    } else if (evalHistory.length > 0) {
        if (reg.test(lastChar)) {
            evalHistory = evalHistory.slice(0, -1);
        }
        evalHistory = evalHistory + op;
    }

    if (evalHistory.length > maxHistoryLength) {
        var temp = evalHistory;
        temp = "..." + evalHistory.slice(-(maxHistoryLength));
        $('#calc-history').text(temp);
    } else {
        $('#calc-history').text(evalHistory);
    }

}

$(document).ready(function () {

    $('#calc-current').text('0');
    hookEntryEvents();
    hookMathEvents();

    $('#btn-ac').click(function () {
        entryVal = '0';
        $('#calc-current').text(entryVal);
        evalHistory = '';
        $('#calc-history').text('');
    });

    $('#btn-clear').click(function () {
        entryVal = '0';
        $('#calc-current').text(entryVal);
    });

    $('#btn-del').click(function () {
        if (entryVal.length == 1) {
            entryVal = "0";
        } else {
            entryVal = entryVal.slice(0, -1);
        }
        $('#calc-current').text(entryVal);
    });

    $('#btn-equal').click(function () {
        if (entryVal.length > 0 && entryVal !== '0') {
            evalHistory += entryVal;
        }

        if (evalHistory.length > 0) {
            var evalHistoryString = eval(evalHistory).toString();
            if (evalHistoryString.length > maxLength) {
                $('#calc-current').text(eval(evalHistory).toExponential(3));
            } else {
                $('#calc-current').text(eval(evalHistory));
            }

            if (evalHistory.length > maxHistoryLength) {
                var temp = evalHistory;
                temp = "..." + evalHistory.slice(-(maxHistoryLength));
                $('#calc-history').text(temp);
            } else {
                $('#calc-history').text(evalHistory);
            }


        }

        entryVal = '0';
        evalHistory = '';

    })
});