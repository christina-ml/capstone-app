import React from 'react';

import './Cart.scss';

// import nftData from './nftData';

function Cart({cartItems, handleAddToCart}) {
  
  console.log("cartItems:", cartItems)

  // const [searchTerm, setSearchTerm] = useState(1);

  // const updateSearchTerm = (e) => {
  //   setSearchTerm(e.target.value);
  // }

  return (
    <div className="Cart">
      <h1 className="Cart__title">Shopping Cart</h1>

        {/* {cartItems.length === 0 ?
            <div>
                Empty cart - There are {cartItems.length} items in the cart.
            </div>
            :
            <div>
                There are {cartItems.length} items in the cart.
            </div>
        } */}


      <table className="Cart__table">
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
          
          {/* <!--   begin table rows   --> */}
          {/* product 1 start */}
          <tr>
            <td>
              <div className="Cart__productInfo">
                <div className="Cart__productImage">
                  <img src="https://i.seadn.io/gae/poF40KemmQv6kZ-WO5Cn1GfXCkpmPS6ixKT_7OyRo7Pf3lCb_0UbPbKS-WslhCXWuo791j9C9-7wADhcAFwk4W5oHhEJjksFRcIwYA?auto=format&w=1000" alt="Caveman NFT" />
                </div>
                <div>
                  <div className="Cart__productTitle">
                    CavemanNFT #3861
                    </div>
                  <div className="Cart__productRemove">Remove</div>
                </div>
              </div>
            </td>
            <td> 
              <div className="Cart__productQty">
                <input 
                  type="text" 
                  maxLength="3"
                  min="1"
                  // value={searchTerm} 
                  // onChange={updateSearchTerm}
                />
              </div>
              {/* {(searchTerm < 2 && searchTerm > 0) ? <span></span> : <span>Error: Quantity must be 1</span>} */}
            </td>  
            <td>0.190 ETH</td>
            <td>0.403 ETH</td>
          </tr>
          {/* product 1 end */}
          {/* product 2 start */}
          <tr>
            <td>
              <div className="Cart__productInfo">
                <div className="Cart__productImage">
                  <img src="https://i.seadn.io/gae/7hIKYv6J16h8lp1q5ASKgunBa7dxfGvRfzpMulbg9gqDERA16vdZ2WtBlTGm38-wXgHDcjCWY7zjfCaKedsarjZQ_T-zT715r0C9tm8?auto=format&w=1000" alt="Liftoff NFT" />
                </div>
                <div>
                  <div className="Cart__productTitle">
                    Liftoff
                    </div>
                  <div className="Cart__productRemove">Remove</div>
                </div>
              </div>
            </td>
            <td> 
              <div className="Cart__productQty">
                <input 
                  type="text" 
                  maxLength="3"
                  min="1"
                  // value={searchTerm} 
                  // onChange={updateSearchTerm}
                />
              </div>
              {/* {(searchTerm < 2 && searchTerm > 0) ? <span></span> : <span>Error: Quantity must be 1</span>} */}
            </td>  
            <td>0.213 ETH</td>
            <td>0.403 ETH</td>
          </tr>
          {/* product 2 end */}
    
          {/* <!--  end table rows    --> */}
        </tbody>
      </table>
    </div>

  )
}

export default Cart;