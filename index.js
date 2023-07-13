const textContainer = document.getElementById('text-container');
const text = textContainer.textContent;
let index = 0;

function displayText() {
  if (index < text.length) {
    textContainer.textContent = text.substr(0, index + 1);
    index++;
    setTimeout(displayText, 100); // Adjust the delay between characters (in milliseconds) as desired
  }
}

displayText();