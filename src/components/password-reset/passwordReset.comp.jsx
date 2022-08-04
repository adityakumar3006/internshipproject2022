import React from 'react';
import PropTypes from "prop-types";
import { Container,Col,Row ,Form, Button} from 'react-bootstrap'
//import { propTypes } from 'react-bootstrap/esm/Image';
export const ResetPassword = ({handleOnChange,formSwitcher,handleOnResetSubmit,email}) => {
  return (
  <Container>
    <Row>
        <Col>

        <h1 className='text-info text-center'>Reset password </h1>
        <hr/>
<Form autoComplete='off' 
onSubmit={handleOnResetSubmit}>
    <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
        type="email"
        name="email"
        value={email}
        onChange={handleOnChange}
        placeholder="enter email "
        
        />
    </Form.Group>

<Button type="submit">
   Reset password
</Button>
</Form>
<hr/>
        
        </Col>
    </Row>
    <Row>
        <Col>
        <a href="#!" onClick={()=>{formSwitcher("login")}}>Login now</a>
        </Col>

    </Row>
  </Container>
  )
};
ResetPassword.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
       email:PropTypes.string.isRequired
}
