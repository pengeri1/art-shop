import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import './Navbar.css';
import logo from './Images/logo.png';

const { Header } = Layout;

function Navbar() {
    return (
        <Header className="navbar-header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </div>
            <Menu className="navbar-menu" mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/">Paintings</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navbar;
