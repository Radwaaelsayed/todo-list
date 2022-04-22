import React, { useState } from 'react'
import { v4 } from "uuid";
import { Button, Modal, Form } from 'react-bootstrap'
const AddColumn = ({ setState }) => {
    const [text, setText] = useState("")
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addColum = (event) => {
        event.preventDefault();
        if (!text) {
            setError(true)
        } else {
            setError(false)
            setState(prev => {
                return {
                    ...prev,
                    [text]: {
                        id: v4(),
                        title: text,
                        items: []

                    }
                }
            })

            setText("")
            handleClose()
        }

    }
    return (
        <React.Fragment>
            <Button className='d-flex align-items-center justify-content-center  w-100 border-0 text-dark' style={{ height: '35px', background: 'transparent' }} onClick={handleShow}>
                <span style={{ fontSize: '20px', marginInline: '5px' }}>+</span>
                Add Column
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Column</Modal.Title>
                </Modal.Header>
                <Form onSubmit={addColum}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" placeholder="Enter email" value={text} onChange={(e) => setText(e.target.value)} />
                            {error && <Form.Text className="text-muted">
                                This is a required field
                            </Form.Text>}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{ background: '#6A7AD7' }} type={'submit'} >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </React.Fragment >
    )
}

export default AddColumn