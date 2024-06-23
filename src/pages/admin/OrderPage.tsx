import { Layout, Table, Input, Button, Space } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const dataSource = [
  {
      index: '1',
      orderNumber: '000001',
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
  },
  {
    title: '订单号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '数量',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '总价',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '下单日期',
    dataIndex: 'orderTime',
    key: 'orderTime',
  },
];


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
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </Space>
      </Content>
    </div>
  )
}


export default OrderPage;