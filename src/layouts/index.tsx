import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// 全量引入样式
// import "antd/dist/antd.css"

// 设置项目的alias，方便引入(1.tsconfig.json 2.main.js)
import Home from "@/pages/Home";
import About from "@/pages/About";
import Users from "@/pages/Users";
// 如果没有安装less，将会报下面的错误
// [vite] Internal server error: Preprocessor dependency "less" not found. Did you install it?
import styles from "./index.module.less";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className={styles.layout}>
        <Header>
          <div className={styles.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">Users</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={styles.content}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/users" exact component={Users} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}