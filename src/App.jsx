import { useState } from 'react';
import Coin from './components/Coin';
import Confetti from './components/Confetti';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const flipCoin = () => {
    if (isFlipping) return;

    // Iniciar animación
    setIsFlipping(true);
    setResult(null);

    // Resultado después de 1.5s (90% Kiss)
    setTimeout(() => {
      const isKiss = Math.random() <= 1;
      setResult(isKiss ? 'kiss' : 'slap');
      setIsFlipping(false);

      // Efectos visuales
      if (isKiss) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else if (navigator.vibrate) {
        navigator.vibrate(200); // Vibración en móvil para Slap
      }
    }, 1500);
  };

  return (
    <div className="app">
      <h1>Kiss or Slap?</h1>
      
      <Coin result={result} isFlipping={isFlipping} />
      
      <button
        onClick={flipCoin}
        disabled={isFlipping}
        className={`flip-button ${isFlipping ? 'disabled' : ''}`}
      >
        {isFlipping ? "Girando..." : "¡Flipar Moneda!"}
      </button>

      {showConfetti && <Confetti />}
    </div>
  );
}

export default App;