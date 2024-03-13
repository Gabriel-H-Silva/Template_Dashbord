import { Container, Row, Col, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import AddReaderModalComponent from "../../Components/Modals/AddReaderModal";
import AddToyModalComponent from "../../Components/Modals/AddToyModal";
import api from "../../Services/api";

// Component Home

function Reports() {
 
  const [AddReaderModal, setAddReaderModal] = useState(false);
  const [AddToyModal, setAddToyModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('api/readerssettings/v1/').then(response => setData(response.data))
  }, []);
 
  return (
    <>
      <Container className='Custom_Container'>
        {/* Container de exibição da Relatorio */}
        <Row>
          <Col xs={12}>
            <h1 className="Title_custom">Relatório de Equipamentos</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ alignItems: 'center' }}>
            <Button className="btn_primary" style={{ marginTop: '60px' }} onClick={() => { setAddReaderModal(true) }}>
              <BsFillFileEarmarkFontFill /> Adicionar Leitora </Button>

            <Button className="btn_primary" style={{ marginTop: '60px' }} onClick={() => {
              setAddToyModal(true)
            }
            }><BsFillFileEarmarkFontFill /> Adicionar Brinquedo </Button>
          </Col>
          <Col xs={10}>
            <Table striped bordered hover className="table-custom">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Display</th>
                  <th>Preço Normal</th>
                  <th>Preço Vip</th>
                  <th>Status</th>
                  <th>Código do Brinquedo</th>
                  <th>Nome do Brinquedo</th>
                </tr>
              </thead>
              <tbody>

                {data.map((item) => (

                  <tr key={item.id}>
                    <td>{item.code}</td>
                    <td>{item.display}</td>
                    <td>{item.price}</td>
                    <td>{item.price_vip}</td>
                    <td>{item.status}</td>
                    <td>{item.toy.code}</td>
                    <td>{item.toy.name}</td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </Col>

        </Row>
      </Container>

      <AddReaderModalComponent show={AddReaderModal} onHide={() => setAddReaderModal(false)} />
      <AddToyModalComponent show={AddToyModal} onHide={() => setAddToyModal(false)} />
    </>
  );

}

export default Reports;
