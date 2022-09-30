var inputCm = document.getElementById("inputCm");
var inputInches = document.getElementById("inputInches");
var inputFeet = document.getElementById("inputFeet");
var inputMeter = document.getElementById("inputMeter");
var inputKilometer = document.getElementById("inputKilometer");
var inputMile = document.getElementById("inputMile");
var inputYard = document.getElementById("inputYard");

function meterConverter(source, value) {
    value = parseFloat(value);

    if (source == "inputCm") {
        inputInches.value = (value * 0.39370).toFixed(2);
        inputFeet.value = (value * 0.032808).toFixed(3);
        inputMeter.value = (value / 100).toFixed(3);
        inputKilometer.value = (value / 100000).toFixed(6);
        inputMile.value = (value * 0.0000062137).toFixed(6);
        inputYard.value = (value * 0.010936).toFixed(3);

    };
    if (source == "inputInches") {
        inputCm.value = (value / 0.39370).toFixed(2);
        inputFeet.value = (value * 0.083333).toFixed(3);
        inputMeter.value = (value / 39.370).toFixed(3);
        inputKilometer.value = (value / 39370).toFixed(6);
        inputMile.value = (value * 0.000015783).toFixed(6);
        inputYard.value = (value * 0.027778).toFixed(3);

    };
    if (source == "inputFeet") {
        inputCm.value = (value / 0.032808).toFixed(2);
        inputInches.value = (value * 39.370).toFixed(2);
        inputMeter.value = (value / 3.2808).toFixed(2);
        inputKilometer.value = (value / 3280.8).toFixed(5);
        inputMile.value = (value * 0.00018939).toFixed(5);
        inputYard.value = (value * 0.33333).toFixed(2);
    }
    if (source == "inputMeter") {
        inputCm.value = (value / 0.01).toFixed(2);
        inputInches.value = (value * 39.370).toFixed(2);
        inputKilometer.value = (value / 1000).toFixed(5);
        inputMile.value = (value * 0.00062137).toFixed(5);
        inputYard.value = (value * 1.0936).toFixed(2);
        inputFeet.value = (value * 3.2808).toFixed(2);
    }
    if (source == "inputKilometer") {
        inputCm.value = (value * 10000).toFixed();
        inputInches.value = (value * 39370).toFixed();
        inputMeter.value = (value * 1000).toFixed();
        inputMile.value = (value * 0.62137).toFixed(2);
        inputYard.value = (value * 1093.6).toFixed();
        inputFeet.value = (value * 3.2808).toFixed();
    }
    if (source == "inputMile") {
        inputCm.value = (value * 10000).toFixed();
        inputInches.value = (value * 39370).toFixed();
        inputMeter.value = (value / 0.00062137).toFixed();
        inputKilometer.value = (value / 0.62137).toFixed(2);
        inputYard.value = (value * 1760).toFixed();
        inputFeet.value = (value * 5280).toFixed();

    }
    if (source == "inputYard") {
        inputCm.value = (value / 0.010936).toFixed();
        inputInches.value = (value * 36).toFixed();
        inputMeter.value = (value / 1.0936).toFixed(2);
        inputKilometer.value = (value / 1093.6).toFixed(5);
        inputMile.value = (value / 0.00056818).toFixed(5);
        inputFeet.value = (value * 3).toFixed();

    }
}