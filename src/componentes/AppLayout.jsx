import { Layout } from 'antd';
import React from 'react'
import AppFooter from './footer/AppFooter';
import AppHeader from './header/AppHeader';

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout