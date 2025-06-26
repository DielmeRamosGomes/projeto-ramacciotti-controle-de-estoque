import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendedorList = () => {
    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        const fetchVendedores = async () => {
            try {
                const response = await axios.get('/api/vendedores');
                setVendedores(response.data);
            } catch (error) {
                console.error('Erro ao buscar vendedores:', error);
            }
        };

        fetchVendedores();
    }, []);

    const handleInactivate = async (id) => {
        try {
            await axios.put(`/api/vendedores/${id}`, { ativo: false });
            setVendedores(vendedores.map(v => (v.id_vendedor === id ? { ...v, ativo: false } : v)));
        } catch (error) {
            console.error('Erro ao inativar vendedor:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Vendedores</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ativo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {vendedores.map(vendedor => (
                        <tr key={vendedor.id_vendedor}>
                            <td>{vendedor.id_vendedor}</td>
                            <td>{vendedor.nome}</td>
                            <td>{vendedor.Email}</td>
                            <td>{vendedor.ativo ? 'Sim' : 'Não'}</td>
                            <td>
                                <button onClick={() => handleInactivate(vendedor.id_vendedor)}>Inativar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendedorList;