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



