import React from 'react';
import { Carousel } from 'antd';
import TestImg from '../assets/test.jpg'
import { Card, Row, Col } from 'antd';
import { FloatButton } from 'antd';
import CardContainer from '../components/CardContainer'

const { Meta } = Card;

function Index() {
    const gridStyle: React.CSSProperties = {
        width: '25%',
        textAlign: 'center',
      };
      
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <FloatButton.Group shape="square" style={{ right: 50 }}>
                <FloatButton description="123" />
                <FloatButton description="123" />
                <FloatButton description="123" />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>
                    <img src={TestImg} style={contentStyle}/>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <CardContainer
                name='电脑'
            >
                <Row gutter={16} >
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </CardContainer>

            <CardContainer
                name='test'
            >
                <Row gutter={16} >
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                        hoverable
                        style={{ width: 240, textAlign: 'center', marginBottom: 16}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </CardContainer>
        </div>
    )
}

export default Index;