import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, Form } from "react-bootstrap";
import UsersModalComponent from "./UsersModal.js";
import ConfirmModal from '../../Components/Modals/ConfirmModal.js';
import { FaPencil, FaTrashCan, FaUserPlus } from "react-icons/fa6";
import api from '../../Services/api.js';
 
function Users() {

    const [UsersModal, shUsersModal] = useState(false);
    const [DeleteModal, shDeleteModal] = useState(false);

    const [EditUser, setEditUser] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('api/users/v1/').then(response => setData(response.data))
    }, []);
 
    return (
        <>
            <Container className='Custom_Container'>
                <Row>
                    <Col xs={12}>
                        <h1 className="Title_custom">Usuarios</h1>
                    </Col>
                    <Col xs={3}>
                        <Button className="btn_custom_client_novo" onClick={() => {
                            setEditUser({ title: 'Novo Usuario' });
                            shUsersModal(true);
                        }
                        }> <FaUserPlus />Novo</Button>
                    </Col>
                    <Col xs={9}>
                        <Form>
                            <InputGroup>
                                {/*<Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Filtro' />*/}
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className="table-custom">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Técnico</th>
                                    <th>CPF</th>
                                    <th>Cargo</th>
                                    <th>Eventos</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map((item) => (

                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.cpf}</td>
                                        <td>{item.office}</td>
                                        <td className='text-center'>

                                            <Button className="btn_custom_pen_edit" onClick={() => {
                                                setEditUser({
                                                    title: 'Editar ' + item.name,
                                                    id: item.id,
                                                    name: item.name,
                                                    cpf: item.cpf,
                                                    office: item.office,
                                                    edit: true
                                                });
                                                shUsersModal(true);
                                            }
                                            }>
                                                <FaPencil />
                                            </Button>

                                            <Button className="btn_custom_client" onClick={() => {
                                                setSelectedPerson({ title: 'Remover ' + item.name, message: 'Deseja realmente remover ' + item.name + '?', id: item.id, name: item.name, apiUrl: 'api/users/v1/' });
                                                shDeleteModal(true);
                                            }
                                            }>
                                                <FaTrashCan />
                                            </Button>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>

            <UsersModalComponent show={UsersModal} EditUser={EditUser} onHide={() => shUsersModal(false)} />
            <ConfirmModal show={DeleteModal} selectedPerson={selectedPerson} onHide={() => shDeleteModal(false)} />
        </>
    );
};

export default Users;
