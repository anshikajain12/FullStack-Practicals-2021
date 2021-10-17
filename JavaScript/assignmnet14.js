let add = document.querySelector("#increament")
let remove = document.querySelector("#decreament");

let counter = document.querySelector("#number");
let countervalue = 0;


increment.addEventListener("click" , ()=>{
    countervalue++;
    counter.innerText = countervalue;
})
;
decrement.addEventListener("click" , ()=>{
    countervalue--;
    counter.innerText = countervalue;
});
