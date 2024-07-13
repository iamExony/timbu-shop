import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // Products state
    const [products, setProducts] = useState([]);
//https://api.timbu.cloud/
//
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const appId = process.env.REACT_APP_APP_ID;
                const orgId = process.env.REACT_APP_ORGANISATION_ID;
                const apiUrl = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=${orgId}&reverse_sort=false&page=2&size=10&Appid=${appId}&Apikey=${apiKey}`;

                const response = await axios.get(apiUrl);
                setProducts(response.data.items); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);
/* console.log(products.name) */
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;