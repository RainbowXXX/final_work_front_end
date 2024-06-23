import { Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Dropdown, Avatar, Space } from 'antd';
import { ShoppingCartOutlined, HomeOutlined, ShopOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

function Navbar() {
  const history = useNavigate()
  const [isLogging, setIsLogging] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2" onClick={() => setIsLoggedIn(false)}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
        <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => { history('/index') }}>首页</Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />} onClick={() => { history('/shop') }}>商品</Menu.Item>
        <Menu.Item key="3" icon={<PhoneOutlined />} onClick={() => { history('/contact') }}>客服</Menu.Item>
        <Menu.Item key="4" icon={<ShoppingCartOutlined />} onClick={() => { history('/cart') }}>购物车</Menu.Item>
      </Menu>
      <Space>
        {isLoggedIn ? (
          <Dropdown overlay={userMenu} placement="bottomRight">
            <Button type="text" icon={<UserOutlined />} shape="circle">
              <Avatar icon={<UserOutlined />} />
            </Button>
          </Dropdown>
        ) : (
          <>
            <Button type="link" onClick={() => setIsLogging(true)}>登录</Button>
            <Button type="link" onClick={() => setIsRegister(true)}>注册</Button>
          </>
        )}
      </Space>
      <Modal title="登录" open={isLogging} onOk={() => setIsLogging(false)} onCancel={() => setIsLogging(false)} okText="登录" cancelText="取消"
        footer={(
          <div style={{ textAlign: 'center' }}>
            <Button onClick={() => setIsLogging(false)} style={{ marginRight: 8 }}>取消</Button>
            <Button type="primary" onClick={() => setIsLogging(false)}>登录</Button>
          </div>
        )}>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
            style={{ marginBottom: 8 }}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
            style={{ marginBottom: 8 }}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input
              placeholder="请输入验证码"
              suffix={<img src="https://via.placeholder.com/100" alt="验证码" style={{ width: '80px', height: '32px' }} />}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="注册" open={isRegister} onOk={() => setIsRegister(false)} onCancel={() => setIsRegister(false)} okText="注册" cancelText="取消"
        footer={(
          <div style={{ textAlign: 'center' }}>
            <Button onClick={() => setIsRegister(false)} style={{ marginRight: 8 }}>取消</Button>
            <Button type="primary" onClick={() => setIsRegister(false)}>注册</Button>
          </div>
        )}>
        <Form
          name="register"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log('Form Values:', values)}
        >
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称!' }]}
            style={{ marginBottom: 8 }}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
            style={{ marginBottom: 8 }}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
            style={{ marginBottom: 8 }}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="com_password"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: '请再次输入密码!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致!'));
                },
              }),
            ]}
            style={{ marginBottom: 8 }}
          >
            <Input.Password placeholder="请再次输入密码" />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              { required: true, message: '请输入手机号!' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号!' }
            ]}
            style={{ marginBottom: 8 }}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label="地址"
            name="adress"
            style={{ marginBottom: 8 }}
          >
            <Input placeholder="请输入地址" />
          </Form.Item>
        </Form>
      </Modal>
    </Header>

  );
};

export default Navbar;
