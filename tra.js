

var contentp=[`"Be yourself; everyone else is already taken."<br> --Oscar Wilde`,`"You only live once, but if you do it right, once is enough." <br> --Mae West`,`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."<br>--Bernard M. Baruch`
,`"Be the change that you wish to see in the world."<br> --Mahatma Gandhi`,`"Without music, life would be a mistake"<br>--Friedrich Nietzsche`]

var counter=0;

function Quote(){
   var x=Math.floor(Math.random()* contentp.length);
   document.getElementById("Content").innerHTML=contentp.at(x);
    counter++;
    if(counter>=contentp.length){counter=0;}
    
}

  
   


  


