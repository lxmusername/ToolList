import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToolList from './toolList.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToolList />, document.getElementById('root'));
registerServiceWorker();
