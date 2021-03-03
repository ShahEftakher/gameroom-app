import React, { useRef, useState } from "react";
import { Button, Form, Select, Header, Message } from "semantic-ui-react";
import { Avatar } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { auth, db, storage } from "../firebase";

const Editprofile = () => {
  const emailRef = useRef();
  const bioRef = useRef();
  const nameRef = useRef();
  const {
    setCurrentUser,
    currentUser,
    userInfo,
    setUserInfo,
  } = useUserContext();
  const history = useHistory();
  const [imageURL, setImageURL] = useState(null);
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    setImageURL(fileUrl);
  };

  const handleSubmit = () => {
    //////////////////use debouncer here
    if (!emailRef.current.value || !nameRef.current.value) {
      return;
    }
    //just log the rest is a mess
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        name: nameRef.current.value,
        email: emailRef.current.value,
        bio: bioRef.current.value,
        profileImage: imageURL,
      })
      .then(() => {
        //////////////////////////// point
        auth.currentUser
          .updateProfile({
            displayName: nameRef.current.value,
            photoURL: imageURL,
          })
          .then(() => {
            auth.currentUser.updateEmail(emailRef.current.value).then(() => {
              setCurrentUser(auth.currentUser);
              history.push("/profile");
            });
          })
          .catch((err) => {
            console.log(err);
          });
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
                src={currentUser.photoURL}
                alt=""
                style={{ height: "50%", width: "50%" }}
              ></Avatar>
            </Form.Field>
            <Form.Field>
              <input type="file" onChange={handleChange} />
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
              <input
                type="text"
                ref={bioRef}
                defaultValue={userInfo.bio}
              />{" "}
              {/** initially displaying, later on breaking*/}
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