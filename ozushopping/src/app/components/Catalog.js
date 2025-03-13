'use client'
import Rate from "./Rate";

export default function Catalog(props) {
    const { products } = props;
    return (<div>
        <table>
            <thead>
                <tr><th>Name</th><th>Price</th><th>Description</th><th>Like/Dislike</th></tr>
            </thead>
            <tbody>
                {products.map((item,index)=>{
                       return (<tr key={index}><td>{item.name}</td>
                       <td>{item.price}</td><td>{item.description}</td>
                       <td><Rate></Rate></td>
                       </tr>)

                })}
            </tbody>
        </table>
    </div>
    );
}