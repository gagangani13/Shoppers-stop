import React, { useState,useEffect } from "react";
import ShirtContext from "./ShirtContext";
import axios from "axios";
const ShirtProvider = (props) => {

  useEffect(()=>{
    if(localStorage.getItem('Details')===null){
      console.log('EMPTY')
    }else{
      updateData(JSON.parse(localStorage.getItem('Details')))
      crudcrud(JSON.parse(localStorage.getItem('Details')))
    }
  },[])

  const [data, updateData] = useState([]);
  
  function addShirtToDisplayHandler(Shirt) {
    updateData([...data, Shirt]);
    localStorage.setItem('Details',JSON.stringify([...data, Shirt]))
  }
  function addToCartSHandler(id) {
    const details = data.filter((item) => {
      if (item.Id === id && item.S > 0) {
        // eslint-disable-next-line
        return item.S = item.S - 1, item.Qty += 1, item.Size += `S `
      }
      return item;
    });
    updateData(details);
    localStorage.setItem('Details',JSON.stringify(details))
  }
  function addToCartMHandler(id) {
    const details = data.filter((item) => {
      if (item.Id === id && item.M > 0) {
        // eslint-disable-next-line
        return item.M = item.M - 1, item.Qty += 1, item.Size += `M `
      }
      return item;
    });
    updateData(details);
    localStorage.setItem('Details',JSON.stringify(details))
  }
  function addToCartLHandler(id) {
    const details = data.filter((item) => {
      if (item.Id === id && item.L > 0) {
        // eslint-disable-next-line
        return item.L = item.L - 1, item.Qty += 1, item.Size += `L `
      }
      return item;
    });
    updateData(details);
    localStorage.setItem('Details',JSON.stringify(details))
  }
  async function crudcrud(details) {
    if (localStorage.getItem("CrudId") === null) {
      const addToCrud = await axios.post(
        `https://crudcrud.com/api/abd9cc6bf4b9447f9f010970a1c11c2b/Shirt`,
        { details }
      );
      try {
        const Id= await addToCrud.data._id
        localStorage.setItem("CrudId", Id);
        console.log(addToCrud.data.details);
      } catch (error) {
        console.log(error);
      }
    } else {
      const response = await axios.get(
        `https://crudcrud.com/api/abd9cc6bf4b9447f9f010970a1c11c2b/Shirt/${localStorage.getItem(
          "CrudId"
        )}`
      );
      try {
        if (response.data!== undefined) {
          const updateCrud = await axios.put(
            `https://crudcrud.com/api/abd9cc6bf4b9447f9f010970a1c11c2b/Shirt/${localStorage.getItem(
              "CrudId"
            )}`,
            { details }
          );
          try {
            console.log(updateCrud.data[0].details);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        const addToCrud = await axios.post(
          `https://crudcrud.com/api/abd9cc6bf4b9447f9f010970a1c11c2b/Shirt`,
          { details }
        );
        try {
          localStorage.setItem("CrudId", addToCrud.data[0]._id);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  const shirtContext = {
    items: data,
    addShirtToDisplay: addShirtToDisplayHandler,
    addToCartS: addToCartSHandler,
    addToCartL: addToCartLHandler,
    addToCartM: addToCartMHandler,
    loadFromCrud:crudcrud,
  };
  return (
    <ShirtContext.Provider value={shirtContext}>
      {props.children}
    </ShirtContext.Provider>
  );
};

export default ShirtProvider;
