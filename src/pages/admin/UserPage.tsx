import { Layout, Table, Input, Space } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const dataSource = [
    {
        index: '1',
        username: 'zhagnsan',
        phone: '123123123',
        nickname: '张三',
        address: '保密',
    }
];

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center'
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center'
    },
    {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
        align: 'center'
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },

];

const UserPage: React.FC = () => {
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Search placeholder="请输入用户名" onSearch={onSearch} enterButton style={{ width: '300px' }}/>
                    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5, position: ['bottomCenter'] }} />
                </Space>
            </Content>
        </div>
    )
}


export default UserPage;