import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD51mOy12SQWO2V5W6Qrt7o3vmZp4DtQXo",
  authDomain: "timber-login-nm.firebaseapp.com",
  projectId: "timber-login-nm",
  storageBucket: "timber-login-nm.appspot.com",
  messagingSenderId: "486368477202",
  appId: "1:486368477202:web:5137a8d58292d34fcd18cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUpForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleForm = e => {
    const newValue = e.target.value.trim()
    console.log(newValue)
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter Your First Name"
          onChange={handleForm}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter Your Last Name"
          onChange={handleForm}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={handleForm} />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handleForm} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant='success'
            type="submit"
            size="lg">Sign Up</Button>
        </Form.Group>
      </Form>
    </>
  )
}