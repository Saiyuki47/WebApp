// document.write(window.location.hostname );
// document.write(window.location.pathname);
// document.write(window.location.port);
// document.write(window.location.protocol);
// document.write(document.getElementById("groesseID").value + document.getElementById("gewichtID").value)
function calcBMI()
{
    //document.write(document.getElementById("groesseID").value+"         " + document.getElementById("gewichtID").value)
    let height = document.getElementById("groesseID").value;
    let fett = document.getElementById("gewichtID").value;
    if(height>3)
    {
        height=height/100;
    }
    
    let bmi = fett / (height*height);
    document.getElementById("bmiValue").innerText =(fett / (height*height)).toFixed(2);
}
function checkRegex(evt)
{
    evt.preventDefault();
    let regexForName = "^([A-ZÖÄÜ][a-zöäüß]+(\s[A-ZÖÄÜ][a-zöäüß]+)*)$";
    let regexForAnmerkung = "/<[^>]+>/";

    let name = document.getElementById("username").value;
    let anmerkung = document.getElementById("anmerkung").value;

    if(name != regexForName && anmerkung == regexForAnmerkung )
    {
        alert("Regex ist nicht");
        return false;
    }
    return true;
}

function calcBMI_AJAX()
{
    const xhttp = new XMLHttpRequest();
    let height = document.getElementById("groesseID").value;
    let fett = document.getElementById("gewichtID").value;
    xhttp.onload = function()
    {
        document.getElementById("bmiValue").innerHTML =this.response;
    };
    xhttp.open("GET","https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php"+"?groesse="+height+"&gewicht="+fett);
    xhttp.send();
}
// Macht das selbe wie calcBMI_AJAX
function calcBMI_Fetch()
{
    let height = document.getElementById("groesseID").value;
    let fett = document.getElementById("gewichtID").value;
    fetch("https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php"+"?groesse="+height+"&gewicht="+fett)
    .then(res =>res.response)
    .then(bmi => document.getElementById("bmiValue").innerHTML = bmi)
}




