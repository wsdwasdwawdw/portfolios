const p1 = document.querySelector(".project1");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const x = document.querySelector(".x");


p1.addEventListener("click", ()=>{
    window.open("projects/project1/index.html", "_blank");
});


menu.addEventListener("click", ()=>{
    burger.style.right = "5px";
});

x.addEventListener("click", ()=>{
    burger.style.right = "-100px";
});
