const pages=document.querySelectorAll(".page");

let page=0;

function show(i){

pages[page].classList.remove("active");

page=i;

if(page<0)page=0;

if(page>=pages.length)page=pages.length-1;

pages[page].classList.add("active");

}

document.getElementById("next").onclick=()=>{

if(page<pages.length-1)

show(page+1);

}

document.getElementById("prev").onclick=()=>{

if(page>0)

show(page-1);

}

let startX=0;

document.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

if(page<pages.length-1)

show(page+1);

}

if(endX-startX>50){

if(page>0)

show(page-1);

}

});
