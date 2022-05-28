import React from 'react';
import { createRoot } from 'react-dom/client';
import { Joke } from './components/Joke';
import './style.css';
import jokes from "./jokes"

const App = () => (
  <div className="container">
    {jokes.map((joke) =>
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    )}
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />);
