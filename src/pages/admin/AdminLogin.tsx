import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../css/AdminLogin.css';

const AdminLogin = () => {
    const history = useNavigate();

    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
      const { username, password } = values;
  
      // 假设用户名和密码为 "admin" 和 "password"
      if (username === 'admin' && password === 'password') {
        // 登录成功，跳转到 adminpage 界面
        history('/admin');
      } else {
        // 登录失败，显示错误信息
        alert('用户名或密码错误');
      }
    };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>管理员登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
