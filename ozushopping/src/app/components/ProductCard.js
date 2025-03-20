import Image from "next/image";
import {Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Rate from "./Rate";
import Link from "next/link";


const ProductCard = ({product, onDelete,onLike,onDislike}) => {
    
    return <div> 
<Card
  style={{
    width: '28 rem'
  }}
>
 <Image src={product.thumbnail} width="150" height="150" alt="product image"></Image>
  <CardBody>
    <CardTitle tag="h5">
      {product.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {product.price}
    </CardSubtitle>
    <Link href="" onClick={()=>onDelete(product.id)}>
        <Image src="/delete.png" width="24" height="24" alt="delete image"></Image>
    </Link>
    <Rate product={product} onLike={onLike} onDislike={onDislike}></Rate> 
  </CardBody>
</Card>
    </div>
    }
export default ProductCard;