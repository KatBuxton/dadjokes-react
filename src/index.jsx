import React from 'react';
import { createRoot } from 'react-dom/client';
import { JokeBody } from './components/JokeBody';
import './style.css';

const App = () => (
  <div className="container">
    <JokeBody />
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />);
