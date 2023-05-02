import React, { useState } from 'react'
import CartButton from'./CartButton'
import ShirtInput from './ShirtInput'
import ShirtDisplay from './ShirtDisplay'
import CartDisplay from './CartDisplay'


const MainHome = () => {

  const[cart,updateCart]=useState(false)
  function showCart(){
    if(cart){
      updateCart(false)
    }else{
      updateCart(true)
    }
  }
  return (
    <div>
      <header>
        <h2>SHIRT WEBSITE</h2>
        <CartButton showCart={showCart}/>
      </header>
      <main>
        <ShirtInput/>
        <hr/>
        <h3>STOCK</h3>
        <ShirtDisplay />
        <hr/>
        <h3>CART</h3>
        {cart&&<CartDisplay showCart={showCart} />}
      </main>
    </div>
  )
}

export default MainHome
