import { Layout } from 'antd';
import ProductHeader from "../components/ProductHeader"
import PdFooter from "../components/ProductFooter"
import NavBar from "../components/NavBar";
import products from "../json/maps-item.json";
import ProductDetailContent from "../components/ProductDetailContent";

function Product({ match }) {
    const product = products.find(
       (x) => x.id === match.params.productId
    );
    return (
      <Layout className="container">
         <NavBar />
         <ProductHeader/>
         <ProductDetailContent product={product}/>
         <PdFooter/>  
      </Layout>
    );
 }
 
 export default Product;