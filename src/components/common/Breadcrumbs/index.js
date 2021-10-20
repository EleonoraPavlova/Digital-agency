import './index.scss';
import React from 'react';
import { NavLink } from "react-router-dom";


export default function Breadcrumbs(props) {

    return (
        <nav className="breadcrumbs__wrapper">
            <div className="breadcrumbs">
                <NavLink to="/" className="breadcrumbs__item"> Home </NavLink>
                <span className="breadcrumbs__end">{props.activeRoute.name}</span>
            </div >
        </nav >
    );
}