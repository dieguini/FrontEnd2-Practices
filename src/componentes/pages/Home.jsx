import React from 'react'
import { Layout } from 'antd';
import AppHeader from '../header/AppHeader';
import AppFooter from '../footer/AppFooter';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Hello from Home!</h1>
          <p>Please select a link</p>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default Home