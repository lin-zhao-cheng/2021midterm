import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import NavBar from "../components/NavBar";

// import ProductList from "../components/ProductList";
// import products from "../json/products.json";

const { Header, Content, Footer } = Layout;



function Home() {
  return (
    <Layout className="container main-layout">
        <NavBar />
        <AppHeader/>
        <AppFooter/>  
    
    </Layout>
  );
}

export default Home;
