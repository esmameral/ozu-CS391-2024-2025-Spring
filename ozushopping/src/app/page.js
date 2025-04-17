'use client'
import { data } from "./components/data"
import Catalog from "./components/Catalog";
import { useState, useEffect } from "react";
import AddNewProduct from "./components/AddNewProduct";
import Counter from "./components/Counter";
import { MyContext } from '@/app/components/MyContext';

export default function Home() {
  const [productList, setProductList] = useState(data);

  const addHandler = (product) => {
    setProductList([...productList, product]);
  }
  const deleteHandler = (id) => {
    const newList = productList.filter(
      (product) => {
        if (product.id !== id)
          return product;

      })
    setProductList(newList);
  }

  const likeHandler = (id) => {
    const newList = productList.map(
      (product) => {
        if (product.id == id)
          product.like++;
        return product;
      })
    setProductList(newList);
  }

  const dislikeHandler = (id) => {
    const newList = productList.map(
      (product) => {
        if (product.id == id)
          product.dislike++;
        return product;
      })
    setProductList(newList);
  }

  useEffect(
    () => {
      document.title = productList.length + " products found";
    },
    [productList.length]
  )

  return (
    <div >
      <main >
        <Counter></Counter>
        <MyContext.Provider value={{ data: "Data from context!" , onDelete:deleteHandler }}>
          <AddNewProduct onAdd={addHandler}></AddNewProduct>
          <Catalog products={productList}  onLike={likeHandler} onDislike={dislikeHandler} />
        </MyContext.Provider>
      </main>

    </div>
  );
}
