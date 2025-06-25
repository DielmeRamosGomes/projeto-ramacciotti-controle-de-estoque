import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); // Adjust the API endpoint as needed
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id_produto}>
                        <h2>{product.nome}</h2>
                        <p>{product.descricao}</p>
                        <p>Price: ${product.preco_unitario}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;