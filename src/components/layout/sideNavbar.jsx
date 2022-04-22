import React from 'react'
import { Stack, Nav } from 'react-bootstrap'
import { Box, Calendar4, Kanban } from 'react-bootstrap-icons'

const SideNavbar = () => {
    const mainActivestyle = {
        background: '#6A7AD7',
        width: '100%',
        color: '#6A7AD7',
        padding: '0'
    }
    const subActiveStyle = {
        background: '#DEE6F9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%'
    }
    return (
        <Stack className='position-fixed  bg-white ' style={{ width: '12%' }}>
            <div className='d-flex text-light  align-items-center justify-content-center fs-3' style={{
                background: '#6A7AD7', alignSelf: 'flex-start', width: ' 100%',
                height: '100px'
            }}>
                POMAC
            </div>
            <Nav defaultActiveKey="/home" className="flex-column align-items-center " >
                <Nav.Link href="/home" active={true} style={window.location.pathname == '/home' || window.location.pathname == '/' ? mainActivestyle : ''}>
                    <div style={
                        window.location.pathname == '/home' || window.location.pathname == '/' ?
                            subActiveStyle : ''
                    }>
                        < Kanban size={30} className='m-3' />
                    </div>
                </Nav.Link>
                <Nav.Link eventKey="link-1" >
                    <Box size={30} color='#C5C8CD' className='m-3' />
                </Nav.Link>
                <Nav.Link eventKey="link-2" >  <Calendar4 size={30} color='#C5C8CD' className='m-3' /></Nav.Link>
            </Nav>
        </Stack >
    )
}

export default SideNavbar