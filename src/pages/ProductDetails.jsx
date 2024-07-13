import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const ProductDetails = () => {
  const {products} = useContext(ProductContext)
   
    /*  console.log(products) //products
     console.log(products.items) //products
    console.log(products.items[0].name) //name  */
  /*  console.log(products.items[0].description)  //description
   console.log(products.items[0].current_price[0].NGN[0])  //price 
    console.log(products.items[0].photos[0].url)  //photos */
   /*  products.map((product) =>{
      console.log(product.name)
    }) */

  products.map((prd) =>{
    console.log(prd.photos[0].url)
  })
  return (
    <>
    <h1>Product Details</h1>
    {/* <img src={`https://api/timbu.cloud/${products.items[0].photos[0].url}`} alt='test'/> */}
    </>
  )
}

export default ProductDetails