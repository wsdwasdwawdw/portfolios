const buttons = document.querySelectorAll(".cart"),
items = document.querySelectorAll(".notif");

const item_list = ["Cartoon Floral", "Lilies", "Painting Floral", "Sakura", "Glazies", "Polo RedBlue", "Flower", "Doodles", "SkyBlue", "Checkered", "White Polo", "G-Star", "Blue Polo", "Stripes", "Brown", "Black"];
let item_to_add = [];
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        items[i].innerHTML = "Added to cart";
        console.log("item added");
        item_to_add.push(item_list[i]);
        localStorage.setItem("cara", JSON.stringify(item_to_add));
        console.log(item_to_add);
    });
};

