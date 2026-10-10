
import { useState, useEffect } from 'react';
import Hamster from './components/hamster';
import HungerBar from './components/hungerBar';
import './App.css';

function App() {
  const [hunger, setHunger] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setHunger(h => Math.min(h + 10, 100));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="app">
      <div className="game-card">
        <p className="eyebrow">✿ YOUR LITTLE WORLD ✿</p>

        <Hamster hunger={hunger} />
        <HungerBar hunger={hunger} setHunger={setHunger} />
      </div>

      <p className="footer-note">made with ♡ and tiny paws</p>
    </main>
  );
}

export default App;
