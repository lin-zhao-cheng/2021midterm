
import {  Form, Input, Button, Checkbox  } from 'antd';
import { Link } from 'react-router-dom';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default function Logincontent({title}) {
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                <div className=" fgt-title">Forget Password</div>
                    <Form {...layout}name="basic" initialValues={{remember: true,}}onFinish={onFinish}onFinishFailed={onFinishFailed}>
                    
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>


                    
                        <Form.Item {...tailLayout} >
                            <Button type="primary" htmlType="submit" className="login-btn  foget-btn" >
                            <div className="login-login-text">Send</div>
                            </Button>
                            

                        </Form.Item>
                    </Form>
                    <div className="  fgt-botm">
                        <div className="signup-text">
                            Already have account ?
                        </div>
                        <Link to="/Login" className="signup-text sigup-login-link">
                            Log in
                        </Link>
                        
                    </div>

                </div>
                
            </div>
        </div>
    );
 }
 