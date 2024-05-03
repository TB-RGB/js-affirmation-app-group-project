onReady();

function onReady() {
  console.log('Javascript is working!');
}

function addFire(){
console.log("testing fire");
let fire = document.getElementById("emojiDiv");

fire.innerHTML+= `<span>🔥</span>`

}


function addIce(){
  console.log("testing ice");
let ice = document.getElementById("emojiDiv");

ice.innerHTML += `<span>❄️</span>`
}