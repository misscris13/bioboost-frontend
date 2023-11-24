function pressButton(n) {

    if (document.getElementById(n).style.backgroundColor == "rgb(138, 164, 211)") {
        document.getElementById(n).style.backgroundColor = "#F2F1F1";
    } else {
        document.getElementById(n).style.backgroundColor = "#8AA4D3";
    }
}