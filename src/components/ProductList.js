// import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import products from "../json/maps-item.json";

export default function ProductList() {
  return (

    <div className="row">
      {products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>


  );
}