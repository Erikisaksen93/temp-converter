let celcius = 0;


function getData() {
    celcius = parseInt(document.getElementById("text_input").value);
  }


function convertKel() {

    let kelvin = celcius + 273;
    document.getElementById("text_output").innerHTML = `${kelvin}K`;
}

function convertFahr() {
    let fahrenheit = Math.floor(celcius * (9/5) + 32);
    document.getElementById("text_output").innerHTML = `${fahrenheit}&#xb0;F`;
}

function convertNew() {
    let newton = Math.floor(celcius * (33/100));
    document.getElementById("text_output").innerHTML = `~${newton} N`;
}

function clearAll() {
    celcius = 0;
    document.getElementById("text_output").innerHTML = "";
    document.getElementById("text_input").value = "";
}