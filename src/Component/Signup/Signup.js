import React, { useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signup.css";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, err] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  //use Sate
  const [newUser, setUser] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const createUser = {
      name: nameValue,
      email: emailValue.toLocaleLowerCase(),
    };
    setUser(createUser);
    console.log(nameValue, emailValue, passwordValue);
    await createUserWithEmailAndPassword(emailValue, passwordValue);
    await updateProfile({ displayName: nameValue });
    // navigate(from, {replace:true});
  };

  if (newUser) {
    navigate("/todo");
  }

  return (
    <div className="mt-5">
      <h1
        style={{ fontSize: "80px" }}
        className="text-center mt-4 mb-2 fst-italic waviy"
      >
        <span style={{ "--i": 1 }} className="animate shadow-red text-white">
          To
        </span>
        <span style={{ "--i": 2 }} className="animate shadow-white text-danger">
          Do
        </span>

        <span style={{ "--i": 3 }} className="animate shadow-red text-white">
          L
        </span>
        <span style={{ "--i": 4 }} className="animate shadow-white text-danger">
          is
        </span>
        <span style={{ "--i": 5 }} className="animate shadow-red text-white">
          T
        </span>
      </h1>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <small className="text-center text-danger  fs-3">
            Please Register
          </small>
        </div>
      </div>
      <form className="w-100 pb-4" onSubmit={handleSignUp}>
        <div className="login-container">
          <div className="did-floating-label-content">
            <input
              ref={name}
              className="did-floating-input"
              type="text"
              placeholder=" "
              size={20}
            />
            <label className="did-floating-label">Name</label>
          </div>
          {/* <div className='d-lg-flex justify-content-between  '> */}
          <div className="did-floating-label-content">
            <input
              ref={email}
              className="did-floating-input"
              type="text"
              placeholder=" "
              size={20}
            />
            <label className="did-floating-label">Email</label>
          </div>
          {/* </div> */}
          <div className="did-floating-label-content did-error-input">
            <input
              width={50}
              ref={password}
              className="did-floating-input"
              type="password"
              placeholder=" "
              size={15}
            />
            <label className="did-floating-label">Password</label>
          </div>
          {/* </div> */}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div style={{ marginTop: "-15px" }}>
            <Button
              style={{ width: "150px" }}
              // onClick={handleSignUp}
              variant="danger"
              type="submit"
            >
              Sign up
            </Button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        {/* <p className="text-danger fs-5" style={{marginTop:'-16px'}}>
                {(error && error.message.split("/")[1].split(")")[0]) ||
                  (fbError && fbError.message.split("/")[1].split(")")[0]) ||
                  (errorMsg && errorMsg)}
              </p> */}
        <p style={{ marginTop: "-16px" }} className="fs-6 text-white">
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
