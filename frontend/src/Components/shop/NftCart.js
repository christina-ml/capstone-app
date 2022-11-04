import React, { useState } from 'react';

import './NftCart.scss';

import nftData from './nftData';

function NftCart() {

  const [searchTerm, setSearchTerm] = useState(1);

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="NftCart">
      <h1 className="NftCart__title">NFT Cart</h1>

      <table className="NftCart__table">
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
            <div className="NftCart__productInfo">
              <div className="NftCart__productImage">
                <img src="https://i.seadn.io/gae/poF40KemmQv6kZ-WO5Cn1GfXCkpmPS6ixKT_7OyRo7Pf3lCb_0UbPbKS-WslhCXWuo791j9C9-7wADhcAFwk4W5oHhEJjksFRcIwYA?auto=format&w=1000" alt="Caveman NFT" />
              </div>
              <div>
                <div className="NftCart__productTitle">
                  CavemanNFT #3861
                  </div>
                <div className="NftCart__productRemove">Remove</div>
              </div>
            </div>
          </td>
          <td> 
            <div className="NftCart__productQty">
              <input 
                type="text" 
                maxlength="3"
                min="1"
                value={searchTerm} 
                onChange={updateSearchTerm}
              />
            </div>
            {(searchTerm < 2 && searchTerm > 0) ? <span></span> : <span>Error: Quantity must be 1</span>}
          </td>  
          <td>0.190 ETH</td>
          <td>0.403 ETH</td>
        </tr>
        {/* product 1 end */}
        {/* product 2 start */}
        <tr>
          <td>
            <div className="NftCart__productInfo">
              <div className="NftCart__productImage">
                <img src="https://i.seadn.io/gae/7hIKYv6J16h8lp1q5ASKgunBa7dxfGvRfzpMulbg9gqDERA16vdZ2WtBlTGm38-wXgHDcjCWY7zjfCaKedsarjZQ_T-zT715r0C9tm8?auto=format&w=1000" alt="Liftoff NFT" />
              </div>
              <div>
                <div className="NftCart__productTitle">
                  Liftoff
                  </div>
                <div className="NftCart__productRemove">Remove</div>
              </div>
            </div>
          </td>
          <td> 
            <div className="NftCart__productQty">
              <input 
                type="text" 
                maxlength="3"
                min="1"
                value={searchTerm} 
                onChange={updateSearchTerm}
              />
            </div>
            {(searchTerm < 2 && searchTerm > 0) ? <span></span> : <span>Error: Quantity must be 1</span>}
          </td>  
          <td>0.213 ETH</td>
          <td>0.403 ETH</td>
        </tr>
        {/* product 2 end */}
  
        {/* <!--  end table rows    --> */}
      </table>
    </div>

  )
}

export default NftCart;