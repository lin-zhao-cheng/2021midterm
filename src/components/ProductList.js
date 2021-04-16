// import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import products from "../json/maps-item.json";

import { Row, Col } from 'antd';
// const style = { background: '#0092ff', padding: '8px 0' };



export default function ProductList() {
  return (
    <Row  gutter={[16, 32]}>
      
    {products.map(product => (
        <Col 
          key={product.id} 

          xl={{ span: 8 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
    // <div className="row">
    //   {products.map(product => (
    //     <ProductItem key={product.id} product={product}/>
    //   ))}
    // </div>


  );
}