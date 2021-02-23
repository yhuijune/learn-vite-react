import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import Layout from "./layouts/index"

import "antd/lib/style/index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
)
