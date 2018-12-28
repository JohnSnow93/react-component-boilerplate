import React,{ Fragment } from 'react';
import ReactDom from 'react-dom';
import Fancy from '../src/index'
import './index.less';

const Demo  = () => {
  return <div className="box">
    <Fancy></Fancy>
  </div>
}


ReactDom.render(<Demo></Demo>, document.getElementById('root'));
