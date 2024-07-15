import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import NotFoundImage from '../assets/notfound_page.png'; //

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(prod => prod.unique_id === id);

  if (!product) {
    return <div className='flex flex-col items-center my-12'>
      <h1 className='font-normal text-3xl text-headingColor'>Product Not found</h1>
      <img src={NotFoundImage} alt='not found' className='w-1/2'/>
      
      </div>;
  }

  return (
    <div className="w-[95%] mx-auto my-12">

      <div className="flex flex-col md:flex-row gap-8">
        <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} className="w-full md:w-1/2 object-cover rounded" />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">Price: ₦{product.current_price[0].NGN[0]}</p>
          <p className="text-lg text-gray-700">Available Quantity: {product.available_quantity}</p>
          <h1 className='text-xl'>Description</h1>
          <p className="text-md text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
