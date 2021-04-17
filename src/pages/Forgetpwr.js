import { Layout } from 'antd';
import Forgetpwrcontent from "../components/Forgetpwrcontent"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

// import ProductList from "../components/ProductList";
import ProductContent from "../components/ProductContent";

function Forgetpwr() {
  return (
    
    <Layout className="container">
        <NavBar />
        <Forgetpwrcontent/>
        <Footer/>  
    </Layout>


  );
}
export default Forgetpwr;
