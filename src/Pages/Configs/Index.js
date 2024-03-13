import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import api from '../../Services/api';
import axios from "axios";
// Component Home

function Configs() {  
  
  const [urlIP, setIP] = useState('');
  const [urlPort, setPort] = useState('');
  const [Protocol, setProtocol] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    api.get('api/config/v1/')
      .then(response => {
        if (response.data.length > 0) {
          setMessage('Conectado com sucesso!');
        } else {
          setMessage('Falha na comunicação.');
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        setMessage('Falha na comunicação.');
      });
  }, []);

  function check(){        
      // Define um timer para disparar um erro após  5 segundos
      const timer = setTimeout(() => {
        setMessage('Falha na comunicação.');
      }, 5000);
        axios.get(Protocol + '://' + urlIP + ':' + urlPort + '/api/config/v1/')
        .then(response => {

          // Se a requisição for bem-sucedida, limpa o timer
          clearTimeout(timer);
          if (response.data.length >  0) {
            setMessage('Conectado com sucesso!');
          } else {
            setMessage('Falha na comunicação.');
          }
        })
        .catch(error => {
          clearTimeout(timer);
          console.error('Erro na requisição:', error);
          setMessage('Falha na comunicação.');
        });
  }

  return(
    <Container className='Custom_Container'>
      {/* Container de exibição da Config */}
      <Row>
        <Col xs={12}>
            <h2 className="Title_custom">Configurações de Comunicação</h2>
        </Col>
      </Row>
      <Row className="MarginRow_custom">
        <Col xs={6}>
            <h3>Testar Comunicação</h3>
            <Row className="mb-3">
              <Col xs={2}>
                <Form.Select aria-label="Default select example" className="full-height" onChange={e => setProtocol(e.target.value)}>
                  <option>Protocolo</option>
                  <option value="http">http</option>
                  <option value="https">https</option>
                </Form.Select>
              </Col>
              <Col xs={6}>
                <Form.Control placeholder="Endereço IP" value={urlIP} className="custom_Input full-height" onChange={e => setIP(e.target.value)}/>
              </Col>  
              <Col xs={3}>
                <Form.Control placeholder="Porta" value={urlPort} className="custom_Input full-height" onChange={e => setPort(e.target.value)}/>
              </Col>
              <Col xs={1}>
                <Button variant="outline-secondary" id="button-addon2" onClick={check}>
                  Testar
                </Button>
              </Col>
            </Row>

            
              
              
            
        </Col>
        <Col xs={6}>
            <h3>Status</h3>
            
            <span>{message}</span>
        </Col>
        <Col xs={12}>
          <Button variant="outline-secondary" id="button-addon2">
            Salvar
          </Button>
        </Col>
      </Row>
    </Container>
  )

}

export default Configs;
