"use strict";

 var elem = document.getElementById("myDiv");
 var dragging = false;
 var lastX , lastY;

//defer beim einbinden vom Scribt ist notwendig sonst ist elem noch null
 elem.addEventListener("mousedown", function(evt) 
 {
    dragging = true;
    lastX = evt.clientX;
    lastY = evt.clientY;
 }
 , false);
 
elem.addEventListener("mousemove", 
function(evt)
{
    if (dragging)
    {
        var style = window.getComputedStyle(elem, null);
        var posx = parseInt(style.getPropertyValue("left"));
        var posy = parseInt(style.getPropertyValue("top"));
        //posx:50 posy:50
        //mousecord: e.g. 100 100
        var x = evt.clientX;
        var y = evt.clientY;
        let dx = x - lastX;
        let dy = y - lastY;
        elem.style.left = (posx + dx) + "px";
        elem.style.top = (posy + dy) + "px";
        lastX = x;
        lastY = y;
    }
 }
 , false);
 
 elem.addEventListener("mouseup", 
 function(evt) 
 {
    dragging = false;
 }
 )