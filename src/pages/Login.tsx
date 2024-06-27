// src/Login.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-container">
      <Form
        name="login"
        onFinish={onFinish}
        className="login-form"
      >
        <h2>Login to your account</h2>
        <div className='EmailText'>Email</div>
        <Form.Item className='emailInput'
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <div className='PasswordText'>
        <div>password </div>
        <div className="forgot-link">
          <a href="#">Forgot?</a>
        </div>
        </div>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        
        <Form.Item>
          <Button htmlType="submit" className="login-button">
            Login now
          </Button>
        </Form.Item>
        <div className="signup-link">
          Don't have an account? <a  href="#">Sign up</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
