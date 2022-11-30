import React from "react";
import { Clock } from "./Clock";
import ClockFunctional from "./ClockFunctional";
import { Layout } from 'antd';
import AppHeader from '../../header/AppHeader';
import AppFooter from '../../footer/AppFooter';

const { Content } = Layout;

const ClockMain = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Clock />
          <ClockFunctional />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default ClockMain;
