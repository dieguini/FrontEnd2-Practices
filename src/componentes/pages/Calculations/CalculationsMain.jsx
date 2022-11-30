import React from "react";
import { ControlDivision, ControlMultiplication, ControlSubstraction, ControlSum } from "./ControlCalculations";
import { ControlDivision2, ControlMultiplication2, ControlSubstraction2, ControlSum2 } from "./ControlCalculationsWithFunctions";
import { Layout } from 'antd';
import AppHeader from '../../header/AppHeader';
import AppFooter from '../../footer/AppFooter';

const { Content } = Layout;

const CalculationsMain = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>
            <ins>Calculations</ins>
          </h1>
          <ControlSum v1={2.3} v2={3}/>
          <ControlSubstraction v1={2} v2={4.5}/>
          <ControlMultiplication v1={2} v2={9.1}/>
          <ControlDivision v1={4.3} v2={3.1}/>

          <h1>
            <ins>Calculations 2</ins>
          </h1>

          <ControlSum2 v1={2.3} v2={3}/>
          <ControlSubstraction2 v1={2} v2={4.5}/>
          <ControlMultiplication2 v1={2} v2={9.1}/>
          <ControlDivision2 v1={4.3} v2={3.1}/>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default CalculationsMain;
