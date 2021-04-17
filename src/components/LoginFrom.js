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
export default function LoginFrom({title}) {
    return (

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
    
          <Form.Item
          className="login-pwd"
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
            <Link to='/Forgetpwr' className="login-form-forgot" >
            Forgot password?
            </Link>
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked" className="from-block">
            <div><Checkbox>Remember me</Checkbox></div>
          </Form.Item>

    
          <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit" className="login-btn" >
              <div className="login-login-text">Login</div>
            </Button>
            

          </Form.Item>
    </Form>

    );
 }