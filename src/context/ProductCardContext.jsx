import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const ProductCardContext = createContext();

const fetchProducts = async (page) => {
 /*  const apiUrl = `/api/products?`; */
  const apiUrl = `https://api.timbu.cloud/products?`;

  const response = await axios.get(apiUrl, {
    params: {
      organization_id: process.env.REACT_APP_ORGANISATION_ID,
      reverse_sort: false,
      page: page,
      size: 9,
      Appid: process.env.REACT_APP_APP_ID,
      Apikey: process.env.REACT_APP_API_KEY,
    },
  });
  return response.data;
}

const ProductCardProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);

 

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts();
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);


  return (
    <ProductCardContext.Provider value={{ products, isLoading, isError, isEmpty }}>
      {children}
    </ProductCardContext.Provider>
  );
};

export default ProductCardProvider;
