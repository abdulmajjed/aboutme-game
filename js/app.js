'use strict';
 let name='Abulmajjed';

  let userName=prompt('what\'s your name ?');
 alert(' Hello '  +userName+  ' my name\'s Abdulmajjed!'); 
 userName=(userName.toLowerCase());

  let place=prompt('I\'m from Jordan, are you?');
  place=(place.toLowerCase());



 let age=prompt('what\'s your age?');
//  console.log('before',typeof age);
   age=parseInt(age);
//  console.log('after'+age, typeof age);


if(place=='yes'){
    alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are from jordan ' );

} else if (place=='no'){
    alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are NOT from jordan!! ' );

}

if(place=='y'){
    alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are from jordan ' );

} else if (place=='n'){
    alert(' So your name is ' +userName+ ' and your ' +age+ ' years old !! , also you are NOT from jordan!! ' );

}




 let nesCafe=prompt('Is NesCafe my favorite Coffie? ');
//  console.log(nesCafe);
 nesCafe=(nesCafe.toLowerCase());

 if(nesCafe=='yes'){
    alert('OMG,got me !!' );

} else if (nesCafe=='no'){
    alert('its really my favorite' );

}

if(nesCafe=='y'){
    alert('OMG,got me !!' );

} else if (place=='n'){
    alert('its really my favorite ' );

}

 let mnsf=prompt(' is Mansaaf my main lunch on Friday ?');
//  console.log(mnsf);
 mnsf=(mnsf.toLowerCase());


 if(mnsf=='yes'){
    alert('So on Friday Ill come to you  !!' );

} else if (place=='no'){
    alert('okay, then Friday nice day to meet you and eat Mansaf !! ' );

}

if(mnsf=='y'){
    alert('So on Friday Ill come to you  !!' );

} else if (place=='n'){
    alert('okay, then Friday nice day to meet you !! ' );

}

 let happy=prompt('If i got 10 out of 10, you think im happy or not?');
// console.log(happy);
 happy=(happy.toLowerCase());

 if(happy=='yes'){
    alert('Im so happy for me!!' );

} else if (happy=='no'){
    alert('Its worries dude, im sad now!! ' );

}

if(happy=='y'){
    alert('Im so happy for me!!' );

} else if (happy=='n'){
    alert('Its worries dude, im sad now!!' );

}



 let stay=prompt('cause of COVID-19, Im at Home?' );
//  console.log(stay);
 stay=(stay.toLowerCase());


 if(stay=='yes'){
    alert('yes, scary from corona' );

} else if (stay=='no'){
    alert('no im home, try again ' );

}

if(stay=='y'){
    alert('yes, scary from corona' );

} else if (stay=='n'){
    alert('no im home, try again ' );

}
 
    alert('welcome our site ' +userName+  ' have a nice day!'); 


// if((place=='yes'&&mnsf=='yes')&&(nesCafe=='yes'&&stay=='yes')){
//  alert(' Welcome  ' +userName+ ' your old '  +age+ ' happy to feeling that, you love Mansaf, nesCafe,also your safe on home    ')

// }else if((place=='yes'&&mnsf=='no')&&(nesCafe=='yes'&&stay=='yes')){
//     alert(' Welcome  ' +userName+ ' your old '  +age+ ' happy to feeling that, you love Mansaf, nesCafe,also your safe on home    ')
   

// }



