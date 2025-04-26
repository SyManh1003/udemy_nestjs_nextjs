'use client'

import { Layout } from 'antd';


const AdminFooter = () => {
    const {  Footer } = Layout;
    
    return (
        <>
        <Footer style={{ textAlign: 'center' }}>
            ClarkBen2412 ©{new Date().getFullYear()} Created by @Clark
          </Footer>
        </>
    )
}

export default AdminFooter;