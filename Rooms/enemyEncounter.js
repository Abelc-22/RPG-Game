let maxEnemyHealth = 15;
let maxEnemyDamage = 3;

window.onload = function getEnemies() {
    let enemyAmount = Math.floor(Math.random() * 4) + 1;
    console.log("You have encountered " + enemyAmount + " enemies");
    enemies(enemyAmount);
}

function enemies(enemyAmount) {
let i = 0;
let enemy = 1;
while (i < enemyAmount) {
            const para = document.createElement("p");
            para.innerText = "Enemy " + enemy + ": \nHealth: " + maxEnemyHealth + "/" + maxEnemyHealth;
            document.body.appendChild(para);
            i++;
            enemy++;
    }
}

function attackEnemy() {
}