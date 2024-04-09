
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Logo from '../../img/LogoWeb.jpg';
import './Custom.css';


function Login() {
  const navigate = useNavigate();
  
  async function login(e){
    try{  
      navigate("/Home");
    }
    catch (error){
      alert('falha no login')
    }
  }

  return (
    
  <Container className='custom_login_back'>
      {/* Container de exibição do Login */}
        <Row className="vh-100 d-flex align-items-center justify-content-center">

            <Col xs={6} className='form-Login'>

              {/* Coluna header */}
              <Row className="justify-content-center">
                <Col xs={12} sm={4} md={10} lg={10} className="text-center">
                    <img src={Logo} alt="logo"/>
                </Col>
              </Row>

              {/* Coluna body */}
              <Row className="justify-content-center">

                  <Col xs={12} sm={4} md={10} lg={10} >

                    {/* Form de envio de autenticação */}
                    <Form onSubmit={login}>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control className='custom_Input' type="Usuario" placeholder="Usuario" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" className='custom_Input' placeholder="Senha" />
                      </Form.Group>

                      {/* Botão de enviar */}
                      <div className="text-center">
                        <Button variant="primary" type="submit" className="Custom_btn">
                          Login
                        </Button>
                      </div>

                    </Form>
                  
                  </Col>  

              </Row>
            </Col>

          </Row>
      </Container>  
    
  );
}

export default Login;
