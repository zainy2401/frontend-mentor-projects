function toggle(slide){
    var content = document.getElementsByTagName("p")[slide];
    var icon = document.getElementsByClassName("toggler")[slide];
    if(content.style.height == ""){
        content.style.height = "initial";
        content.style.padding = "25px 0";   
        icon.src = "images/icon-minus.svg";
    }else{
        content.style.height = "";
        content.style.padding = "";
        icon.src = "images/icon-plus.svg";
    }
}