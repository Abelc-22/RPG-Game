
function getStats() {
let getObject = sessionStorage.getItem('userCharacter');
let parseObject = JSON.parse(getObject);
let userName = parseObject.name;
let userStrength = parseObject.strength;
let userDexterity = parseObject.dexterity;
let userConstitution = parseObject.constitution;
let userIntelligence = parseObject.intelligence;
let userWisdom = parseObject.wisdom;
let userCharisma = parseObject.charisma;


console.log(getObject);
console.log(typeof(getObject));
console.log(userName)
console.log(typeof(userName));
console.log(userStrength);
console.log(typeof(userStrength));
console.log(userDexterity);
console.log(typeof(userDexterity));
console.log(userConstitution);
console.log(typeof(userConstitution));
console.log(userIntelligence);
console.log(typeof(userIntelligence));
console.log(userWisdom);
console.log(typeof(userWisdom));
console.log(userCharisma);
console.log(typeof(userCharisma));

const button = document.createElement('button');
button.textContent = "Start Game";

button.addEventListener('click', () => {
    window.location.href = "village.html"});

document.body.appendChild(button);


}