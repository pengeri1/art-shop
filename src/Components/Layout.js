import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer } = AntLayout;

function Layout() {
    return (
        <AntLayout style={{ minHeight: '100vh', backgroundColor: '#CBD5C0' }}>
            <Navbar />
            <Content style={{ padding: '0 5%', marginTop: '90px', flexGrow: 1 }}>
                <div style={{ padding: '24px 0', minHeight: '80vh' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 80px', backgroundColor: '#ffffff' }}>
                <div style={{ color: '#013220', fontSize: '18px', fontWeight: 'bold' }}>
                    {"\u00A9"} 2024 Eric Peng.
                </div>
                <div>
                    <a href="https://www.instagram.com/_ericpeng/" target="_blank" rel="noopener noreferrer" style={{ color: '#013220', fontSize: '18px', fontWeight: 'bold', margin: '0 3px' }}>
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/pengeric/" target="_blank" rel="noopener noreferrer" style={{ color: '#013220', fontSize: '18px', fontWeight: 'bold', margin: '0 3px' }}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/pengeri1" target="_blank" rel="noopener noreferrer" style={{ color: '#013220', fontSize: '18px', fontWeight: 'bold', margin: '0 3px' }}>
                        GitHub
                    </a>
                </div>
            </Footer>
        </AntLayout>
    );
}

export default Layout;
