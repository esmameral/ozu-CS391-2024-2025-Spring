'use client'
import Catalog from "./components/Catalog";
import { useState, useEffect } from "react";
import AddNewProduct from "./components/AddNewProduct";
import Counter from "./components/Counter";
import { MyContext } from '@/app/components/MyContext';

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addHandler = (product) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: new Headers({ 'Content-Type': 'application/json' })
    }
    fetch(`http://localhost:8000/products`, options)
      .then(res => {res.json();
                    console.log(res.data);
                    setDataLoaded(false);
      })
      .catch(error=>console.log(error))
  }
  const deleteHandler = (id) => {
    fetch(`http://localhost:8000/products/${id}`, { method: 'DELETE' })
      .then(() => {
        console.log("Deleted")
        setDataLoaded(false);//Load products again
      }
      )
      .catch(error => console.log(error))
  }

  

  const likeDislikeHandler = (id, type) => {
    fetch(`http://localhost:8000/products/${id}`)
    .then(res => res.json())
    .then(product => {
      console.log("Before update"+product)
      updateProduct(product, type)
      setDataLoaded(false)}
    )  
    .catch((err) => console.log(err));
  }

  const updateProduct=(product, type)=>{
    if(type==="like"){
      product.like++;
    }else{
      product.dislike++;
    }
    const options = {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: new Headers({ 'Content-Type': 'application/json' })
    }
    fetch(`http://localhost:8000/products/${product.id}`, options)
      .then(res => {res.json();
                    console.log(res.data);
                    setDataLoaded(false);
                    console.log("After update:"+product)
      })
      .catch(error=>console.log(error))
  }

  useEffect(
    () => {
      document.title = productList.length + " products found";
    },
    [productList.length]
  )
  
  useEffect(
    () => {
      setIsLoading(true)
      loadProducts();
      
    },
    [dataLoaded]
  )



const loadProducts=()=>{
  setTimeout(() => console.log("timeout"), 1500);
  fetch(`http://localhost:8000/products`)
    .then(response => response.json())
    .then(data => {
      setProductList(data);
      setDataLoaded(true)
      setIsLoading(false)
    })
    .then(console.log("data loading completed..."))
    .catch(error => { console.log(error) })
}

  return (
    <div >
      <main >
        <Counter></Counter>
        <MyContext.Provider value={{ data: "Data from context!", onDelete: deleteHandler }}>
          <AddNewProduct onAdd={addHandler}></AddNewProduct>
          {isLoading ? (
            <h2 style={{ textAlign: 'center', marginTop: '2rem', color: 'red', fontSize:46}}>Loading...</h2>
          ) : (
            <Catalog products={productList} onLikeDislike={likeDislikeHandler} />
          )}

          
        </MyContext.Provider>
      </main>

    </div>
  );
}
