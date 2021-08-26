const messages = [
   "Keep it up!", "You got this!", "You're working so hard!", "I appreciate you!","Proud of you!",
   "Hang in there!", "I like how your mind works.","You're doing great!","Make sure you drink some water!","Go get it!",
   "You look nice today!","Happy thoughts!", "Have you done something nice today?", "Who have you helped today?", 
   "Sometimes you are the most important person.", "Stay focused!", "Make sure to do something fun today!", "Try something new today.",
   "You can accomplish anything.", "You have a great smile!", "I love you.", "Don't give up!", "You're almost there!",
   "Turn that frown upside down!", "Be brave!", "You're so talented", "What a year you're having!", "Who told you to look that good?!",
   "Look out! Successful person over here.", "Smile!!", "Give it all you got.", "Do something nice for someone today.", 
   "Have you taken care of yourself today?"
];

window.onload = function() {
   document.getElementById("message").textContent = messages[randomNumber(0, messages.length - 1)];
   document.body.style.background = getRandomColor();
};  

function randomNumber(min, max) { 
   return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomColor() {
   return 'rgba('+ randomNumber(0, 255)+','+ randomNumber(0, 255)+','+ randomNumber(0, 255)+', 0.6)';
}

function toggleAbout(show) {
   let aboutDiv = document.getElementById('About');
   if (show) {
      aboutDiv.classList.remove('d-none');
      aboutDiv.classList.add('d-initial');
   } else {
      aboutDiv.classList.remove('d-initial');
      aboutDiv.classList.add('d-none');
   }
}