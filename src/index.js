import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'


const Page = ()=>{
  return <>
    <App/>
  </>
}
ReactDOM.render(<Page/>,document.getElementById('root'))
