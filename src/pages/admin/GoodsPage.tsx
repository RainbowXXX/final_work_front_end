import React, { useState } from 'react';
import { Layout, Table, Input, Button, Space, Modal, Form, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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
    key: 'goodsName',
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
    align: 'center',
    render: (text) => text ? <img src={text} alt="商品图片" style={{ width: 50, height: 50 }} /> : '无'
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

const GoodsPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onSearch = (value) => console.log(value);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      const newGood = {
        ...values,
        image: fileList.length ? URL.createObjectURL(fileList[0].originFileObj) : ''
      };
      console.log('Received values of form: ', newGood);
      // Here you would normally save the new good to your data source
      setIsModalVisible(false);
      form.resetFields();
      setFileList([]);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setFileList([]);
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

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
          <Search placeholder="请输入商品名" onSearch={onSearch} enterButton /><Button>增加</Button>
          <Button type="primary" onClick={showModal}>增加商品</Button>
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5, position: ['bottomCenter'] }} />
        </Space>
      </Content>
      <Modal
        title="增加商品"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="goodsName"
            label="商品名"
            rules={[{ required: true, message: '请输入商品名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="价格"
            rules={[{ required: true, message: '请输入价格!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="图片"
            valuePropName="fileList"
            getValueFromEvent={handleUploadChange}
          >
            <Upload
              listType="picture"
              beforeUpload={() => false}
              onChange={handleUploadChange}
              fileList={fileList}
            >
              <Button icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="description"
            label="介绍"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default GoodsPage;
