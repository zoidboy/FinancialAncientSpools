// Get the background image element (create it if it doesn't exist)
let backgroundImage = document.querySelector('.background-image');
if (!backgroundImage) {
  backgroundImage = document.createElement('img');
  backgroundImage.classList.add('background-image');
  document.body.appendChild(backgroundImage);
}

// Function to set the background image
function setBackgroundImage(imageUrl) {
  backgroundImage.src = imageUrl;
}

// Example - Replace with your image URL
setBackgroundImage('https://steamuserimages-a.akamaihd.net/ugc/868495283639812974/BFA920A6E7A1B666A191238C147582BB2FCCB3B3/');