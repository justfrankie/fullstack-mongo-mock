import React from 'react';
import Products from './Products.jsx';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.postingsList.map((ele, index) => (
          <Products ele={ele} key={index}/>
        ))}
    </div>
  )
}

export default ProductList