// This function is used to generate a random number to determine the 
// next encounter
function generateRoomNumber() {
let nextRoom = Math.floor(Math.random() * 8) + 1;
console.log(typeof(nextRoom));
console.log('you generated: ' + nextRoom);
return nextRoom;
}