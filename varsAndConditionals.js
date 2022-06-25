/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

// create a variable for jon and jamies attack strength
let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`Jon Snow has better attack than Jamie`)
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log(`Jamie has a better attack than Jon`)
} else {
    console.log(`Jon and Jamie have the same attack`)
}

//
let jonSnowHealth = 100
let jonSnowDefense = 0

if (jamieLannisterAttack <= jonSnowHealth){

    console.log(`Jon Snow has been slained`)
} else { jonSnowHealth -= jamieLannisterAttack

    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}

// increase Jon Snows Defense 

jonSnowDefense += 25

if (jamieLannisterAttack <= jonSnowHealth - jonSnowDefense){
    console.log(`Jon Snow has been slained`)

} else { jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)

    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}

if ((jonSnowHealth + 50) >= 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50

}
console.log(jonSnowHealth)

let coinsLandsHead = false

if (coinsLandsHead === true)
console.log(`The fight continues`)
    else {console.log(`Jon is allowed to run away`)

}

/* for (let i = 0; i < 5; i++){
    
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);

    console.log(`Jon Snow's Health is ${jonSnowHealth}`);
}
*/

while (jonSnowHealth > 0 ){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`jon's health is now ${jonSnowHealth}`)
    if (jonSnowHealth <= 0 ) {
        console.log(`jon has been slain`);
    }
}