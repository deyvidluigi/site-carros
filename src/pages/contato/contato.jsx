import React from 'react';

function Contato() {
  // Função que será executada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Alerta básico para simular o envio
    alert('Mensagem enviada! Entraremos em contato em breve.');
    // Lógica real de envio (ex: fetch, axios) viria aqui
  };

  return (
    <div className="contato-container">
      <h1>Fale Conosco</h1>
      <p>Estamos prontos para te ajudar a encontrar o seu próximo carro! Preencha o formulário abaixo:</p>
      
      <form onSubmit={handleSubmit} className="contato-form">
        
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="assunto">Assunto:</label>
          <select id="assunto" name="assunto">
            <option value="duvida">Dúvida Geral</option>
            <option value="vendas">Interesse em Comprar</option>
            <option value="suporte">Suporte Técnico</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contato;