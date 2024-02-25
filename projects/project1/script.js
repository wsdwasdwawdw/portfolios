const navbar = document.querySelector(".navbar");
const bar = document.getElementById("bar");
const x = document.querySelector(".x");


bar.addEventListener("click", ()=>{
    navbar.style.right = "0";
});

x.addEventListener("click", ()=>{
    navbar.style.right = "-300px";
});
