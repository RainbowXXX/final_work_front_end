import React from 'react';
import { Layout, BackTop } from 'antd';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0' }}>
          <Navbar />
          <Outlet/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Online Shopping Platform ©2024 Created by Your Name
      </Footer>
      <BackTop />
    </Layout>
  );
};

export default App;
