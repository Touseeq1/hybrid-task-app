import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [information, setInformation] = useState("");
    const [due_date, setDue_date] = useState("");
    const complete_information = useSelector((state) => state)
    const dispatch = useDispatch();
    const { id } = useParams();
    const current_info = complete_information.find((cont) => cont.id === parseInt(id));
    useEffect(() => {
        if (current_info) {
            setTask(current_info.task)
            setDescription(current_info.description)
            setInformation(current_info.information)
            setDue_date(current_info.due_date)
        }
    }, [current_info])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || !description || !information || !due_date) {
            console.log("Pleae fill out all fields")

        } else {
            const data = {
                id: parseInt(id), task, description, information, due_date
            }
            dispatch({ type: "UPDATE", payload: data })
            setTimeout(() => { navigate("/") }, 2000);
        }

    }
    return (
        <div>
            <Row className='mt-5 mx-auto d-flex justify-content-lg-center'>
                <Col col={12} sm={12} lg={6} xl={6} xxl={6} className='border p-4'>
                    <Form onSubmit={handleSubmit}>
                        <Col><h1>Update Task</h1></Col>
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
                        <Button onClick={handleSubmit}>Update</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Edit