import React, { useContext } from 'react'
import ShirtContext from './Context/ShirtContext'

const CartButton = (props) => {
  const details=useContext(ShirtContext)
  const quantity=details.items.reduce((acc,curr)=>{
    return acc+curr.Qty
  },0)
  return (
    <div>
      <button onClick={props.showCart}>Cart{`(${quantity})`}</button>
    </div>
  )
}

export default CartButton
