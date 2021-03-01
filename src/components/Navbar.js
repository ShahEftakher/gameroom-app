import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, Dropdown } from "semantic-ui-react";
import { auth } from "../firebase";

const Navbar = () => {
  const {
    logout,
    isLoggedIn,
    setIsLoggedIn,
    setCurrentUser,
    currentUser,
  } = useUserContext();
  console.log(currentUser);
  const history = useHistory();
  if (isLoggedIn) {
    var trigger = (
      <span>
        <AccountCircleIcon fontSize="large" /> Hello, {currentUser.displayName}
      </span>
    );
    console.log(currentUser);

    var options = [
      {
        key: "user",
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
            history.push("/profile");
          }}
        >
          Profile
        </Button>
        <br />
        <Button
          className="w-100 mb-1 me-1"
          onClick={() => {
            history.push("/videos");
          }}
        >
          Videos
        </Button>
        <br />
        <Button
          className="w-100 mb-1 me-1"
          onClick={() => {
            logout()
              .then(() => {
                setIsLoggedIn(false);
                history.push("/");
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
      style={{ height: "80px", backgroundColor: "#ff4d4d" }}
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
          {/* <Link className="nav-link active me-4" aria-current="page" href="#">
            Home
          </Link>
          <Link className="nav-link" href="#">
            Features
          </Link> */}
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {isLoggedIn ? (
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
