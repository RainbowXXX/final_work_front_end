import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Table, Input, Button, Space } from 'antd';
import { HomeOutlined, SettingOutlined, UserOutlined, ShoppingOutlined, FileDoneOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;


const AdminPage = () => {
    const history = useNavigate()
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();

    const handleClick = (e: any) => {
        navigate(e.key);
    };


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo" />
                <Button type="primary" icon={<HomeOutlined />} onClick={() => { history('/index') }}>
                    前台首页
                </Button>
                <Button type="primary" danger icon={<LogoutOutlined />} style={{ marginLeft: 10 }}>
                    退出登录
                </Button>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={handleClick}
                    >
                        <Menu.Item key="1" icon={<SettingOutlined />}>
                            基本设置
                        </Menu.Item>
                        <Menu.Item key="/admin/user" icon={<UserOutlined />}>用户管理</Menu.Item>
                        <Menu.Item key="/admin/goods" icon={<ShoppingOutlined />}>商品管理</Menu.Item>
                        <Menu.Item key="/admin/order" icon={<FileDoneOutlined />}>订单管理</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>网站信息</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    );
};


                    {/* <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Search placeholder="请输入用户名" onSearch={onSearch} enterButton />
                            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
                        </Space>
                    </Content> */}


export default AdminPage;
