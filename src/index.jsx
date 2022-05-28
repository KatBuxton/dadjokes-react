import React from 'react';
import { createRoot } from 'react-dom/client';
import { JokeBody } from './components/JokeBody';
import { JokeLikes } from './components/JokeLikes';
import './style.css';

const App = () => (
  <div className="container">
    <div className='joke'>
      <JokeBody />
      <JokeLikes />
    </div>
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />);
