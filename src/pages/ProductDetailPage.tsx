import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Button, Row, Col, Card } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-components';

const { Content } = Layout;

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Simulated product data (fetch real data based on id if needed)
  const product = {
    id: Number(id),
    name: `Product ${id}`,
    price: `$10`,
    description: `Detailed description of Product ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    image: 'https://via.placeholder.com/300',
  };

  const handleBack = () => {
    // Handle back button click, e.g., navigate back to previous page
    console.log('Navigate back to previous page');
  };

  const handleAddToCart = () => {
    // Handle add to cart button click
    console.log('Add to cart clicked');
  };

  const handleBuyNow = () => {
    // Handle buy now button click
    console.log('Buy now clicked');
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <PageHeader
          className="site-page-header"
          onBack={handleBack}
          title={`Product ${id} Detail`}
          subTitle="Detailed information about the product"
          backIcon={<LeftOutlined />}
        />
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card
              cover={<img alt={product.name} src={product.image} />}
              bordered={false}
            />
            <p>
              test
            </p>
          </Col>
          <Col span={12}>
            <div>
              <h2>{product.name}</h2>
              <p><strong>Price:</strong> {product.price}</p>
              <p><strong>Description:</strong></p>
              <p>{product.description}</p>
              <Row justify="center" style={{ marginTop: '20px' }}>
                <Button type="primary" size="large" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button type="primary" size="large" style={{ marginLeft: '10px' }} onClick={handleBuyNow}>
                  Buy Now
                </Button>
              </Row>

            </div>
          </Col>
        </Row>
        {/* Centered images in a row */}
        <Row justify="center" style={{ marginTop: '50px' }} gutter={16}>
          <Col>
            <img src="https://via.placeholder.com/400x200" alt="Image 1" />
          </Col>
          <Col>
            <img src="https://via.placeholder.com/400x200" alt="Image 2" />
            <p>
              test
            </p>
          </Col>
        </Row>
        <p>
            test
        </p>
      </Content>
    </Layout>
  );
};

export default ProductDetailPage;
