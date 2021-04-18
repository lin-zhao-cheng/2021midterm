import { Layout } from 'antd';
import Signupcontent from "../components/Signupcontent"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

// import ProductList from "../components/ProductList";
// import ProductContent from "../components/ProductContent";

function Signup() {
  return (
    
    <Layout className="container">
        <NavBar />
        <Signupcontent/>
        <Footer/>  
    </Layout>


  );
}
export default Signup;