import React from 'react';
import PropTypes from "prop-types";
import { Container,Col,Row ,Form, Button} from 'react-bootstrap'
//import { propTypes } from 'react-bootstrap/esm/Image';
export const LoginForm = ({handleOnChange,formSwitcher,handleOnSubmit,email,pass}) => {
  return (
  <Container>
    <Row>
        <Col>

        <h1 className='text-info text-center'>Client login </h1>
        <hr/>
<Form autoComplete='off' onSubmit={handleOnSubmit}>
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
     <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        name="password"
        value={pass}
        onChange={handleOnChange}
        placeholder="enter password"
    
        />
    </Form.Group>
<Button type="submit">
    Login
</Button>
</Form>
<hr/>
        
        </Col>
    </Row>
    <Row>
        <Col>
        <a href="#!"onClick={()=>formSwitcher("reset")}>Forgot password</a>
        </Col>

    </Row>
  </Container>
  )
};
LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,

    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired,
}
