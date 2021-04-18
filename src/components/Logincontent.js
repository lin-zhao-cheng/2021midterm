import LoginFrom from "../components/LoginFrom"
import google from "../images/google-ico.png"
import { Link } from 'react-router-dom';
// import { Divider } from 'antd';

export default function Logincontent({title}) {
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                    <div className="login-title">LOG IN</div>
                    <div className="login-from-flex">
                        <div className="login-from-l"><div><LoginFrom /></div></div>                        
                        
                        <div className="btw-text"><div className="btw-line"></div></div>
                        <div className="login-from-r">
                            <div className="login-google-bottom  ">
                                    <Link to='/Member' className="login-google-text">Sign in with Google</Link>
                                    <img src={google} alt="" className="google-ico"/>
                            </div>
                            <div className="or-text">OR</div>
                            <div className="login-sign-bottom ">
                                    <Link to='/Signup'  className="login-google-text">Sign Up</Link > 
                            </div>
                        </div>                        
                    </div>

                </div>
                
            </div>
        </div>
    );
 }
 