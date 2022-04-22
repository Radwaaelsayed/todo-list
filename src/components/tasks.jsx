import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import { Card, Image } from 'react-bootstrap';

const Tasks = ({ el, index }) => {
    return (
        <Draggable key={el.id} index={index} draggableId={el.id}>
            {(provided, snapshot) => {
                return (

                    <Card style={{ width: '12rem', height: '200px' }}
                        className={`item ${snapshot.isDragging && "dragging"} text-dark`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {el?.image && <Card.Img variant="top" src={el.image} />}
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>
                                {el.description}
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-between '>
                            <Card.Text className='w-75'>
                                {el?.date?.toISOString()?.split('T')[0]}
                            </Card.Text>
                            {
                                el?.users?.map(() => {
                                    return <Image src='https://bit.ly/dan-abramov' width='20px' height='20px' className="rounded-circle" />
                                })
                            }
                        </Card.Footer>
                    </Card>

                )
            }}
        </Draggable>
    )
}

export default Tasks