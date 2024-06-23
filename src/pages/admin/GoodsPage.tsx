import { Layout, Table, Input, Button, Space } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const dataSource = [
  {
      index: '1',
      goodsName: 'user',
      price: '123123123',
      image: 'asd',
      description: '奥术大师多',
  }
];


const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '商品名',
    dataIndex: 'goodsName',
    key: 'username',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: '介绍',
    dataIndex: 'description',
    key: 'description',
  },
];


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
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </Space>
      </Content>
    </div>
  )
}


export default GoodsPage;