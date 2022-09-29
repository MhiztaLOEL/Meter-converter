let millimeter = document.getElementById("milli");
let centimeter = document.getElementById("centi");
let decimeter = document.getElementById("deci");
let kilometer = document.getElementById("kilo");
let meter = document.getElementById("meter");

// function addintion 
function milliToOther(val) {
    centi.value = val / 10;
    deci.value = val / 100;
    kilo.value = val / 1000000;
    meter.value = val / 1000;
}

function centiToOther(val) {
    milli.value = val * 10;
    deci.value = val / 10;
    kilo.value = val / 100000;
    meter.value = val / 100;
}

function deciToOther(val) {
    milli.value = val * 100;
    centi.value = val * 10;
    kilo.value = val / 10000;
    meter.value = val / 10;
}

function kiloToOther(val) {
    centi.value = val * 100000;
    deci.value = val * 10000;
    milli.value = val * 1000000;
    meter.value = val * 1000;
}

function meterToOther(val) {
    centi.value = val * 100;
    deci.value = val * 10;
    kilo.value = val / 1000;
    milli.value = val * 1000;
}


function convertToOthers(convertFrom, value) {
    switch (convertFrom) {
        case "milli":
            milliToOther(parseFloat(value));
            break;
        case "centi":
            centiToOther(parseFloat(value));
            break;
        case "deci":
            deciToOther(parseFloat(value));
            break;
        case "kilo":
            kiloToOther(parseFloat(value));
            break;
        case "meter":
            meterToOther(parseFloat(value));
            break;
    }
}