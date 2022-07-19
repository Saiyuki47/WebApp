function checkKreditNummer()
{
    const xhttp = new XMLHttpRequest();
    let name = document.getElementById("name").value;
    let KreditNummer = document.getElementById("Kreditkartennummer").value;
    xhttp.onload = function () 
    {
        if (this.response)
        {
            document.getElementById("Fortsetzen").removeAttribute("disabled");
        }
        else
        {
            document.getElementById("Fortsetzen").setAttribute("disabled", "disabled");
        }
    };

    xhttp.open("GET", "verfify.php" + "?name=" + name + "&Kreditkartennummer=" + KreditNummer);
    xhttp.send();
}