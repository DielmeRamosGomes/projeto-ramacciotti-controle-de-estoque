import React, { useState } from 'react';

const UsuarioForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ativo, setAtivo] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = { nome, email, senha, ativo };

        try {
            const response = await fetch('/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setNome('');
                setEmail('');
                setSenha('');
                setAtivo(true);
            } else {
                alert('Erro ao cadastrar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar usuário.');
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
                <label>Senha:</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
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
            <button type="submit">Cadastrar Usuário</button>
        </form>
    );
};

export default UsuarioForm;