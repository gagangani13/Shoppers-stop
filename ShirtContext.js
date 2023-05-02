import { createContext } from 'react'

const ShirtContext = createContext({
    items:[],
    addShirtToDisplay:(shoe)=>{},
    addToCartS:(id)=>{},
    addToCartL:(id)=>{},
    addToCartM:(id)=>{},
    loadFromCrud:(details)=>{},
 
})

export default ShirtContext
