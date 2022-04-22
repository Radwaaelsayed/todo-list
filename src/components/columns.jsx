import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import '../App.css';
import Tasks from './tasks';
import AddTask from './addTask';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import AddColumn from './addColumn';
const item = {
    id: v4(),
    title: "Clean the house",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum pariatur, vitae atque aspernatur cumque omnis sequi',
    image: 'https://bit.ly/dan-abramov',
    date: new Date()
}

const item2 = {
    id: v4(),
    title: "Wash the car",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum pariatur, vitae atque aspernatur cumque omnis sequi',
    image: '',
    date: new Date()
}
const Columns = () => {
    const [state, setState] = useState({
        "todo": {
            id: v4(),
            title: "Todo",
            items: [item, item2]
        },


    })
    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }

        // Creating a copy of item before removing it from state
        const itemCopy = { ...state[source.droppableId].items[source.index] }

        setState(prev => {
            prev = { ...prev }
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)


            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }

    return (
        <Container>
            <Stack direction="horizontal" className='my-2' gap={3}>
                <p className='fs-3'>POMAC Front End Task</p>
                <div className=" ms-auto"><AddTask setState={setState} /></div>
            </Stack>

            <Row style={{ alignItems: 'flex-start' }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    {_.map(state, (data, key) => {
                        return (
                            <Col md={3} xs={12} key={data?.id}>

                                <Droppable droppableId={key}>
                                    {(provided, snapshot) => {
                                        return (
                                            <Col

                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={"droppable-col"}
                                            >
                                                <h3 style={{ color: '#6A7AD7' }}>{data.title}</h3>
                                                {data.items.map((el, index) => {
                                                    return (


                                                        <Tasks el={el} index={index} />


                                                    )
                                                })}
                                                {provided.placeholder}
                                            </Col>
                                        )
                                    }}
                                </Droppable>

                            </Col>

                        )
                    })}
                </DragDropContext>
                <Col md={2} xs={2} style={{ background: '#D0D5F2' }}>
                    <AddColumn setState={setState} state={state} />
                </Col>
            </Row>
        </Container>



    )
}

export default Columns