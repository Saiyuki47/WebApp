let mitglieder = [
    {
        name    : "Smith",
        vorname : "John",
        email   : "foo@bar.com"
    },
    {
        name    : "Doe",
        vorname : "Jane",
        email   : "jane@doe.org"
    }

]  

function loadSite()
{
    document.getElementById("startButton").style.visibility      = "hidden";
    document.getElementById("vereinMitglieder").style.visibility = "visible";
    let table = document.getElementById("vereinMitglieder");

    // for(let i= 0; i<mitglieder.length;i++)
    // {
        for(let j= 0; j<mitglieder.length;j++)
        {
            let row      = table.insertRow(j+1);
            row.style.backround = "lime";
            let name     = row.insertCell(0);
            let vorname  = row.insertCell(1);
            let email    = row.insertCell(2);    
            let gruppe   = row.insertCell(3);

            name.innerHTML          = mitglieder[j].name;
            vorname.innerHTML       = mitglieder[j].vorname;
            email.innerHTML         = mitglieder[j].email;
            email.style.backround   = "grey"
            gruppe.innerHTML        = "<button type='button' id='addButton' >Add</button>"+
                                      "<button type='button' id='delButton' >Delete</button>"; 
        }
    // }
    function addCell(row,cell,text)
    {
        //table.insertRow(row).insertCell(cell).innerHTML = text;
        let row2     = table.insertRow(row);
        let tmp      =row2.insertCell(cell);
        tmp.innerHTML = text;

        // let vorname =row2.insertCell(cell+1);
        // let email   =row.insertCell(cell+2);    
        // let gruppe  = row.insertCell(cell+3);
        // name.innerHTML      = "Saiz"//mitglieder[i].name;
        // vorname.innerHTML   = "David"//mitglieder[i].vorname;
        // email.innerHTML     = "Leon@weber.com"//mitglieder[i].email;
        // gruppe.innerHTML    = "<button type='button' >Add</button>";
    }   
    



}