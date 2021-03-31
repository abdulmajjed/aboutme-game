'use strict';
 let name='Abulmajjed';
 let userName=prompt('what\'s your name ?');
 alert(' Hello '  +userName+  ' my name\'s Abdulmajjed!'); 
 //  userName=(userName.toLowerCase());
 alert('let\'s try to have some fun!\n qustions with yes/y or no/n');
 let score=0;

 
    let place=prompt('I\'m from Jordan, are you?');

function thePlace () {
  
        place=place.toLowerCase();
    
        if(place==='yes' || place==='y'){alert("welcome");score++;}
        else if (place==='no' || place==='n'){alert("nice to meet you");}
        else { alert(" please choose yes or no"); }
        return(place);}
 
thePlace();



    let age=prompt('whats your age?');
    //  console.log('before',typeof age);
    age=parseInt(age);
    //  console.log('after'+age, typeof age);
    if(place=='yes'){
        alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are from jordan ' );
        score++;
    }else if(place=='no'){
        alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are NOT from jordan!! ' );

    }else if(place=='y'){
        alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are from jordan ' );
        score++;
    }else if(place=='n'){
        alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are NOT from jordan!! ' );
    }

        else alert(" please choose yes or no"); 





function theCoffe(){  
   
   let nesCafe=prompt('Is NesCafe my favorite Coffie?');
    //  console.log(nesCafe);
    nesCafe=nesCafe.toLowerCase();

    if(nesCafe=='yes'){
        alert('OMG,got me !!' );
        score++;
    }else if(nesCafe=='no'){
        alert('its really my favorite' ); 
    }else if(nesCafe=='y'){
        alert('OMG,got me !!' );
        score++;
    }else if(place=='n'){
        alert('its really my favorite ' );

    }
    else alert(" please choose yes or no");  
    return(nesCafe); 
 }

 theCoffe();



function theFood(mnsf) {
        mnsf=prompt(' is Mansaaf my main lunch on Friday ?');
    //  console.log(mnsf);
    mnsf=mnsf.toLowerCase();    
    if(mnsf=='yes'){
        alert('correct, So on Friday Ill come to you  !!' );
        score++; 
    }else if(place=='no'){
        alert('okay, then Friday nice day to meet you and eat Mansaf on your cost  !! ' );
        
    }else if(mnsf=='y'){
        alert('correct,So on Friday Ill come to you  !!' );
        score++;
    }else if(place=='n'){
        alert('okay, then Friday nice day to meet you and eat Mansaf on your cost  !! ' );
    }else alert(" please choose yes or no"); 

    return(mnsf);
}

theFood();




function status() {

     let happy=prompt('If i got 10 out of 10, you think im happy or not?');
        happy=happy.toLowerCase();
                // console.log(happy);
        if(happy=='yes'){
            alert('Im so happy for me!!' );
            score++;
        }else if(happy=='no'){
            alert('Its worries dude, im sad now!! ' );
        }else if(happy=='y'){
            alert('Im so happy for me!!' );
            score++;
        }else if(happy=='n'){
            alert('Its worries dude, im sad now!!' );     
        }else alert(" please choose yes or no"); 
        return(happy);
       }

       status();





function myStay () {
    let    stay=prompt('cause of COVID-19, Im at Home?' );
    //  console.log(stay);
    stay=stay.toLowerCase();
    if(stay=='yes'){
        alert('yes, scary from corona' );
        score++;
    }else if(stay=='no'){
        alert('no im home, try again ' );
    }else if(stay=='y'){
        alert('yes, scary from corona' );
        score++;
    }else if(stay=='n'){
        alert('no im home, try again ' );
    
    }else alert(" please choose yes or no"); 
    return(stay);
}
myStay();

 

alert('now it\'s another way to have fun! ');
function  guessing(){
        
    let  i=0;
    for (i=0; i<5; i++){
    let guess=prompt("  Write down guessing number that  between (1 - 15) ");
    if(guess>13){
    alert('too high answer! guess again ' );
    } else if(guess<13){
    alert('too low  answer! guess again ');

    }else if(guess==13){
        alert('OH MY GOD, ITS FULLY CORRECT');
    break;

    } else {
    alert('The first place is odd and the second is odd,\n and the second place is the sum of the first place with the next in order\n guess again ');
    }return(guess);
    }
}

guessing();




 function diner() {

 let foods=[ 'burger', 'steek', 'pizza ', 'mansaf' , ' nodels ', ' meet'];
// alert=('now time to guess which kind of foods i like\n  choose between =>>  burger steek pizza  mansaf  nodels   meet ');
let attempts =6;
// for(let j=0; j<attempts;j++){
let fav= prompt('guess my fav food:  burger steek pizza  mansaf  nodels   meet ');   
for(let i=0; i<foods.length;i++){
        console.log(fav); 
        if(fav == 'steek' && fav){
            score++;
            alert('you are right');
            break;
        }else if(i == 5){
            break;
        }else{
            alert(`sorry it's wrong ${fav}`);
        fav = prompt('guess my fav food:  burger steek pizza  mansaf  nodels   meet ');
        }
        }return(fav);
        
}
diner();






alert('the correct answer is 13 and your score ' +score );
alert('welcome our site ' +userName+  ' have a nice day!'); 




/*
loops: repeat code for an amount og times without copy pasting the same code
for loop : when we know how many times we need to repeat 



}

break : to stop loop
continue : to skip the iteration  تجاوز هذي القيمة
if(i==3){
    continue
}
if you dont know how many times you will run the code 

let userName=prompt('what is your name');

while(!userName){                           عشان نعيد الجملو لحتئ يجاوب
userName(!userName)('pleas write something');
}
    let grades=[100,50,77,66,33,22,10];
    console.log('whole array' ,grades);
    console.log('first element ',grade[0]); => 100
// print index  of an element 
    console.log(' get index if 22, grades.index(22)); =>5

    index : is the position of element
    add element at the end of value
grades.push(150);
    to remove an element from th end
    grades.pop();

    confirm; ok ccancel bottun
*/

// // 1
// let userName=prompt('whats your name');
// while(!userName){
//     userName=prompt('please write something')
// }

// // 2

// alert('Hello' +userName+ 'glade to meet you here');
 
// let human=prompt('Im i a human?')
// let score=0; 
// human=human.toLowerCase
// if (human==='yes' || human==='y'){
//     alert('nice job dude!');


// } else if ( human==='no' || human==='n'){
//     alert('thanks alot')    
// } else{
//     alert('pleas answe yes/y OR no/n');
// }

// // 3

// let horsess=prompt('dos pug faly ?');

// // 4
// alert('Thank you for playing my little game ' +userName+\n   ' your score is ' +score+ );

// // 5



// do while: 
// let i=0;
// do{
//     console.log(i);
//     i+;
// }while (i<0);

