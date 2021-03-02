import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Select, Header, Message } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";
import { db } from "../firebase";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const [role, setRole] = useState({});
  const history = useHistory();
  const [error, setError] = useState("");
  const { signup, setUserInfo, setIsLoggedIn, login } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Password does not match!");
      return;
    }
    if (role !== "mentor" && role !== "student") {
      setError("Please select a role");
      return;
    }
    if (
      emailRef.current.value &&
      passwordRef.current.value &&
      confirmPasswordRef.current.value &&
      nameRef.current.value
    ) {
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        role
      )
        .then((userCreds) => {
          console.log(userCreds.user);
          userCreds.user.updateProfile({ displayName: nameRef.current.value });
          db.collection("users")
            .doc(userCreds.user.uid)
            .set({
              uid: userCreds.user.uid,
              name: nameRef.current.value,
              email: emailRef.current.value,
              role: role,
              bio: "",
            })
            .then(() => {
              ////////////////////////////////////////////
            })
            .catch((err) => {
              console.log(err);
            });
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Fields cannot be empty");
    }
  };

  const handleSelect = (event, data) => {
    setRole(data.value);
  };

  const userRole = [
    { key: "student", value: "student", text: "Student" },
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
          {error ? <Message color="red">{JSON.stringify(error)}</Message> : ""}
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
              Signup
            </Button>
            <Button
              className="w-100 mt-3"
              basic
              color="red"
              onClick={() => {
                history.push("/login");
              }}
            >
              Already have an account?
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
