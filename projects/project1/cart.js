

let allIn = JSON.parse(localStorage.getItem("cara"));

console.log(allIn)



const main = document.querySelector(".main");
const total = document.querySelector(".total");
const nums = document.querySelector(".nums");
let AllPrice = [];
let sum = 0;
let counter = 0;
let quantities = Array(allIn.length).fill(1);
let totals = 0; // Make sure to initialize totals variable
//let selectedSizes = Array(min.length).fill(''); 
// Check if min is not null or undefined before using min.length


const subok = [];


if (allIn && allIn.length) {
  

  for (let i = 0; i < allIn.length; i++) {
    main.innerHTML += `
        <div style="
            width: fit-content; 
            height: 300px; 
            background-color: white;
            margin: 20px 0 0 0;
            border: 2px solid black;
            display: flex;">
            <img src="img/all/${allIn[i]}.jpg" style="width: 200px; "/>
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 10px;
                color: black;
                position: relative;">
                    <div>
                        ${allIn[i]} shirt<br>
                        <p class="price${i}">₱-</p>
                    </div>
                    <div style="display: flex;">
                        <button onclick="small(${i})" class="small${i}">Small</button>
                        <button onclick="medium(${i})" class="medium${i}">Medium</button>
                        <button onclick="large(${i})" class="large${i}">Large</button>
                    </div>

                    <div style="
                    margin: 0 5% 0 5%; 
                    width: 100px;
                    display: flex;
                    justify-contents: center;
                    align-items: center;
                    ">
                        <button onclick="sub_min(${i})">-</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <p class="num-min${i}">${quantities[i]}</p>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button onclick="add_min(${i})" class="add">+</button>
                    </div>
                    
                    <div style=" cursor: pointer; margin: 250px 0 0 0; position: absolute;
                        background-color: red; width: 100%; display: flex; justify-content: center; padding: 10px 0; color: black;"
                        onclick="removeItem(${i})">
                        <i class="fa fa-trash"></i>
                    </div>
            </div>
        </div>
    `;
    
    function add_min(a) {
      quantities[a]++;
      console.log(quantities);
      document.querySelector(`.num-min${a}`).innerHTML = `${quantities[a]}`;
      
    }

    function sub_min(a) {
      if (quantities[a] > 0) {
        quantities[a]--;
        console.log(quantities);
        document.querySelector(`.num-min${a}`).innerHTML = `${quantities[a]}`;
        
        
      }
    }
    
    function removeItem(index) {
      
        // Remove the corresponding item from the DOM
        const itemToRemove = document.querySelector(`.main > div:nth-child(${index + 1})`);
        itemToRemove.style.display = "none";
  
        
        let targetValue = allIn[index];
        let bura = allIn.indexOf(targetValue);
        console.log(bura);
        quantities[bura] = 0;
        AllPrice[bura] = 0;

        // Remove the item from the arrays
        allIn[index] = "";

       
        // Update localStorage with the modified arrays
        //localStorage.setItem("allIn", JSON.stringify(allIn));
        
        console.log(allIn);
        console.log(quantities);
        console.log(AllPrice);

        // After removing the item, update the onclick attribute for the "X" elements
        updateRemoveItemEventListeners();
        //checkAndAlertEmptyCart();
      }

    function small(a){
      document.querySelector(`.price${a}`).innerHTML = "₱100";
      document.querySelector(`.small${a}`).style.backgroundColor = "#a9e07c";
      document.querySelector(`.medium${a}`).style.backgroundColor = "#74716f";
      document.querySelector(`.large${a}`).style.backgroundColor = "#74716f";
      AllPrice[a] = 100;
      console.log(AllPrice);
      
      
    }
    function medium(a){
      document.querySelector(`.price${a}`).innerHTML = "₱200";
      document.querySelector(`.medium${a}`).style.backgroundColor = "#a9e07c";
      document.querySelector(`.small${a}`).style.backgroundColor = "#74716f";
      document.querySelector(`.large${a}`).style.backgroundColor = "#74716f";
      AllPrice[a] = 200;
      console.log(AllPrice);

      
    }
    function large(a){
      document.querySelector(`.price${a}`).innerHTML = "₱300";
      document.querySelector(`.large${a}`).style.backgroundColor = "#a9e07c";
      document.querySelector(`.medium${a}`).style.backgroundColor = "#74716f";
      document.querySelector(`.small${a}`).style.backgroundColor = "#74716f";
      AllPrice[a] = 300;
      console.log(AllPrice);

      
    }
    function calculate(){
      sum = 0;
      for(let j = 0; j < AllPrice.length; j++){
        let allSum = AllPrice[j] * quantities[j];
        sum = sum + allSum;
      }
      console.log(sum);
    
      totals = sum;
    
      total.innerHTML = `Total: ${totals}`;

    }
  }
}


function updateRemoveItemEventListeners() {
      const removeButtons = document.querySelectorAll(".main > div > div[style*='cursor: pointer;']");
      removeButtons.forEach((button, index) => {
        button.setAttribute("onclick", `removeItem(${index})`);
      });
    }


  


function checkout(){
    alert("Your orders has been placed!!");
    localStorage.removeItem("min");
    localStorage.removeItem("graphic");
    localStorage.removeItem("street");
    localStorage.removeItem("allIn");

    min = [];
    graphic = [];
    street = [];
    AllPrice = [];
    quantities = [];
    allIn = [];
    sum = 0;
    totals = 0;
    main.innerHTML = "";
    total.innerHTML = "Total: 0.00";
    
    localStorage.setItem("allIn", JSON.stringify(allIn));
}

