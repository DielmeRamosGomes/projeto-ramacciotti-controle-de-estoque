import React, { useState } from 'react';

const ProdutoForm = ({ onSubmit }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [precoUnitario, setPrecoUnitario] = useState('');
    const [idVendedor, setIdVendedor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const produto = {
            nome,
            descricao,
            preco_unitario: parseFloat(precoUnitario),
            id_vendedor: parseInt(idVendedor),
        };
        onSubmit(produto);
        setNome('');
        setDescricao('');
        setPrecoUnitario('');
        setIdVendedor('');
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
                <label>Descrição:</label>
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Preço Unitário:</label>
                <input
                    type="number"
                    value={precoUnitario}
                    onChange={(e) => setPrecoUnitario(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>ID do Vendedor:</label>
                <input
                    type="number"
                    value={idVendedor}
                    onChange={(e) => setIdVendedor(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastrar Produto</button>
        </form>
    );
};

export default ProdutoForm;