import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Footer from './component/Footer'
import App from './App';
import './index.css'
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

    <Header/>
    <h1>How are you</h1>
    <p style={{color:'blue'}}>This is index.js</p>
    <Footer/>
    </>
)