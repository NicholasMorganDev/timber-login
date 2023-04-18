import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import { Button } from "react-bootstrap";


export default function Home () {
  const [isMember, setIsMember] = useState(false);

  return (
    <>
    {
      (isMember)
        ? <Login/>
        : <SignUp/>
    }

    <Button onClick={() => setIsMember(!isMember)}>Switch Form</Button>
    </>
  )
}
