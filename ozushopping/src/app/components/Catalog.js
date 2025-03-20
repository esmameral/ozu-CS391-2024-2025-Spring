'use client'
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";

export default function Catalog(props) {
    const { products, onDelete, onLike,onDislike } = props;
    return (<div>
        <Container>
            <Row >
                {products.map((item, index) => {
                    return (
                        <Col key={`product-${index}`} sm="6" md="4" lg="2" >
                            <ProductCard product={item} onDelete={onDelete} onLike={onLike} onDislike={onDislike}></ProductCard>
                        </Col>    
                    )

                })}

            </Row>
        </Container>

    </div>
    );
}