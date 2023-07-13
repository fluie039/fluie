fetch('https://gitlab.hs-anhalt.de/stjalabr/game-of-the-amazons-app')
  .then(response => response.json())
  .then(data => {
    // Spiel auswählen (z.B. das erste Spiel in der Antwort)
    const game = data[0];
    
    // Spiel in den HTML-Container einfügen
    const gameContainer = document.getElementById('gameContainer');
    
    const gameElement = document.createElement('div');
    gameElement.classList.add('game');
    
    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameElement.appendChild(gameImage);
    
    const gameDetails = document.createElement('div');
    gameDetails.classList.add('game-details');
    gameDetails.textContent = `Name: ${game.name}, Genre: ${game.genre}`;
    gameElement.appendChild(gameDetails);
    
    gameContainer.appendChild(gameElement);
  })
  .catch(error => {
    console.error('Fehler:', error);
  });