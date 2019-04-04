import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
// import ReactPaginate from 'react-paginate';
class ShopProducts extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          {this.props.products.map(product => (
            <div className="col-sm-4">
              <Cart product={product}/>
            </div>
          ))}
      
        </div>
      </div>
    )
  }
}
export default ShopProducts;
