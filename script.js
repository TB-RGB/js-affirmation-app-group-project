onReady();
let fireCount = 0;
let iceCount = 0;

function onReady() {
  console.log("Javascript is working!");
}

function addFire() {
  console.log("testing fire");
  let fire = document.getElementById("emojiDiv");

  fire.innerHTML += `<span>🔥</span>`;
  fireCount ++;
  console.log("checking current fire count", fireCount);
}

function addIce() {
  console.log("testing ice");
  let ice = document.getElementById("emojiDiv");
iceCount ++;
console.log('checking current iceCount', iceCount);

  ice.innerHTML += `<span>❄️</span>`;
}
function handleSubmit(event) {
  console.log("in handlesubmit", event);
  event.preventDefault();
  let message = document.getElementById('textOutput') 
  if( iceCount >= fireCount) {
    
    message.innerText = "Needs more fire!";

    return;


  }

  let text = document.getElementById(`txtInput`).value;
  let author = document.getElementById(`authorInput`).value;
  console.log(`${text}, ${author}`);
  message.innerText = "";
  let table = document.getElementById("tableBody");
  //populates the table and adds clickable delete button
  table.innerHTML += `
  <tr>
    <td>${text}</td>
    <td>${author}</td>
    <td><button onClick = deletex(event)>❌</button></td>
  </tr>`;
}

//add a delete function

function deletex(event) {
  console.log("testing delete", event);

  //retrieves object via click to delete and stores the parentElement
  let toDelete = event.target.parentElement.parentElement;
  console.log(toDelete);
  toDelete.remove();
}
