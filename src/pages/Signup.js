import React, { useRef, useState } from "react";
import { Button, Form, Select, Header, Message } from "semantic-ui-react";
import Navbar from "../components/Navbar";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const [role, setRole] = useState({});

  const handleSubmit = () => {
    console.log(role);
  };

  const handleSelect = (event, data) => {
    setRole(data.value);
  };

  const userRole = [
    { key: "student", value: "Student", text: "Student" },
    { key: "pro", value: "mentor", text: "Mentor" },
  ];

  return (
    <div>
      <Navbar />
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ minWidth: "25%" }}
      >
        <div className="shadow p-3 mb-5 bg-body rounded ">
          <Header className="" size="large" textAlign="center">
            Sign up
          </Header>
          {/* {error ? <Message color="red">{JSON.stringify(error)}</Message> : ""} */}
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" ref={emailRef} />
            </Form.Field>
            <Form.Field>
              <label>Name</label>
              <input type="text" placeholder="Name" ref={nameRef} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Password" ref={passwordRef} />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
            </Form.Field>
            <Form.Field>
              <label>Choose Role</label>
              <Select
                placeholder="Select Role"
                options={userRole}
                onChange={handleSelect}
              />
            </Form.Field>

            <Button color="red" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
