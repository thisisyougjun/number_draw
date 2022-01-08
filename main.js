const rand1 = Math.floor(Math.random() *10);

const target = document.getElementById("#randForm")

document.getElementById("#randForm").addEventListener("submit", ButtonClick);

function ButtonClick(event){
    event.preventDefault();
}

function rand(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
