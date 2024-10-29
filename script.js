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
setBackgroundImage('https://www.example.com/your-background-image.jpg');