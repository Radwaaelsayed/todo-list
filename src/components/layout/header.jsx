import React from 'react'
import { Stack, InputGroup, Button, FormControl, Image } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <Stack direction="horizontal" gap={3} className='position-fixed align-items-center justify-content-between bg-white ' style={{ left: '12%', width: '88%', height: '100px' }}>
            <InputGroup className="w-25">
                <Button id="button-addon1" style={{ background: 'transparent', border: 'none' }}>
                    <Search color="#D0D3D8" size={20} />
                </Button>
                <FormControl

                    placeholder='Search...'
                    style={{ background: 'transparent', border: 'none', borderColor: '#D0D3D8', outline: 'none', marginLeft: '-15px' }}
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <div className="d-flex w-25 justify-content-center align-items-center ">
                <div className='mx-3'>
                    <p style={{ margin: '0', color: '#6A7AD7' }} className='fs-4'>user name</p>
                    <p style={{ margin: '0', color: '#DBDFEB' }} className='text-end'>user email</p>
                </div>
                <Image src='https://bit.ly/dan-abramov' width={'50px'} height='50px' className="rounded-circle" />


            </div>
        </Stack>
    )
}

export default Header