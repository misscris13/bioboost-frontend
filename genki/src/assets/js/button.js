function pressButton(n) {

    if (document.getElementById(n).style.backgroundColor == "rgb(138, 164, 211)") {
        document.getElementById(n).style.backgroundColor = "#F2F1F1";
    } else {
        document.getElementById(n).style.backgroundColor = "#8AA4D3";
    }
}

function pressButtonBlue(n) {

    if (document.getElementById(n).style.backgroundColor == "rgb(138, 164, 211)") {
        document.getElementById(n).style.backgroundColor = "#8AA4D366";
    } else {
        document.getElementById(n).style.backgroundColor = "#8AA4D3";
    }
}

function pressButtonWhite(n) {

    if (document.getElementById(n).style.backgroundColor == "rgb(138, 164, 211)") {
        document.getElementById(n).style.backgroundColor = "#FFFFFF";
    } else {
        document.getElementById(n).style.backgroundColor = "#8AA4D3";
    }
}