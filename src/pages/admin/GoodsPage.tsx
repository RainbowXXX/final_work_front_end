import { Layout, Table, Input, Button, Space } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const dataSource = [
  {
    index: '1',
    goodsName: '牛奶',
    price: '65',
    image: '',
    description: '无',
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
    title: '商品名',
    dataIndex: 'goodsName',
    key: 'username',
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    align: 'center'
  },
  {
    title: '介绍',
    dataIndex: 'description',
    key: 'description',
    align: 'center'
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    render: (text, record) => (
      <Space size="middle">
        <Button type="link" onClick={() => handleEdit(record)}>修改</Button>
        <Button type="link" onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

const handleEdit = (record) => {
  console.log('Editing:', record);
};

const handleDelete = (record) => {
  console.log('Deleting:', record);
};

const GoodsPage: React.FC = () => {
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
          <Search placeholder="请输入商品名" onSearch={onSearch} enterButton />
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5, position: ['bottomCenter'] }} />
        </Space>
      </Content>
    </div>
  )
}


export default GoodsPage;