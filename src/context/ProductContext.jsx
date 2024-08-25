import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const ProductContext = createContext();

const fetchProducts = async (page) => {
  /* const apiUrl = `/api/products?`; */
  const apiUrl = `https://api.timbu.cloud/products?`

  const response = await axios.get(apiUrl, {
    params: {
      organization_id: process.env.REACT_APP_ORGANISATION_ID,
      reverse_sort: false,
      page: page,
      size: 10,
      Appid: process.env.REACT_APP_APP_ID,
      Apikey: process.env.REACT_APP_API_KEY,
    },
  });
  return response.data;
}

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(currentPage);
        setProducts(data.items);
        console.log(data.items)
        setTotalPages(Math.ceil(data.total / 9)); // Assuming `data.total` is the total number of products
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductContext.Provider value={{ products, paginate, totalPages, currentPage, isLoading, isError, isEmpty }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
