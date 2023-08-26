import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [information, setInformation] = useState("");
    const [due_date, setDue_date] = useState("");
    const complete_information = useSelector((state) => state)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task || !description || !information || !due_date) {
            console.log("Pleae fill out all fields")

        } else {
            const data = {
                id: complete_information[complete_information.length - 1].id + 1,
                task, description, information, due_date
            }
            dispatch({ type: "ADD", payload: data })
            setTask("")
            setDescription("")
            setInformation("")
            setDue_date("")
        }
    }
    const Delete = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }
    const [completeTask, setCompleteTask] = useState([{ name: "" }])
    const handleClick = () => {
        setCompleteTask([...completeTask, { name: "complete" }])
    }
    return (
        <div>
            <div className='container'>
                {completeTask.map(() => {
                    return (
                        <Row className='mt-5 mx-auto'>
                            <Col col={12} sm={12} lg={6} xl={6} xxl={6} className='border p-4'>
                                <Form id="form" onSubmit={handleSubmit}>
                                    <Col><h1>Add Task</h1></Col>
                                    <Form.Group className="mb-3" controlId="Enter your task">
                                        <Form.Label>Task field</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Enter description">
                                        <Form.Label>Descriptiion area field</Form.Label>
                                        <Form.Control as="textarea" placeholder='Enter description' rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Enter additional infromation">
                                        <Form.Label>Additional information</Form.Label>
                                        <Form.Control type="text" placeholder="Enter additional information" value={information} onChange={(e) => setInformation(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId="duedate">
                                        <Form.Label>Select due data</Form.Label>
                                        <Form.Control type="date" name="duedate" placeholder="Due date" value={due_date} onChange={(e) => setDue_date(e.target.value)} />
                                    </Form.Group>
                                    <Button className='btn-success' onClick={handleSubmit}>Add Task</Button>
                                </Form>
                            </Col>
                            <Col col={12} sm={12} lg={6} xl={6} xxl={6} className='border p-4' style={{ overflowX: "scroll" }}>
                                <Col><h1>Task List</h1></Col>
                                <Table class='table table-borderless' >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Task</th>
                                            <th>Description</th>
                                            <th>Informatio</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {complete_information.map((val, id) => (
                                            <tr key={id}>
                                                <td>{id + 1}</td>
                                                <td>{val.task}</td>
                                                <td>{val.description}</td>
                                                <td>{val.information}</td>
                                                <td>{val.due_date}</td>
                                                <td className='d-flex action-cell p-0 mt-2 border-0'> <Link to={`/edit/${val.id}`} className="btn m-1 btn-small btn-primary"><FontAwesomeIcon icon={faPenToSquare} /> </Link>
                                                    <button type='button' className='btn btn-small btn-danger m-1 ' onClick={() => Delete(val.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                            </tr>))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col className='m-3'><Button onClick={handleClick}>Click to Separate Task</Button></Col>
                        </Row>
                    )
                })}
            </div>
        </div >
    )
}

export default Home