import { Layout, Menu, Breadcrumb, Table, Input, Button, Space } from 'antd';


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

const UserPage = () => {
    const onSearch = (value: any) => console.log(value);
    return (<Content
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
    )
}


export default UserPage;