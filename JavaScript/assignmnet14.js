let add = document.getElementById('increament');
let remove = document.getElementById('decreament');

let int = document.getElementsById('number');
let integer = 0;


function increase(){
    integer= integer+1;
    int.innerHTML = integer;
}

function decrease(){
    integer-= 1;
    int.innerHTML = integer;
}

add.addEventListener('click',increase());
remove.addEventListener('click',decrease());
