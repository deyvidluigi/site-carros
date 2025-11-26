// src/App.jsx

import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="main-header">
        <nav>
          <div className="logo">SITE-CARROS</div>
          <ul className="nav-links">
            {/* Link para a Home */}
            <li><Link to="/">Home</Link></li>
            {/* Link para o Contato */}
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="page-content">
        {/* O Outlet renderiza o componente da rota atual (Home ou Contato) */}
        <Outlet />
      </main>
      
      <footer className="main-footer">
        <p>&copy; 2025 SITE-CARROS. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;