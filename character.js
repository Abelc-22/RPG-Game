let totalAttributes = 0;
let attributeLimit = 10;

//This function pulls user inout from pageOne.html and applies the stats to their respective category.

function getAttributes(){

// Character Name
let charName = document.getElementById('name').value;

// Character Strength
let charStrength = document.getElementById('strength').value;
let strInt = Number(charStrength);

// Character Dexterity
let charDexterity = document.getElementById('dexterity').value;
let dexInt = Number(charDexterity);

// Character Constitution
let charConstitution = document.getElementById('constitution').value;
let contInt = Number(charConstitution);

// Character Intelligence
let charIntelligence = document.getElementById('intelligence').value;
let intelInt = Number(charIntelligence);

// Character Wisdom
let charWisdom = document.getElementById('wisdom').value;
let wisInt = Number(charWisdom);

// Character Charisma
let charCharm = document.getElementById('charisma').value;
let charmInt = Number(charCharm);

// Calculates the total attributes
totalAttributes = strInt + dexInt + contInt + intelInt + wisInt + charmInt;
let totString = totalAttributes.toString();

if (totalAttributes > attributeLimit) {
    let reduceAttribs = totalAttributes - attributeLimit;
    console.log("You have to many attributes, you need to remove " + reduceAttribs +" attributes");
    document.getElementById('validation').innerHTML = "You have more than " + attributeLimit + " attributes, you need to remove " + reduceAttribs + " attributes.";
}  else if (attributeLimit > totalAttributes) {
    let addAttribs = attributeLimit - totalAttributes;
    document.getElementById('validation').innerHTML = "You don't have enough attributes. You need to add " + addAttribs + " more attributes."
} else {
    document.getElementById('charName').innerHTML = "Your Character's Name is: " + charName;
    document.getElementById('charStr').innerHTML = "Your Character's Strength is: " + charStrength;
    document.getElementById('charDex').innerHTML = "Your Character's Dexterity is: " + charDexterity;
    document.getElementById('charCont').innerHTML = "Your Character's Constitution is: " + charConstitution;
    document.getElementById('charIntel').innerHTML = "Your Character's Intelligence is: " + charIntelligence;
    document.getElementById('charWis').innerHTML = "Your Character's Wisdom is: " + charWisdom;
    document.getElementById('charCharm').innerHTML = "Your Character's Charisma is: " + charCharm;

    const button = document.createElement('button');
    button.textContent = "Page Two";

    button.addEventListener('click', () => {
        window.location.href = "pageTwo.html"});

    document.body.appendChild(button);

}

document.getElementById('totalAttribs').innerHTML = "Your total attributes are: " + totString;

sessionStorage.setItem('userCharacter', JSON.stringify({name: charName, strength: strInt, 
                        dexterity: dexInt, constitution: contInt, intelligence: intelInt, 
                        wisdom: wisInt, charisma: charmInt}))



}

// console.log(typeof(charStrength));
// console.log(typeof(strInt));
// console.log(typeof(charDexterity));
// console.log(typeof(dexInt));
// console.log(typeof(totalAttributes));
// console.log(typeof(totString));
// console.log("Total Attributes: " + totString);

    // let CharacterStats = {
    //     name : charName,
    //     strength : strInt,
    //     dexterity : dexInt,
    //     constitution : contInt,
    //     intelligence : intelInt,
    //     wisdom : wisInt,
    //     charisma : charmInt
    // };

    // console.log(CharacterStats);