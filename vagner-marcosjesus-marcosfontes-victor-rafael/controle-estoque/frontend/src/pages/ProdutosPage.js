import React, { useEffect, useState } from 'react';
import ProdutoForm from '../components/ProdutoForm';
import ProdutoList from '../components/ProdutoList';

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState([]);

    const fetchProdutos = async () => {
        try {
            const response = await fetch('/api/produtos');
            const data = await response.json();
            setProdutos(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    return (
        <div>
            <h1>Gerenciamento de Produtos</h1>
            <ProdutoForm onProdutoAdded={fetchProdutos} />
            <ProdutoList produtos={produtos} onProdutoUpdated={fetchProdutos} />
        </div>
    );
};

export default ProdutosPage;