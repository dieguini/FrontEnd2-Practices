import React from 'react'
import { movieType } from '../../../api/apiConfig'
import Slide from '../../../slide/Slide'
import { Layout } from 'antd';
import AppHeader from '../../header/AppHeader';
import AppFooter from '../../footer/AppFooter';

const { Content } = Layout;

const NowPlaying = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Now Playing</h1>
          <Slide movieType={movieType.now_playing}/>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default NowPlaying