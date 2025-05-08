'use client'
import Image from "next/image";
import { useEffect, useState, use } from "react";


export default function ProductDetailPage({params}){
    const { productId } = use(params);
    const [product, setProduct]=useState({});
    
    useEffect(() => {
        fetch(`http://localhost:8000/products/${productId}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          console.log(product)})
        .catch((err) => console.log(err));
      }, [product, productId]);

    return <div>

        <h2>Product Detail Page</h2>
        <Image src={product.image} width="300" height="300" alt="product image"></Image>
        <br/>
        <b>id:</b> {product.id}
        <br/>
        <b>Name:</b> {product.name}
        <br/>
        <b>Description:</b> {product.description}

    </div>
}