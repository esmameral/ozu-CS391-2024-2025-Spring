import Image from "next/image";
import {data} from "../../components/data"

export default function ProductDetailPage({params}){
    const pList = data.filter((product) => {
        return product.id == params.productId
      });
    const product = pList[0];

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