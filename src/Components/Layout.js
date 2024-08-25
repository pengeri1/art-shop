import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer } = AntLayout;

function Layout() {
    return (
        <AntLayout style={{ minHeight: '100vh', backgroundColor: '#CBD5C0' }}>
            <Navbar />
            <Content style={{ padding: '0 50px', marginTop: '90px', flexGrow: 1 }}>
                <div style={{ padding: 24, minHeight: '80vh' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design �{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </AntLayout>
    );
}

export default Layout;
