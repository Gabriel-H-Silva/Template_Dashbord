import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
// Component Home

function Home() {
  
   return(
    <Container className='Custom_Container'>
      {/* Container de exibição da Home */}
      <Row>
        <Col xs={12}>
            <h1 className="Title_custom">Home - ClienteNome</h1>
        </Col>
      </Row>
    </Container>
  )
  
}

export default Home;
