import { Layout } from 'antd';
import MybagContent from "../components/MybagContent"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

// import ProductList from "../components/ProductList";
// import ProductContent from "../components/ProductContent";

function Shopbag() {
  return (
    
    <Layout className="container">
        <NavBar />
            <MybagContent/>
        <Footer/>  
    </Layout>


  );
}
export default Shopbag;