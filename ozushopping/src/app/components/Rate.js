import Image from "next/image";
import Link from "next/link";

export default function Rate({onLikeDislike, product}) {
    return (<div>
     <Link href="" onClick={()=>onLikeDislike(product.id,'like')}> 
        <Image src="/like.png" width="24" height="24" alt="image"></Image>
    </Link>
    ({product.like})
    <Link href="" onClick={()=>onLikeDislike(product.id,'dislike')}>
        <Image src="/dislike.png" width="24" height="24" alt="image"></Image>
    </Link>
    ({product.dislike})
    </div>
    );
}