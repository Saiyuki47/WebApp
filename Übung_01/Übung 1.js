function bmi() {
    var gender, size, height
    size = document.getElementById("size").valueAsNumber
    height = document.getElementById("height").valueAsNumber
    if (document.getElementById("gender_m").checked) {
        gender = "m"
    } else {
        gender = "w"
    }
    document.getElementById("result").innerHTML = (size / (height*height)).toPrecision(4)
    document.getElementById("result-div").style["display"] = "flex"
}