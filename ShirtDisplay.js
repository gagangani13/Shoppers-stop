import React, { useContext } from 'react'
import ShirtContext from './Context/ShirtContext'

const ShirtDisplay = () => {
    const details=useContext(ShirtContext)
    function addToCartL(e) {
        details.addToCartL(e.target.parentElement.id)
    }
    function addToCartS(e) {
        details.addToCartS(e.target.parentElement.id)
    }
    function addToCartM(e) {
        details.addToCartM(e.target.parentElement.id)
    }
    return (
    <div>
      {details.items.map((item)=>{
        return(
            <li id={item.Id}>
                {item.Name}--{item.Description}-{item.Price}
                <button onClick={addToCartL}>Buy L-{item.L}</button>
                <button onClick={addToCartM}>Buy M-{item.M}</button>
                <button onClick={addToCartS}>Buy S-{item.S}</button>
            </li>
        )
      })}
    </div>
  )
}

export default ShirtDisplay
