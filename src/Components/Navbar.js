import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import './Navbar.css';

const { Header } = Layout;

function Navbar() {
    return (
        <Header className="navbar-header">
            <Menu className="navbar-menu" mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
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
