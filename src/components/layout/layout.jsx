import React from 'react'
import { Stack } from 'react-bootstrap'
import Header from './header'
import SideNavbar from './sideNavbar'

const Layout = ({ children }) => {
    return (
        <Stack gap={3} >
            <SideNavbar />
            <Header />
            <div style={{ width: '88%', marginLeft: '12%', marginTop: '100px', background: '#ECEFF8', padding: '5px', overflowX: 'scroll' }}>
                {children}
            </div>
        </Stack>
    )
}

export default Layout