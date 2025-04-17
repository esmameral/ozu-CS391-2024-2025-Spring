'use client'
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import { MyContext } from '@/app/components/MyContext';
import { useContext } from "react";

export default function Catalog(props) {
    const { products,onLike,onDislike } = props;
    const contextObject = useContext(MyContext);

    return (<div>
         {contextObject.data}
        <Container>
            <Row >
                {products.map((item, index) => {
                    return (
                        <Col key={`product-${index}`} sm="6" md="4" lg="2" >
                            <ProductCard product={item}  onLike={onLike} onDislike={onDislike}></ProductCard>
                        </Col>    
                    )

                })}

            </Row>
        </Container>

    </div>
    );
}