function doLightBox(id)
{
    alert(id);
    let tagertDiv = document.getElementById("targetImage");
    //Eine style-class machen um die Lightbox sexy zu machen
    tagertDiv.classList.add("AmoTest");
    tagertDiv.src = id.src;
    
    

}