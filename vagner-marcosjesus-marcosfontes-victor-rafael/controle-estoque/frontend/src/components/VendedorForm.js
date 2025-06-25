import React, { useState } from 'react';

const VendedorForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [ativo, setAtivo] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const vendedorData = { nome, email, ativo };

        try {
            const response = await fetch('/api/vendedores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vendedorData),
            });

            if (response.ok) {
                alert('Vendedor cadastrado com sucesso!');
                setNome('');
                setEmail('');
                setAtivo(true);
            } else {
                alert('Erro ao cadastrar vendedor.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar vendedor.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ativo:</label>
                <input
                    type="checkbox"
                    checked={ativo}
                    onChange={(e) => setAtivo(e.target.checked)}
                />
            </div>
            <button type="submit">Cadastrar Vendedor</button>
        </form>
    );
};

export default VendedorForm;