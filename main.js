//Create array for messages.
var messages = ["Keep it up!", "You got this!", "You're working so hard!", "I appreciate you!","Proud of you!",
"Hang in there!", "I like how your mind works.","You're doing great!","Make sure you drink some water!","Go get it!",
"You look nice today!","Happy thoughts!"];  
var background = document.querySelector('body');
var isVisible = false;

window.onload = function() { //Call the function to change the message.
   console.log("LOAD");
   var messageNumber = GetRandomNumber();  //Get a random number between 0 and the length of the message array.
   var messageLine = document.getElementById("message");   //Find the element with the correct id.
   messageLine.innerText = messages[messageNumber];    //Set the text of that paragraph element.
   background.style.backgroundColor = getRandomColor();
   var image = document.getElementById("smile");
   image.style.color = 'black';
   ToggleAbout();
};  

window.addEventListener(onresize,setImageWidth);

function setImageWidth() {
   if(window.innerWidth < 700)
   {
       var smileImage = document.querySelector('#smile');
       smileImage.style.width = window.innerWidth-200;
   }
}

function openURL(url) {
   window.open(url,'_self');
}

var close = document.getElementById('close');
close.onclick = function() {
    ToggleAbout();
}

function getRandomColor() {
   var red = Math.round(Math.random()*254+1);
   var green = Math.round(Math.random()*254+1);
   var blue=Math.round(Math.random()*254+1);
   var color='rgba('+red+','+green+','+blue+',0.50)'; // 0.50 alpha

   return color;
}

function GetRandomNumber() { //Gets a random number.
   return Math.floor(Math.random() * (messages.length));
}

function ToggleAbout() {
   var aboutDiv = document.getElementById('About');
   isVisible = !isVisible;
   if(isVisible) {
       aboutDiv.classList.remove('d-initial');
       aboutDiv.classList.add('d-none');
   } else {
    aboutDiv.classList.remove('d-none');
    aboutDiv.classList.add('d-initial');
   }
}