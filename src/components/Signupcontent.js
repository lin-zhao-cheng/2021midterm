import { Link } from 'react-router-dom';
import {  Form, Input, Button, Checkbox  } from 'antd';
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

export default function Signupcontent({title}) {
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                    <Form {...layout}name="basic" initialValues={{remember: true,}}onFinish={onFinish}onFinishFailed={onFinishFailed} className="signup-from">
                        <div className="signup-title">Register Account</div>
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
                    
                        <Form.Item
                        // className="login-pwd"
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />

                        </Form.Item>
                        <Form.Item
                        className="signup-pwd"
                            label="Confirm Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />

                        </Form.Item>
                    


                    
                        <Form.Item {...tailLayout} >
                            <Button type="primary" htmlType="submit" className="login-btn signup-btn" >
                            <div className="login-login-text">Sign Up</div>
                            </Button>
                            

                        </Form.Item>
                    </Form>
                    <div className="signup-bottom">
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