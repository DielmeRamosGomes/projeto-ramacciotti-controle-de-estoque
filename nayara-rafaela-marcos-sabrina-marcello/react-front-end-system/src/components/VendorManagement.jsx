import React, { useState, useEffect } from 'react';

const VendorManagement = () => {
    const [vendors, setVendors] = useState([]);
    const [vendorName, setVendorName] = useState('');

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        // Fetch the list of vendors from the API
        const response = await fetch('/api/vendors');
        const data = await response.json();
        setVendors(data);
    };

    const addVendor = async () => {
        // Add a new vendor
        const response = await fetch('/api/vendors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: vendorName }),
        });
        if (response.ok) {
            setVendorName('');
            fetchVendors();
        }
    };

    const deactivateVendor = async (id) => {
        // Mark a vendor as inactive
        await fetch(`/api/vendors/${id}`, {
            method: 'DELETE',
        });
        fetchVendors();
    };

    return (
        <div>
            <h1>Vendor Management</h1>
            <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                placeholder="Vendor Name"
            />
            <button onClick={addVendor}>Add Vendor</button>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor.id}>
                        {vendor.name}
                        <button onClick={() => deactivateVendor(vendor.id)}>Deactivate</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorManagement;