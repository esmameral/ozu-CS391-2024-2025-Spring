'use client'
import styles from "./page.module.css";
import {data} from "./components/data"
import Catalog from "./components/Catalog";
import { useState } from "react";

export default function Home() {
  const [productList, setProductList]=useState(data)

  const deleteHandler = (id)=>{
      const newList=productList.filter(
        (product) => {
          if(product.id!==id)
            return product;
              
      })
    setProductList(newList);
  }

  const likeHandler = (id)=>{
    const newList=productList.map(
      (product) => {
        if(product.id==id)
           product.like++;
        return product;             
    })
  setProductList(newList);
}

const dislikeHandler = (id)=>{
  const newList=productList.map(
    (product) => {
      if(product.id==id)
         product.dislike++;
      return product;             
  })
setProductList(newList);
}

  return (
    <div className={styles.page}>
      <main className={styles.main}>
            <Catalog products={productList} onDelete={deleteHandler} onLike={likeHandler} onDislike={dislikeHandler}/>
      </main>
      
    </div>
  );
}
