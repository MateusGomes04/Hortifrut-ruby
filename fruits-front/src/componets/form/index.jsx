import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';



export default function Form() {
    return(
        <div className="tbody-form">
        <h1 className="h1-form">Ofertas da Semana</h1>
        <div>
        <Link to="/produtos" className="link-produtos">CONFIRA</Link>
        </div>
        </div> 
    
    )
}

