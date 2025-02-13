// Get elements
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const loveSymbolsContainer = document.querySelector('.love-symbols');

// Function to create love symbols
function createLoveSymbols() {
  for (let i = 0; i < 20; i++) {
    const loveSymbol = document.createElement('span');
    loveSymbol.innerHTML = '❤️';
    loveSymbol.style.left = `${Math.random() * 100}%`;
    loveSymbol.style.animationDelay = `${Math.random() * 5}s`;
    loveSymbol.style.setProperty('--random', Math.random());
    loveSymbolsContainer.appendChild(loveSymbol);
  }
}

// Handle "Submit" button click
submitButton.addEventListener('click', () => {
  const loverName = nameInput.value.trim();
  if (loverName) {
    // Redirect to the message page with the lover's name as a query parameter
    window.location.href = `message.html?name=${encodeURIComponent(loverName)}`;
  } else {
    alert('Please enter your lover\'s name!');
  }
});
// Function to create large, transparent, animated love symbols
function createLoveSymbols() {
    for (let i = 0; i < 15; i++) { // Number of hearts
      const loveSymbol = document.createElement('span');
      loveSymbol.innerHTML = '❤️';
      loveSymbol.style.left = `${Math.random() * 100}%`;
      loveSymbol.style.animationDelay = `${Math.random() * 5}s`;
      loveSymbol.style.opacity = Math.random() * 0.7 + 0.3; // Random transparency
      loveSymbol.style.filter = 'blur(2px)'; // Slight blur for softness
      loveSymbolsContainer.appendChild(loveSymbol);
    }
  }
  
  // Initialize animated love symbols
  createLoveSymbols();
  

// Initialize love symbols
createLoveSymbols();