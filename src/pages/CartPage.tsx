import React, { useState } from 'react';
import { Table, Tag, Space, Button, Checkbox } from 'antd';

interface CartItemType {
  key: string;
  image: string;
  price: number;
  selected: boolean; // 添加选中状态属性
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    { key: '1', image: 'image0.jpg', price: 50, selected: false },
    { key: '2', image: 'image1.jpg', price: 30, selected: false },
    { key: '3', image: 'image2.jpg', price: 25, selected: false },
  ]);

  // 全选状态
  const [selectAll, setSelectAll] = useState(false);

  const columns = [
    {
      title: '选择',
      dataIndex: 'selected',
      key: 'selected',
      width: 40, // 设置选择列的宽度
      render: (selected: boolean, record: CartItemType) => (
        <Checkbox checked={selected} onChange={() => handleSelectItem(record)} />
      ),
    },
    {
      title: '图片',
      dataIndex: 'image',
      key: 'image',
      width: 150, // 设置图片列的宽度
      render: (image: string) => <img src={image} alt="商品图片" style={{ width: '100px', height: '100px' }} />,
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      width: 100, // 设置价格列的宽度
      render: (price: number) => `$${price}`,
    },
    {
      title: '操作',
      key: 'action',
      width: 100, // 设置操作列的宽度
      render: (record: CartItemType) => (
        <Space size="middle">
          <a onClick={() => handleDeleteItem(record)}>删除</a>
        </Space>
      ),
    },
  ];

  // 处理选择商品
  const handleSelectItem = (item: CartItemType) => {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.key === item.key) {
        return { ...cartItem, selected: !cartItem.selected };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    // 检查是否所有商品都被选中，更新全选状态
    const allSelected = updatedCart.every(cartItem => cartItem.selected);
    setSelectAll(allSelected);
  };

  // 处理全选
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const updatedCart = cartItems.map(cartItem => ({
      ...cartItem,
      selected: checked,
    }));
    setCartItems(updatedCart);
    setSelectAll(checked);
  };

  // 计算总价格
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      if (item.selected) {
        total += item.price;
      }
    });
    return total;
  };

  // 处理删除商品
  const handleDeleteItem = (item: CartItemType) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.key !== item.key);
    setCartItems(updatedCart);
    // 删除商品后，如果所有商品都被选中，取消全选状态
    const allSelected = updatedCart.every(cartItem => cartItem.selected);
    setSelectAll(allSelected);
  };

  // 处理购买功能
  const handleBuy = () => {
    // 在这里可以添加购买逻辑，比如向后端发送购买请求等
    alert('购买成功！');
    // 清空购物车或者做其他操作
    setCartItems([]);
    setSelectAll(false); // 清空购物车后取消全选状态
  };

  return (
    <div>
      <h2>购物车</h2>
      <div style={{ marginBottom: '10px' }}>
        <Checkbox checked={selectAll} style={{ width: 'auto' }}>全选</Checkbox>
      </div>
      <Table
        columns={columns}
        dataSource={cartItems}
        pagination={false}
        footer={() => (
          <Space style={{ float: 'right', marginTop: '10px' }}>
            <span>总价格: ${calculateTotalPrice()}</span>
            <Button type="primary" onClick={handleBuy}>购买</Button>
          </Space>
        )}
      />
    </div>
  );
};

export default CartPage;
