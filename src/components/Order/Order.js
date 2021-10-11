import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import useCart from '../Usecart/Usecart';
import useProducts from '../Useproduct/Useproduct';

const Order = () => {
      const [products] = useProducts();
      const [cart, setCart] = useCart(products);
      const history = useHistory();
      const handleRemove = key => {
            const newCart = cart.filter(product => product.key !== key)
            setCart(newCart);
            removeFromDb(key);
      }
      const placeorder=()=>{
            history.push('./shipping');
            // // setCart([]);
            // clearTheCart();
      }
      return (
            <div className="shop-container">
                  <div className="product-container">
                        {
                              cart.map(product => <Review
                                    key={product.key}
                                    product={product}
                                    handleRemove={handleRemove}
                              ></Review>)

                        }
                  </div>
                  <div className="cart-container">
                        <Cart cart={cart}>

                              <button onClick={placeorder} className="btn-regular">Proceed to Shipping</button>
                        </Cart>
                  </div>

            </div>
      );
};

export default Order;