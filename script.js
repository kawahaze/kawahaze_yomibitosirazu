let current = 0;

const poem = document.getElementById("poem");
const number = document.getElementById("number");

function show(){

poem.innerHTML = poems[current].replace(/\n/g,"<br>");

number.textContent =
(current+1) + " / " + poems.length;

}

show();

document.getElementById("next").onclick=()=>{

current++;

if(current>=poems.length){

current=0;

}

show();

}

document.getElementById("prev").onclick=()=>{

current--;

if(current<0){

current=poems.length-1;

}

show();

}

const author =
document.getElementById("author");


poem.innerHTML =
poems[current].text.replace(/\n/g,"<br>");

author.textContent =
poems[current].author;
