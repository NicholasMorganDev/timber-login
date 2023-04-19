import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export default function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  
const handleLogin = async (e) => {
  e.preventDefault()
  const response = await signInWithEmailAndPassword(auth, email, password)
    .catch(err => alert(err));
  setUser(response.user);
}

if(user) {
  return <h2>Welcome User {user.uid}</h2>
}

  return (
    <>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control 
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        <Form.Text>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Button 
        variant='success'
        type="submit"
        size="lg">Login</Button>
      </Form.Group>
    </Form>
    </>
  )
}