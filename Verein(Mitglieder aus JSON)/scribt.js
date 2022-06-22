var mitglieder = null;
function loadSite()
{
    document.getElementById("startButton").style.visibility      = "hidden";
    document.getElementById("vereinMitglieder").style.visibility = "visible";
    document.getElementById("gruppe_list_div").style.visibility  = "visible";
    //get table in a variable
    let table = document.getElementById("vereinMitglieder");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        mitglieder = JSON.parse(this.responseText);
        for(let j= 0 ; j < mitglieder.length ; j++)
    {
        let row      = table.insertRow(j+1);
        let name     = row.insertCell(0);
        let vorname  = row.insertCell(1);
        let email    = row.insertCell(2);    
        let gruppe   = row.insertCell(3);

        name.innerHTML          = mitglieder[j].name;
        vorname.innerHTML       = mitglieder[j].vorname;
        email.innerHTML         = mitglieder[j].email;
        if(j%2==0)
        {
            row.style.background   = "grey";
        }
        gruppe.innerHTML        = "<button type='button' onclick='addOrRemoveFromTable(true,"+j+")' >Add</button>"+
                                  "<button type='button' onclick='addOrRemoveFromTable(false,"+j+")' >Delete</button>"; 
    }
    };
    xhttp.open("GET","mitglieder.json");
    xhttp.send();
}
//if remOrAdd = false -> delete user 
//else append user
function addOrRemoveFromTable(remOrAdd,index) 
{
    let ul = document.getElementById("gruppenteilnehmer");
    let items = ul.getElementsByTagName("li");
    let isInList = false;

    //Check if user already in List
    if (document.getElementById(index.toString()) !== null)
    {
        isInList = true;
    }
    //if user in list and 
    if(remOrAdd && !isInList)
    {
        let li = document.createElement("li");
        li.id = index;
        li.innerHTML = mitglieder[index].vorname + " " + mitglieder[index].name ;
        ul.appendChild(li);
    }
    else if(!remOrAdd && isInList)
    {
        document.getElementById(index.toString()).remove();
    }
}