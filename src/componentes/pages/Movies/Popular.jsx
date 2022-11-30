import React from 'react'
import { movieType } from '../../../api/apiConfig'
import Slide from '../../../slide/Slide'
import { Layout } from 'antd';
import AppHeader from '../../header/AppHeader';
import AppFooter from '../../footer/AppFooter';

const { Content } = Layout;

const Popular = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Popular</h1>
          <Slide movieType={movieType.popular}/>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default Popular