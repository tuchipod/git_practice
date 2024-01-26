// Este programa devuelve mensajes aleatorios
const messageObj = {
    firstPart : ['Yo mate a', 'Yo estudie con', 'Yo bese a', 'Yo escape con', 'Yo encerre a', 'Yo queme a', 'Yo mori con', 'Me engaño', 'Yo derreti a', 'Yo conoci a', 'Yo viole a', 'Yo ayude a', 'Yo le grite a', 'Me mate'],
    secondPart : ['un cerdo', 'Herobrine', 'un enderman', 'un aldeano', 'un iron golem', 'un amigo', 'un creeper', 'vegetta ', 'steve', 'un zombie', 'pollo'],
    thirdPart : ['porque soy bueno.', 'porque estoy loco', 'porque soy noob', 'porque me aburri', 'porque me gusta', 'porque se ve bien', 'porque soy malo', 'porque lo amo', 'porque lo amo', 'porque soy pro', 'porque lo odio', 'sin razon', 'porque soy el mejor']
}

let message = [];

let messageArr = Object.keys(messageObj);

for (let i = 0; i < messageArr.length; i++) {
    let mess = messageArr[i];

    const randomMess = (arr) => {
        let numRand = Math.floor(Math.random() * arr.length);
        return numRand;
    }

    let messRand = randomMess(mess); 
    message.push(messageObj[mess][messRand]);
}

console.log(message.join(' '));