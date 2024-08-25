import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer } = AntLayout;

function Layout() {
    return (
        <AntLayout style={{ minHeight: '100vh' }}> {/* Ensure the layout takes full height */}>
            <Navbar />
            <Content style={{ padding: '0 50px', marginTop: '16px', flexGrow: 1 }}>
                <div style={{ padding: 24, minHeight: '80vh' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </AntLayout>
    );
}

export default Layout;
