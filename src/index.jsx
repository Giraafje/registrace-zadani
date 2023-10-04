import React from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './components/Registration'
import './style.css';

const App = () => {
  return (
    <div className="container">
      <div className="content-wrap">
        <header>
          <h1>Registration</h1>
        </header>
        <main>
          <Registration/>
        </main>
      </div>
      <footer>
      <div className="footer-text">Czechitas, React course</div>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
