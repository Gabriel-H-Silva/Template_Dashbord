import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import api from "../../Services/api";
import { IMaskInput } from "react-imask";

function ContentTemplateModal(props) {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {

  const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      save();
    }
    setValidated(true);
  };



  const GetOfficeSelectChange = (e) => {
    setOffice(e.target.value);
  };


  const [isEditing, SetIsEditing] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [name, setUserName] = useState('');
  const [office, setOffice] = useState('');
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (props.EditUser) {
      setId(props.EditUser.id ? props.EditUser.id : null);
      setTitle(props.EditUser.title)
      setUserName(props.EditUser.name ? props.EditUser.name : '');
      setOffice(props.EditUser.office ? props.EditUser.office : '');
      setCPF(props.EditUser.cpf ? props.EditUser.cpf : '');
      SetIsEditing(props.EditUser.edit ? true : false);
    }
 }, [props.EditUser]);

  async function save() {
    
    const data = {
      name,
      office,
      cpf,
      password
    }
    const dataEdit = {
      id,
      name,
      office,
      cpf,
      password
    }

    try {
      let response;
      if (id != null) {
        response = await api.put(`api/users/v1/`, dataEdit);
      } else {
        response = await api.post('api/users/v1/', data);
      }

      const { status, message } = response.data;

      alert(message);
    }
    catch (error) {
      alert('Falha para enviar a api');
    }
  }

  return (
    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter" >
      {/* Modals Header */}
      <Modal.Header className="modal_header" closeButton>
        <Modal.Title className="Title_custom_footer" id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>

      {/* Modals Body conteudo */}
      <Modal.Body className="grid-example">
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationName">
                <Form.Label style={{ fontWeight: 'bold' }}>Usuario</Form.Label>
                <Form.Control className="modal_border"
                  required
                  type="text"
                  placeholder="Usuario"
                  value={name}
                  onChange={e => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCargo">
                <Form.Label style={{ fontWeight: 'bold' }}>Cargo</Form.Label>
                <Form.Select className="modal_border" required onChange={GetOfficeSelectChange} value={office}>
                  <option>(selecione um cargo)</option>
                  <option value="Administração">Administração</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Intermediario">Intermediario</option>
                  <option value="Tecnico">Tecnico</option>
                  <option value="Funcionario">Funcionario</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} md="4" controlId="validationName">
                <Form.Label style={{ fontWeight: 'bold' }}>CPF</Form.Label>
                <Form.Control className="modal_border"
                  required
                  as={IMaskInput}
                  mask="000.000.000-00"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={e => setCPF(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationName">
                <Form.Label style={{ fontWeight: 'bold' }}>Senha</Form.Label>
                <Form.Control className="modal_border"
                  required={!isEditing}
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                
              </Form.Group>
              {!isEditing && (
                <Form.Group as={Col} md="4" controlId="validationName">
                  <Form.Label style={{ fontWeight: 'bold' }}>Confirma Senha</Form.Label>

                  <Form.Control className="modal_border"
                    required
                    type="password"
                    placeholder="Confirma Senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    isInvalid={password !== confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      As senhas não correspondem!
                    </Form.Control.Feedback>

                </Form.Group>
              )}
            </Row>

            <Row>
              <Col className="Footer_modal">
                <Button className="btn_modal_salvar" type="submit">Salvar</Button>
                <Button className="btn_modal_close" onClick={props.onHide}>Close</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>



  );
}

export default ContentTemplateModal;
