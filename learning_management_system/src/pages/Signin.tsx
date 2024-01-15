/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import { productNetworkService } from "../redux/product/product.networkservice";

const Signin = () => {
  const [userinput, setUserinput] = useState<any>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserinput((prevUserData:any) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const formSubmission = (e: any) => {
    e.preventDefault();
    
    productNetworkService.signinUser(userinput)
     .then((res)=>{
      console.log(res)
      alert(res?.data?.message)
     })
     .catch((err)=>{
      alert(err?.response?.data?.message)
     })
     .finally(()=>{})
  };

  return (
    <WrapperSignupForm>
      <Box>
        <Box>
          <img
            src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/login-png-free-commercial-use-images_6020118e98505.png"
            alt="signup image"
            height="100px"
            width="400px"
          />
        </Box>
        <Box className="form-box">
          <form onSubmit={(e) => formSubmission(e)} className="form-form">
            
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
              value="Login"
              name="Login"
              className="submitbtn"
            />
          </form>
        </Box>
      </Box>
    </WrapperSignupForm>
  );
};

export default Signin;

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
