// src/pages/home/Home.jsx

import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao AUTO ELITE CARROS!</h1>
      <p>O seu destino certo para encontrar os melhores veículos do mercado.</p>
      
      <section className="destaques">
        <h2>Nossos Destaques</h2>
        <ul>
          <li>Carros Novos</li>
          <li>Carros Seminovos</li>
          <li>Financiamento Fácil</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;