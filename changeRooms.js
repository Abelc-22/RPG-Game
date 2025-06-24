//fix this so you can press a button to ready up and change rooms to the next room

let roomNumber = generateRoomNumber();

window.onload = function getRoom() {
console.log("The room you got was " + roomNumber);
}

function changeRoom() {
switch (roomNumber){
    case 1:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/enemyEncounter.html";}, 3000);
    break;
    case 2:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/trapRoom.html";}, 3000);
    break;    
    case 3:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/mimicRoom.html";}, 3000);
    break;
    case 4:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/lootRoom.html";}, 3000);
    break;
    case 5:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/chestRoom.html";}, 3000);
    break;
    case 6:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/restingPoint.html";}, 3000);
    break;
    case 7:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/merchantRoom.html";}, 3000);
    break;
    case 8:
    console.log("Traveling to next area")
    setTimeout(() => {
        window.location.href = "./Rooms/npcArea.html";}, 3000);
    break;
}
}