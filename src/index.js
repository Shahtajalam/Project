

import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <h1>My One Page React Site</h1>
    <nav>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
);

const Hero = () => (
  <section id="hero" className="hero">
    <h2>Welcome to My Site</h2>
    <p>This is a simple one-page site built with React.</p>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h2>About</h2>
    <p>This is a single-page React application showcasing sections and layout.</p>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 My One Page React Site</p>
  </footer>
);

export default App;

