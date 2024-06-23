import React, { useState } from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Table, Input, Button, Space } from 'antd';
import { HomeOutlined, SettingOutlined, UserOutlined, ShoppingOutlined, FileDoneOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const dataSource = [
    {
        key: '1',
        username: 'user',
        phone: '123123123',
        nickname: 'asd',
        address: '奥术大师多',
    }
];

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    
];

const AdminPage = () => {
    const history = useNavigate()
    const [collapsed, setCollapsed] = useState(false);

    const onSearch = (value: any) => console.log(value);

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
                    >
                        <Menu.Item key="1" icon={<SettingOutlined />}>
                            基本设置
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserOutlined />}>用户管理</Menu.Item>
                        <Menu.Item key="4" icon={<ShoppingOutlined />}>商品管理</Menu.Item>
                        <Menu.Item key="5" icon={<FileDoneOutlined />}>订单管理</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>网站信息</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <RouterView />
                    <Content
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
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AdminPage;
