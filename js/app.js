'use strict';
let name = 'Abulmajjed';
let userName = prompt('what\'s your name ?');
alert(' Hello ' + userName + ' my name\'s Abdulmajjed!');
alert('let\'s try to have some fun!\n qustions with yes/y or no/n');
let score = 0;


let place = prompt('I\'m from Jordan, are you?');

function thePlace() {

    place = place.toLowerCase();

    if (place === 'yes' || place === 'y') { alert("welcome"); score++; }
    else if (place === 'no' || place === 'n') { alert("nice to meet you"); }
    else { alert(" please choose yes or no"); }
    return (place);
}

thePlace();



let age = prompt('whats your age?');
age = parseInt(age);
if (place == 'yes') {
    alert(' So your name is ' + userName + ' and your ' + age + ' years old !! , also you are from jordan ');
    score++;
} else if (place == 'no') {
    alert(' So your name is ' + userName + ' and your ' + age + ' years old !! , also you are NOT from jordan!! ');

} else if (place == 'y') {
    alert(' So your name is ' + userName + ' and your ' + age + ' years old !! , also you are from jordan ');
    score++;
} else if (place == 'n') {
    alert(' So your name is ' + userName + ' and your ' + age + ' years old !! , also you are NOT from jordan!! ');
}
else{ alert(" please choose yes or no");
}




function theCoffe() {

    let nesCafe = prompt('Is NesCafe my favorite Coffie?');
    nesCafe = nesCafe.toLowerCase();

    if (nesCafe == 'yes') {
        alert('OMG,got me !!');
        score++;
    } else if (nesCafe == 'no') {
        alert('its really my favorite');
    } else if (nesCafe == 'y') {
        alert('OMG,got me !!');
        score++;
    } else if (place == 'n') {
        alert('its really my favorite ');

    }
    else{ alert(" please choose yes or no");
    }
    return (nesCafe);
}

theCoffe();



function theFood(mnsf) {
    mnsf = prompt(' is Mansaaf my main lunch on Friday ?');
    mnsf = mnsf.toLowerCase();
    if (mnsf == 'yes') {
        alert('correct, So on Friday Ill come to you  !!');
        score++;
    } else if (place == 'no') {
        alert('okay, then Friday nice day to meet you and eat Mansaf on your cost  !! ');

    } else if (mnsf == 'y') {
        alert('correct,So on Friday Ill come to you  !!');
        score++;
    } else if (place == 'n') {
        alert('okay, then Friday nice day to meet you and eat Mansaf on your cost  !! ');
    } else {alert(" please choose yes or no");
    }

    return (mnsf);
}

theFood();




function status() {

    let happy = prompt('If i got 10 out of 10, you think im happy or not?');
    happy = happy.toLowerCase();
    if (happy == 'yes') {
        alert('Im so happy for me!!');
        score++;
    } else if (happy == 'no') {
        alert('Its worries dude, im sad now!! ');
    } else if (happy == 'y') {
        alert('Im so happy for me!!');
        score++;
    } else if (happy == 'n') {
        alert('Its worries dude, im sad now!!');
    } else {alert(" please choose yes or no");
    }
    return (happy);
}

status();





function myStay() {
    let stay = prompt('cause of COVID-19, Im at Home?');
    stay = stay.toLowerCase();
    if (stay == 'yes') {
        alert('yes, scary from corona');
        score++;
    } else if (stay == 'no') {
        alert('no im home, try again ');
    } else if (stay == 'y') {
        alert('yes, scary from corona');
        score++;
    } else if (stay == 'n') {
        alert('no im home, try again ');

    } else {alert(" please choose yes or no");
    }
    return (stay);
}
myStay();



alert('now it\'s another way to have fun! ');
function guessing() {

    let i = 0;
    for (i = 0; i < 5; i++) {
        let guess = prompt("  Write down guessing number that  between (1 - 15) ");

        if (i == 4) {
            alert('The correct answer is 13')
        }

        if (guess > 13) {
            alert('too high answer! guess again ');
        } else if (guess < 13) {
            alert('too low  answer! guess again ');

        } else if (guess == 13) {
            alert('OH MY GOD, ITS FULLY CORRECT');
            score++;
            break;
        } else {
            alert('The first place is odd and the second is odd,\n and the second place is the sum of the first place with the next in order\n guess again ');
        }


    }
    return (guess);
}




guessing();

function diner() {

    let foods = ['burger', 'steek', 'pizza', 'mansaf', 'nodels', 'meet'];

    for (let j = 0; j < 6; j++) {

        let fav = prompt('guess my fav food ?');

        if (j == 5) {
            alert(` The correct answer ${foods} `)
        }
        for (let i = 0; i < foods.length; i++) {
            if (fav == foods[i]) {
                console.log(foods[i]);
                console.log(fav);
                alert(`You are right the correct answer are ${foods}`);
                j = 6;
                score++;
                break;
            }


        }
        if (j < 6) {

            alert(`${userName} Try again.`);
        }




    }
}
diner();






alert('This is your score ' + score + '/7');
alert('welcome our site ' + userName + ' have a nice day!');



