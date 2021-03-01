import React, { useRef } from "react";
import { Button, Form, Select, Header, Message } from "semantic-ui-react";
import { Avatar } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";

const Editprofile = () => {
  const emailRef = useRef();
  const bioRef = useRef();
  const nameRef = useRef();
  const profilePic = useRef();
  const {
    currentUser,
    userInfo,
    setCurrentUser,
    setUserInfo,
  } = useUserContext();
  const history = useHistory();

  const handleSubmit = () => {
    console.log(userInfo);
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        name: nameRef.current.value,
        email: emailRef.current.value,
        bio: bioRef.current.value,
      })
      .then(() => {
        (async function () {
          let userInfo;
          db.collection("users")
            .doc(currentUser.uid)
            .get()
            .then((doc) => {
              userInfo = doc.data();
              console.log(userInfo);
              setUserInfo(userInfo);
              auth.currentUser
                .updateProfile({
                  displayName: nameRef.current.value,
                  email: emailRef.current.value,
                })
                .then((userCreds) => {
                  setCurrentUser(userCreds.user);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((error) => {
              alert(error);
            });
        })();
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="position-absolute top-50 start-50 translate-middle border w-25">
        <div className="border max-vw-100 p-3 h-50">
          <Header className="mb-4" textAlign="center">
            Edit Profile
          </Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field className="d-flex justify-content-center">
              <Avatar
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                alt=""
                style={{ height: "50%", width: "50%" }}
              ></Avatar>
            </Form.Field>
            <Form.Field>
              <input type="file" ref={profilePic}></input>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                defaultValue={currentUser.email}
              />
            </Form.Field>
            <Form.Field>
              <label>Name</label>
              <input
                type="text"
                ref={nameRef}
                defaultValue={currentUser.displayName}
              />
            </Form.Field>
            <Form.Field>
              <label>Bio</label>
              <input type="text" ref={bioRef} defaultValue={userInfo.bio} />
            </Form.Field>
            <Button color="red" type="submit" className="w-100">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
