// Get elements
const displayName = document.getElementById('displayName');
const nextButton = document.getElementById('nextButton');
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

// Get the lover's name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const loverName = urlParams.get('name');

if (loverName) {
  displayName.textContent = loverName;
} else {
  // Redirect back to the first page if no name is provided
  window.location.href = 'index.html';
}

// Handle "Next" button click
nextButton.addEventListener('click', () => {
  // Trigger confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Alert and navigate to the next screen
  alert('Proceeding to the next screen...');
  // You can add logic to navigate to the next screen here
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