// src/pages/contato/contato.jsx

import React, { useState } from 'react';
// Não precisamos de um CSS específico, pois o layout de formulário já está em App.css

function Contato() {
    // 1. Estados para capturar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
        assunto: 'Geral', // Valor inicial para o select
    });
    
    // 2. Estado para feedback ao usuário
    const [submitMessage, setSubmitMessage] = useState('');

    // Função que atualiza o estado ao digitar
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulação de Validação
        if (!formData.nome || !formData.email || !formData.mensagem) {
            setSubmitMessage('⚠️ Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Simulação de envio (em um projeto real, você enviaria os dados para um backend aqui)
        console.log('Dados Enviados:', formData);
        
        // Feedback de sucesso e limpeza do formulário
        setSubmitMessage(`✅ Mensagem de ${formData.nome} enviada com sucesso! Responderemos em breve.`);
        setFormData({
            nome: '',
            email: '',
            mensagem: '',
            assunto: 'Geral',
        });

        // Limpa a mensagem após 5 segundos
        setTimeout(() => setSubmitMessage(''), 5000);
    };

    return (
        // O conteúdo da página de contato também fica dentro da classe 'page-content'
        <div className="page-content">
            
            <div className="contato-container">
                <h1>Fale Conosco 👋</h1>
                <p>
                    Tem alguma dúvida sobre nossos carros em destaque ou precisa de suporte? 
                    Preencha o formulário abaixo e entraremos em contato o mais rápido possível!
                </p>

                {/* Área de Feedback */}
                {submitMessage && (
                    <div style={{ padding: '10px', marginBottom: '20px', backgroundColor: submitMessage.startsWith('✅') ? '#d4edda' : '#f8d7da', color: submitMessage.startsWith('✅') ? '#155724' : '#721c24', border: '1px solid', borderColor: submitMessage.startsWith('✅') ? '#c3e6cb' : '#f5c6cb', borderRadius: '4px', textAlign: 'center' }}>
                        {submitMessage}
                    </div>
                )}

                {/* Formulário Interativo */}
                <form onSubmit={handleSubmit}>
                    
                    {/* Campo Nome */}
                    <div className="form-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    {/* Campo E-mail */}
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Campo Assunto (Select) */}
                    <div className="form-group">
                        <label htmlFor="assunto">Assunto</label>
                        <select 
                            id="assunto" 
                            name="assunto" 
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                        >
                            <option value="Geral">Informações Gerais</option>
                            <option value="Vendas">Falar com Vendas</option>
                            <option value="Suporte">Suporte Técnico</option>
                        </select>
                    </div>

                    {/* Campo Mensagem */}
                    <div className="form-group">
                        <label htmlFor="mensagem">Sua Mensagem</label>
                        <textarea 
                            id="mensagem" 
                            name="mensagem" 
                            rows="5" 
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Enviar Mensagem
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <p style={{ fontWeight: 'bold', color: '#333' }}>Ou entre em contato diretamente:</p>
                    <p>E-mail: contato@autoelitecarros.com</p>
                    <p>Telefone: (99) 9999-9999</p>
                </div>
            </div>
        </div>
    );
}

export default Contato;