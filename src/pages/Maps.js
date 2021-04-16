import { Layout } from 'antd';
import ProductHeader from "../components/ProductHeader"
import AppFooter from "../components/Footer"
import NavBar from "../components/NavBar";
import ProductNav from "../components/ProductNav";
import ProductList from "../components/ProductList";
import ProductContent from "../components/ProductContent";

// import ProductList from "../components/ProductList";
// import products from "../json/products.json";
// const { Header, Content, Footer } = Layout;
function Maps() {
  return (
    <Layout className="container">
        <NavBar />
        <ProductHeader/>
        <ProductNav/>
        <ProductContent/>

        
        <AppFooter/>  
    </Layout>
  );
}
export default Maps;
