import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 组件 导入
import ToolList from './toolList.js';
//组件暂时无用
// import registerServiceWorker from './registerServiceWorker';


// 组件使用render函数渲染
ReactDOM.render(
    //jsx 语法
    <ToolList />,
    document.getElementById('root')
);
// registerServiceWorker();
