import React, { useEffect, useState } from 'react';
import VendedorForm from '../components/VendedorForm';
import VendedorList from '../components/VendedorList';

const VendedoresPage = () => {
    const [vendedores, setVendedores] = useState([]);

    const fetchVendedores = async () => {
        try {
            const response = await fetch('/api/vendedores');
            const data = await response.json();
            setVendedores(data);
        } catch (error) {
            console.error('Erro ao buscar vendedores:', error);
        }
    };

    useEffect(() => {
        fetchVendedores();
    }, []);

    return (
        <div>
            <h1>Gerenciar Vendedores</h1>
            <VendedorForm fetchVendedores={fetchVendedores} />
            <VendedorList vendedores={vendedores} fetchVendedores={fetchVendedores} />
        </div>
    );
};

export default VendedoresPage;