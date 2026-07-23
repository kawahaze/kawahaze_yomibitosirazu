let current = 0;

const poem = document.getElementById("poem");
const author = document.getElementById("author");
const number = document.getElementById("number");

function show(){

poem.classList.remove("show");
author.classList.remove("show");

setTimeout(() => {

    poem.innerHTML =
        poems[current].text.replace(/\n/g,"<br>");

    author.textContent =
        poems[current].author;

    number.textContent =
        (current+1) + " / " + poems.length;

    poem.classList.add("show");
    author.classList.add("show");

},300);

}


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

document
.getElementById("openBook")
.onclick=()=>{

    document
    .getElementById("cover")
    .classList.add("hidden");

    document
    .getElementById("viewer")
    .classList.remove("hidden");

    document
    .getElementById("navigation")
    .classList.remove("hidden");

    show();

}

