import { Layout } from 'antd';
import MemberProfile from "../components/MemberProfile"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

// import ProductList from "../components/ProductList";
import ProductContent from "../components/ProductContent";

function Member() {
  return (
    
    <Layout className="container">
        <NavBar />
            <MemberProfile/>
        <Footer/>  
    </Layout>


  );
}
export default Member;