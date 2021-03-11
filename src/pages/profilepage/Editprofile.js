import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Header, Message } from 'semantic-ui-react';
import { Avatar } from '@material-ui/core';
import Navbar from '../../components/common/Navbar';
import { useUserContext } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { auth, db, storage } from '../../firebase';
import { toast } from 'react-toastify';

const Editprofile = () => {
  const emailRef = useRef();
  const bioRef = useRef();
  const nameRef = useRef();
  const { setCurrentUser, currentUser } = useUserContext();
  const [loading, setLoading] = useState({});
  const [disabled, setDisable] = useState({});
  const history = useHistory();
  const [imageURL, setImageURL] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [userError, setUserError] = useState('');

  //handle file upload
  const handleChange = async (e) => {
    setDisable({ disabled: 'disabled' });
    setLoading({ loading: 'loading' });
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    setImageURL(fileUrl);
    setLoading({});
    setDisable({});
  };

  const profileUpdateToast = () => {
    toast.error('Profile updated!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const getUserInfo = () => {
    db.collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setUserInfo(data);
      });
  };

  const handleSubmit = () => {
    if (!emailRef.current.value || !nameRef.current.value) {
      setUserError('Email and Name cannot be empty');
      return;
    }

    db.collection('users')
      .doc(currentUser.uid)
      .update({
        name: nameRef.current.value,
        email: emailRef.current.value,
        bio: bioRef.current.value,
        profileImage: imageURL,
      })
      .then(() => {
        auth.currentUser
          .updateProfile({
            displayName: nameRef.current.value,
            photoURL: imageURL,
          })
          .then(() => {
            auth.currentUser.updateEmail(emailRef.current.value).then(() => {
              setCurrentUser(auth.currentUser);
              profileUpdateToast();
              history.push('/profile/' + currentUser.uid);
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

  useEffect(() => {
    setImageURL(currentUser.photoURL);
    getUserInfo();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center mt-2">
        <div className="w-25 border mt-4 shadow-sm p-3 mb-5 bg-white rounded">
          <div className="max-vw-100 p-3 h-50">
            <Header className="mb-4" textAlign="center">
              Edit Profile
            </Header>
            {userError ? (
              <Message color="red">{JSON.stringify(userError)}</Message>
            ) : (
              ''
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Field className="d-flex justify-content-center">
                <Avatar
                  src={imageURL}
                  alt=""
                  style={{ height: '250px', width: '250px' }}
                ></Avatar>
              </Form.Field>
              <Form.Field>
                <input type="file" onChange={handleChange} accept="image/*" />
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
                />{' '}
                {/** initially displaying, later on breaking*/}
              </Form.Field>
              <Form.Field>
                <Link
                  style={{ color: 'red', textDecoration: 'underline' }}
                  to="/reset-password"
                >
                  <span className="d-flex justify-content-end">
                    Update Password
                  </span>
                </Link>
              </Form.Field>
              <Button
                color="red"
                type="submit"
                className="w-100"
                {...loading}
                {...disabled}
              >
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
