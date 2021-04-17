
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

export default function Logincontent({title}) {
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
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
                    

                </div>
                
            </div>
        </div>
    );
 }
 