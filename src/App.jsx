import React, { useState } from 'react';

function Sim(){
  alert("Obrigado princesa")
}

function Nao(setPosition) {
  const newPositionX = getRandomArbitrary(10, 90);  // Posição aleatória horizontal
  const newPositionY = getRandomArbitrary(10, 90);  // Posição aleatória vertical
  setPosition({ x: newPositionX, y: newPositionY });  // Atualiza ambas as posições
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min + "%";  // Gera uma porcentagem aleatória
}

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: "52%"});  // Posições iniciais

  return (
    <div className="App">
      <h1>Vc me desculpa por favor</h1>
      <div className="container">
        <button onClick={Sim}>Sim</button>
        <button
          onClick={() => Nao(setButtonPosition)} 
          style={{
            position: buttonPosition ? "absolute" : "none",
            left: buttonPosition.x, 
            top: buttonPosition.y
          }}
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default App;
