// src/components/ProductList.tsx
import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  // Simulated product data
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300', description: 'Description of Product 2' },
    // Add more products as needed
  ];

  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col key={product.id} span={8} style={{ marginBottom: '16px' }}>
          <Link to={`/product/${product.id}`}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Card.Meta title={product.name} description={product.description} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
