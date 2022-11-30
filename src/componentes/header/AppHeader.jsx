import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd'
import { HomeOutlined, ClockCircleOutlined, CalculatorOutlined } from "@ant-design/icons";
import { Icon } from '@ant-design/icons'


const { Header, Content, Footer } = Layout;

const headerNav = [
  {
    displayName: "Home",
    path: "/",
    // icon: <HomeOutlined />,
  },
  {
    displayName: "Clock",
    path: "/clock",
    // icon: <ClockCircleOutlined />,
  },
  {
    displayName: "Calculations",
    path: "/calculations",
    // icon: <CalculatorOutlined />,
  },
  {
    displayName: "Popular",
    path: "/popular",
  },
  {
    displayName: "Top Rated",
    path: "/top_rated",
  },
  {
    displayName: "Now Playing",
    path: "/now_playing",
  },
];

const AppHeader = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex(i => i.path === pathname)

  const navigate = useNavigate();

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={window.location.pathname}
        items={headerNav.map((value, index) => ({
          key: `${value.path}`,
          label: `${value.displayName}`,
          // icon: `${value.icon}`
        }))}
        onClick={({key}) => navigate(key)}></Menu>
    </Header>
  );
};

export default AppHeader
