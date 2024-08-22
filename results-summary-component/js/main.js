let data = document.getElementsByTagName("i");
let totalScore = 0;

for(let i = 0; i <  data.length; i++){
    totalScore += Number(data[i].innerHTML);
}

let percentage = ((totalScore/400)*100).toString();
if(percentage == "100"){
    percentage = percentage.substring(0,3);
}else{
    percentage = percentage.substring(0,2);
}

document.getElementById("totalScore").innerHTML = percentage;