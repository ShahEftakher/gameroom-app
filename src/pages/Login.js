import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { Button, Header } from "semantic-ui-react";
import Navbar from "../components/Navbar";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ minWidth: "25%", minHeight: "35%" }}
      >
        <div className="shadow p-3 mb-5 bg-body rounded ">
          <Header className="" size="large" textAlign="center">
            Login
          </Header>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" ref={emailRef} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="password" ref={passwordRef} />
            </Form.Field>
            <Button color="red" type="submit" className="w-100">
              Login
            </Button>
            <Button className="w-100 mt-3" basic color="red" onClick={()=>{
              history.push("/signup")
            }}>
              Don't have an account?
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
