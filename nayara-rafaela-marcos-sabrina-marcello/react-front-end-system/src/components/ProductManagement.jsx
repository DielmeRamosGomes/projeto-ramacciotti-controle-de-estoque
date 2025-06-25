import React, { useState, useEffect } from 'react';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        // Fetch products from the server
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // Replace with your API endpoint
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
    };

    const handleAddProduct = async () => {
        const newProduct = { name: productName, description: productDescription, price: productPrice };
        // Replace with your API endpoint
        await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct),
        });
        fetchProducts();
        resetForm();
    };

    const handleEditProduct = (product) => {
        setProductName(product.name);
        setProductDescription(product.description);
        setProductPrice(product.price);
        setEditingProductId(product.id);
    };

    const handleUpdateProduct = async () => {
        const updatedProduct = { name: productName, description: productDescription, price: productPrice };
        // Replace with your API endpoint
        await fetch(`/api/products/${editingProductId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct),
        });
        fetchProducts();
        resetForm();
    };

    const handleDeleteProduct = async (id) => {
        // Replace with your API endpoint
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
        fetchProducts();
    };

    const resetForm = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setEditingProductId(null);
    };

    return (
        <div>
            <h2>Product Management</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                editingProductId ? handleUpdateProduct() : handleAddProduct();
            }}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
                <button type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
            </form>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleEditProduct(product)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;