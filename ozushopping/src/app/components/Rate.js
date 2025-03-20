import Image from "next/image";
import Link from "next/link";

export default function Rate({onLike, product,onDislike}) {
    return (<div>
     <Link href="" onClick={()=>onLike(product.id)}> 
        <Image src="/like.png" width="24" height="24" alt="image"></Image>
    </Link>
    ({product.like})
    <Link href="" onClick={()=>onDislike(product.id)}>
        <Image src="/dislike.png" width="24" height="24" alt="image"></Image>
    </Link>
    ({product.dislike})
    </div>
    );
}