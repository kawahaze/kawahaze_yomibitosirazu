let current = 0;

const author =
document.getElementById("author");


poem.innerHTML =
poems[current].text.replace(/\n/g,"<br>");

author.textContent =
poems[current].author;

const number = document.getElementById("number");

function show(){

    poem.classList.remove("show");

    author.classList.remove("show");

    poem.classList.add("fade");

    author.classList.add("fade");

    setTimeout(()=>{

        poem.innerHTML =
        poems[current].text.replace(/\n/g,"<br>");

        author.textContent =
        poems[current].author;

        number.textContent =
        (current+1)+" / "+poems.length;

        poem.classList.add("show");

        author.classList.add("show");

    },400);

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

