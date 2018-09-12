import React from 'react';
import ReactDOM from 'react-dom';
import ToolList from './toolList.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
