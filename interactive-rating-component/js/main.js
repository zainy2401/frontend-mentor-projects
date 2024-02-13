var chosen;

function chooseRating(number){
    chosen = number;
    var selected = document.getElementsByClassName("number");
    for(var i = 0; i < selected.length; i++){
        selected[i].style.backgroundColor = "#34373a";
        selected[i].style.color = "rgb(172, 172, 172)";
    }
    selected[number-1].style.backgroundColor = "#FF740F";
    selected[number-1].style.color = "white";
    document.getElementById("submitter").removeAttribute("disabled");
}

function submitRating(){
    var parent = document.getElementsByTagName("main");
    parent[0].style.alignItems = "center";
    const img = "<img class='m' width='250px' src='./images/illustration-thank-you.svg' alt='thank you'>";
    const selection = "<span class='m selection'>You selected " + chosen + " out of 5</span>";
    const title = "<h1 class='m'>Thank you!</h1>";
    const para = "<p style='text-align:center;'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>";
    parent[0].innerHTML = img + selection + title + para;
}