import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, Dropdown, Header } from 'semantic-ui-react';

const Navbar = () => {
  const {
    setUserInfo,
    logout,
    setIsLoggedIn,
    currentUser,
    userInfo,
  } = useUserContext();

  const history = useHistory();
  if (currentUser) {
    var trigger = (
      <span>
        <AccountCircleIcon fontSize="large" /> Hello, {currentUser.displayName}
      </span>
    );

    var options = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>{currentUser.displayName}</strong>
          </span>
        ),
        disabled: true,
      },
      <div className="p-2">
        <Button
          className="w-100 mb-1 me-1"
          onClick={() => {
            history.push('/profile');
          }}
        >
          Profile
        </Button>
        <br />
        <Button
          className="w-100 mb-1 me-1"
          onClick={() => {
            history.push('/videos');
          }}
        >
          Videos
        </Button>
        <br />
        {userInfo.role === 'mentor' ? (
          <>
            <Button
              className="w-100 mb-1 me-1"
              onClick={() => {
                history.push('/upload');
              }}
            >
              Upload Video
            </Button>
            <br />
          </>
        ) : (
          ''
        )}
        <Button
          className="w-100 mb-1 me-1"
          onClick={() => {
            logout()
              .then(() => {
                setIsLoggedIn(false);
                setUserInfo({});
                history.push('/');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Logout
        </Button>
        <br />
      </div>,
    ];
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow p-3 mb-1"
      style={{ height: '80px', backgroundColor: '#ff4d4d' }}
    >
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-start">
          <Link className="navbar-brand fs-1" to="/">
            Gameroom
          </Link>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <Link className="navbar-brand fs-4 me-5" to='/gallery'>
            Gallery
          </Link>
          <Link className="navbar-brand fs-4 me-5" to='/forum'>
            Forum
          </Link>
          {currentUser ? (
            <Dropdown className="me-5" trigger={trigger} options={options} />
          ) : (
            <div className="navbar-nav">
              <Link className="nav-link me-4 fs-4" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
