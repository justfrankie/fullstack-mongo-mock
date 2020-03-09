import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <div> {props.ele.item} </div>
      <div> {props.ele.min_cost}</div>
      <div> {props.ele.curr_bid}</div>
      <br></br>
      <img src={props.ele.image}></img>
    </div>
  )
}

export default Products