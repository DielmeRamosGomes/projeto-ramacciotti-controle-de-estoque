import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('/api/produtos');
                setProdutos(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    const marcarInativo = async (id) => {
        try {
            await axios.put(`/api/produtos/${id}`, { ativo: false });
            setProdutos(produtos.map(produto => 
                produto.id_produto === id ? { ...produto, ativo: false } : produto
            ));
        } catch (error) {
            console.error('Erro ao marcar produto como inativo:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id_produto}>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p>Preço: R${produto.preco_unitario}</p>
                        <button onClick={() => marcarInativo(produto.id_produto)}>
                            Marcar como Inativo
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProdutoList;