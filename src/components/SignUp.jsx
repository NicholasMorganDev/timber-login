import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignUpForm from "./SignUpForm.jsx";

export default function SignUp () {

  return (
    <Container>
      <Row>
        <Col className="mx-4 p-4 rounded-3 login-container">
          <h1>Sign Up</h1>
          <SignUpForm/>
        </Col>
      </Row>
    </Container>
  )
}