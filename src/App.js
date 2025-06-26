import React from 'react';
import './App.css';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import SharkGallery from './components/SharkGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainVisual />
        <SharkGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;