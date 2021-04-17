import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import NavBar from "../components/NavBar";
import AppContent from "../components/Content"

// import { useContext } from "react"; 
// import { StoreContext } from '../store';


// import ProductList from "../components/ProductList";
// import products from "../json/products.json";
// const { Header, Content, Footer } = Layout;
function Home() {
  // const {title}=useContext(StoreContext);
  return (
    <Layout className="container">
        <NavBar />
        <AppHeader />
        <AppContent/>
        <AppFooter/>  
    </Layout>
  );
}
export default Home;
