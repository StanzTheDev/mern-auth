import {Row, Col } from 'react-bootstrap';
import '../register.css'

const FormContainer = ({ children }) => {
  return (
<div className='custom-container'>
  <Row className='justify-content-md-center mt-5'>
    <Col xs={12} md={6} className='card'>
      {children}
    </Col>
  </Row>
</div>

  
  );
};

export default FormContainer;
