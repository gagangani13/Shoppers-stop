import React, { useContext, useRef } from 'react'
import ShirtContext from './Context/ShirtContext'

const ShirtInput = () => {
  const ShirtNameRef=useRef()
  const descriptionRef=useRef()
  const priceRef=useRef()
  const lref=useRef()
  const mref=useRef()
  const sref=useRef()
  const ShirtCtx=useContext(ShirtContext)
  function addToDisplay(e){
    e.preventDefault()
    const details={'Name':ShirtNameRef.current.value,'Description':descriptionRef.current.value,'Id':Math.random().toString(),'Price':priceRef.current.value,'L':lref.current.value,'M':mref.current.value,'S':sref.current.value,'Qty':0,'Size':''}
    ShirtCtx.addShirtToDisplay(details)

  }
  return (
    <form onSubmit={addToDisplay}>
      <label htmlFor='shirtName'>Shirt Name</label>
      <input type='text' id='shirtName' ref={ShirtNameRef}/>
      <label htmlFor='description'>Description</label>
      <input type='text' id='description' ref={descriptionRef}/>
      <label htmlFor='price'>Price</label>
      <input type='number' id='price' ref={priceRef}/>
      <label htmlFor='L'>L</label>
      <input type='number' id='L' ref={lref}/>
      <label htmlFor='M'>M</label>
      <input type='number' id='M' ref={mref}/>
      <label htmlFor='S'>S</label>
      <input type='number' id='S' ref={sref}/>
      <button type='submit'>Add Product</button>
    </form>
  )
}

export default ShirtInput
