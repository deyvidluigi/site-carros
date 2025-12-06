// src/pages/home/home.jsx

import React from 'react';
import './Home.css'; // Importa os estilos específicos da Home

function Home() {
    return (
        // A classe 'page-content' traz centralização e padding do App.css
        <div className="page-content"> 
            
            {/* 1. Título e Descrição */}
            <header className="catalog-header">
                <h1>
                    <span role="img" aria-label="carro">
                        🚗
                    </span>{' '}
                    Catálogo de Carros em Destaque
                </h1>
                <p>
                    Explore a nossa seleção exclusiva de veículos novos e seminovos de alta qualidade.
                    Na AUTO ELITE CARROS, garantimos os melhores modelos do mercado com as melhores
                    condições de financiamento. Encontre o carro perfeito para o seu estilo de vida
                    abaixo!
                </p>
            </header>
            
            {/* 2. Galeria de Destaques (Lista de Carros com Imagens) */}
            <section className="gallery-section">
                <h2>Galeria de Destaques</h2>
                
                <div className="car-list">
                    {/* Item de Carro 1: Esportivo */}
                    <div className="car-item">
                        <div className="car-image-placeholder">
                     
                        </div>
                        <h3>Carro Esportivo Vermelho</h3>
                        <p>
                            Esportivo de luxo com motor V8. Aceleração de 0 a 100km/h em 4s.
                        </p>
                    </div>

                    {/* Item de Carro 2: SUV */}
                    <div className="car-item">
                        <div className="car-image-placeholder">
                            {/* EX: <img src="/images/suv-preto.jpg" alt="SUV Familiar Preto" /> */}
                        </div>
                        <h3>SUV Familiar Preto</h3>
                        <p>
                            SUV familiar com amplo espaço interno e sistema de segurança avançado.
                        </p>
                    </div>

                    {/* Item de Carro 3: Elétrico */}
                    <div className="car-item">
                        <div className="car-image-placeholder">
                             {/* EX: <img src="/images/compacto-eletrico.jpg" alt="Carro Compacto Elétrico" /> */}
                        </div>
                        <h3>Carro Compacto Elétrico</h3>
                        <p>
                            Compacto e elétrico, ideal para o trânsito urbano. Autonomia de 400km.
                        </p>
                    </div>

                    {/* Item de Carro 4: Picape */}
                    <div className="car-item">
                        <div className="car-image-placeholder">
                            {/* EX: <img src="/images/picape-4x4.jpg" alt="Picape 4x4 Off-Road" /> */}
                        </div>
                        <h3>Picape 4x4 Off-Road</h3>
                        <p>
                            Picape robusta com tração 4x4. Perfeita para qualquer terreno.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* 3. Tabela de Categorias e Preços */}
            <section className="table-section">
                <h2>Tabela de Categorias e Preços Médios</h2>
                
                <table className="price-table">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Característica Principal</th>
                            <th>Preço Médio (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Compactos</td>
                            <td>Economia e Agilidade</td>
                            <td>65.000 - 85.000</td>
                        </tr>
                        <tr>
                            <td>Sedans</td>
                            <td>Conforto e Espaço</td>
                            <td>90.000 - 150.000</td>
                        </tr>
                        <tr>
                            <td>SUVs</td>
                            <td>Segurança e Tecnologia</td>
                            <td>130.000 - 250.000</td>
                        </tr>
                        <tr>
                            <td>Esportivos</td>
                            <td>Potência e Design</td>
                            <td>Acima de 300.000</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Home;