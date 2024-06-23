import { Layout, Table, Input, Button, Space } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const dataSource = [
  {
      index: '1',
      orderNumber: '000001',
      goodsName: '面包',
      number: '3',
      price: '100.00',
      orderTime: '2024-06-25',
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
    title: '订单号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
    align: 'center'
  },
  {
    title: '商品名',
    dataIndex: 'goodsName',
    key: 'goodsName',
    align: 'center'
  },
  {
    title: '数量',
    dataIndex: 'number',
    key: 'number',
    align: 'center'
  },
  {
    title: '总价',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  },
  {
    title: '下单日期',
    dataIndex: 'orderTime',
    key: 'orderTime',
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


const OrderPage: React.FC = () => {
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


export default OrderPage;