import { Container, Row, Col, Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import api from '../../Services/api.js';


function AddReaderModal(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
 
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('api/readerssettings/v1/').then(response => setData(response.data))
    }, []);
 
    return (

        <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter" >
            {/* Modals Header */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar Leitora
                </Modal.Title>
            </Modal.Header>

            {/* Modals Body conteudo */}
            <Modal.Body className="grid-example">
                <Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-4">
                            <Col md="3">
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Brinquedos</Form.Label>
                                    <Form.Select required>
                                        <option value="">Selecione um Brinquedo</option>
                                        {data.map((readerssettings, index) => (
                                            <option key={index} value={readerssettings.toyId}>{readerssettings.toy.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md="3" className="d-flex align-items-center justify-content-center">
                                <Form.Group>
                                    <Form.Label>Código da Leitora</Form.Label>
                                    <Form.Control required type="number" placeholder="Digite o código"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md="3" className="d-flex align-items-center justify-content-center">
                                <Form.Group>
                                    <Form.Label>Display</Form.Label>
                                    <Form.Control required type="text" maxlength="16" placeholder="Digite o que aparecerá"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md="3" className="d-flex align-items-center justify-content-center">
                                <Form.Group>
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control required type="number" step="0.01" placeholder="Digite o preço"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md="3">
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label></Form.Label>

                                </Form.Group>
                            </Col>
                            <Col md="3" className="d-flex align-items-center justify-content-center">
                                <Form.Group>
                                    <Form.Label>Preço Vip</Form.Label>
                                    <Form.Control required type="number" step="0.01" placeholder="Digite o preço vip"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md="3" className="d-flex align-items-center justify-content-center">
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select required>
                                        <option value="">Selecione o Status</option>
                                        <option value="A">A</option>
                                        <option value="I">I</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>

                        <Button type="submit">Submit form</Button>

                    </Form>
                </Container>
            </Modal.Body >

            {/* Modals Footer*/}
            < Modal.Footer >
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer >
        </Modal >

    );
}

export default AddReaderModal;
