import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignUpForm from "./SignUpForm.jsx";

export default function SignUp () {

  return (
    <Container>
      <Row>
        <Col>
          <SignUpForm/>
        </Col>
      </Row>
    </Container>
  )
}