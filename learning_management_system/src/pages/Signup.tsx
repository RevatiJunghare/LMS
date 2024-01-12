import { Box } from "@mui/material";
import { useState } from "react";
import { ProductAction } from "../redux/product/product.action";
import { useAppDispatch } from "../redux/store";
import { styled } from "styled-components";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [userinput, setUserinput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserinput((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const formSubmission = (e: any) => {
    e.preventDefault();
    dispatch(ProductAction.signupaction(userinput));
  };

  return (
    <WrapperSignupForm>
      <Box>
        <Box>
          <img
            src="https://vspot.s3.amazonaws.com/sign-up/Logos/SignUp-Logo.png"
            alt="signup image"
            height="100px"
            width="400px"
          />
        </Box>
        <Box className="form-box">
          <form onSubmit={(e) => formSubmission(e)} className="form-form">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleInputChange}
              value={userinput.name}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter emailID"
              onChange={handleInputChange}
              value={userinput.email}
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
              value={userinput.password}
              className="form-input"
            />
            <input
              type="submit"
              value="Signup"
              name="Signup"
              className="submitbtn"
            />
          </form>
        </Box>
      </Box>
    </WrapperSignupForm>
  );
};

export default Signup;

const WrapperSignupForm = styled.div`
  & {
    .form-box {
      // border:1px solid #464ceb;
      padding: 20px;
      background-color: #f5f3f0;
      border-radius: 10px;
    }

    .form-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #f5f3f0;
    }

    .form-input {
      height: 40px;
      border: none;
      padding: 7px;
      font: 1em/1.25em Arial, Helvetica, sans-serif;
      border-radius: 10px;
    }

    .submitbtn {
      background-color: #2525b3;
      border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;

      margin: 4px 2px;
      opacity: 0.6;
      transition: 0.3s;
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
      border-radius: 10px;
      font: 1em/1.25em Arial, Helvetica, sans-serif;
    }

    .submitbtn:hover {
      opacity: 1;
    }
  }
`;
