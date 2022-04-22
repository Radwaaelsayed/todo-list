import React, { useState } from 'react'
import { v4 } from "uuid";
import { Button, Modal, Form } from 'react-bootstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatePicker from 'react-date-picker';
const AddTask = ({ setState }) => {
    const [taskData, setTaskData] = useState({
        id: v4(),
        image: '',
        date: new Date(),
        description: '',
        users: []
    })
    const [errors, setErrors] = useState({ title: false, description: false })
    const [show, setShow] = useState(false);
    const animatedComponents = makeAnimated();
    const options = [{
        label: 'Ahmed', value: 'ahmed'
    },
    {
        label: 'Mohammed', value: 'mohamed'
    }]
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addItem = (event) => {
        event.preventDefault();
        if (!taskData.description) {
            setErrors({ title: false, description: true })
        } else if (!taskData.title) {
            setErrors({ description: false, title: true })
        }
        else if (!taskData.title && !taskData.description) {
            setErrors({ description: true, title: true })
        }
        else {
            setErrors({ title: false, description: false })
            setState(prev => {
                return {
                    ...prev,
                    todo: {
                        title: "Todo",
                        items: [
                            taskData,
                            ...prev.todo.items
                        ]
                    }
                }
            })
            setTaskData({})
            handleClose()
        }
    }
    console.log(taskData)
    return (
        <React.Fragment>
            <Button className='d-flex align-items-center justify-content-center  w-100 border-0 text-light' style={{ height: '35px', background: '#6A7AD7' }} onClick={handleShow}>
                <span style={{ fontSize: '20px', marginInline: '5px' }}>+</span>
                Add Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Form onSubmit={addItem}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={taskData?.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} style={{ borderColor: errors.title ? 'red' : '#80808082' }} />
                            {errors?.title && <Form.Text className="text-muted">
                                This is a required field
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => setTaskData({ ...taskData, description: e.target.value })} style={{ borderColor: errors.description ? 'red' : '#80808082' }} />
                            {errors?.description && <Form.Text className="text-muted">
                                This is a required field
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select user</Form.Label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                                onChange={(option) => setTaskData({ ...taskData, users: option })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Date</Form.Label>
                            <div className='w-100'>
                                <DatePicker onChange={(e) => setTaskData({ ...taskData, date: e })} value={taskData?.date} />

                            </div>
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

export default AddTask