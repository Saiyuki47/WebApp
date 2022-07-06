"use strict";
class Rechteck
{
    constructor(top, left, width, height, color)
    {
        this._top    = top;
        this._left   = left;
        this._width  = width;
        this._height = height;
        this._color  = color;
    }
    draw(context)
    {

        context.fillStyle = this._color;
        context.fillRect(this._left,
                        this._top,
                        this._width,
                        this._height);
    }
}
let canvas = document.getElementById("theCanvas");
let context = canvas.getContext("2d");

document.getElementById("theCanvas").addEventListener("click",()=>randomEck());

function randomEck()
{

    var neuEck = new Rechteck(
                            50,
                            50,
                            Math.floor(Math.random*200),
                            Math.floor(Math.random*200),
                            
                            String("rgb("+Math.floor(Math.random*256)+","+Math.floor(Math.random*256)+","+Math.floor(Math.random*256)+")")
                        );
    neuEck.draw(context);
}
