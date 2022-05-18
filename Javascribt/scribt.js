document.write("<h1>Hallo Web-Apps</h1>");

function myFunction()
{
    alert("Hello");
}
function forLoop()
{
    for(let i=0;i<=10;i++)
    {
        let geradeOrNot;
        if(i%2==0)
        {
            geradeOrNot="gerade";
        }
        else
        {
            geradeOrNot="ungerade";
        }
        document.writeln(i+" ist "+geradeOrNot +"<br>");
    }
    document.write("<br><br>");
    i=0;
}
function WhileLoop()
{
    while(i<=10)
    {
        let geradeOrNot;
        if(i%2==0)
        {
            geradeOrNot="gerade";
        }
        else
        {
            geradeOrNot="ungerade";
        }
        document.writeln(i+" ist "+geradeOrNot +"<br>");
        i++;
    }
    document.write("<br><br>");
    i=0;
}
function doWhileLoop()
{
do
    {
        let geradeOrNot;
        if(i%2==0)
        {
            geradeOrNot="gerade";
        }
        else
        {
            geradeOrNot="ungerade";
        }
        document.writeln(i+" ist "+geradeOrNot +"<br>");
        i++;
    }
    while(i<=10)
}

function switchCases()
{
    switch(new Date().getDay())
    {
        case 1:
            alert("Montag");
            break;
        case 2:
            alert("Dienstag");
            break;
        case 3:
            alert("Mittwoch");
            break;
        case 4:
            alert("Donnerstag");
            break;
        case 5:
            alert("Freitag");
            break;
        case 6:
            alert("Samstag");
            break;
        case 0:
            alert("Sonntag");
            break;
    }
}
function addTwoValuesAndStrings(a,b)
{
    document.write(a+b);
}
function summe(n)
{
    if(n<1) return 0;
    return summe(n-1)+n;
}
function summeErg(n)
{
    let tmp = summe(5);
    document.write(tmp);
}
function fakultät(n)
{
    if(n<1) return 1;
    return fakultät(n-1)*n;
}
function fakultätErg(n)
{
    let tmp = fakultät(5);
    document.write(tmp);
}
function fakultätIterativ(n)
{
    let tmp = 1;
    for(let i =1;i<=n;i++)
    {
        tmp*=i;
    }
    document.write(tmp);
}
function pattern(n)
{
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '*'. repeat(i*2 -1)

        document.getElementById("preTag").innerHTML+=str+str2+str+"\n";
    
      }
}
function getDayWithArray()
{
    const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    alert(weekday[new Date().getDay()]);
}

















