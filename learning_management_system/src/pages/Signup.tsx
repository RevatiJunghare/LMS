/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductAction } from "../redux/product/product.action";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { styled } from "styled-components";
import { signuperror, userdetails } from "../redux/product/product.selector";
import { productNetworkService } from "../redux/product/product.networkservice";

const Signup = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userdetails);
  const iserror = useAppSelector(signuperror)
  const [loading, setLoading] = useState(false);
  const [userinput, setUserinput] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  console.log("userfromredux", user);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserinput((prevUserData: any) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const formSubmission = (e: any) => {
    e.preventDefault();
    // if (userinput.email.length == 0) {
    //   alert("EmailID Should not be empty");
    //   return false;
    // } else if (userinput.password.length == 0) {
    //   alert("Password should not be empty");
    //   return false;
    // } else if (userinput.password.length < 8) {
    //   alert(
    //     "Invalid Form, Password must contain greater than or equal to 8 characters"
    //   );
    //   return false;
    // }

    // for (let i = 0; i < userinput.password.length; i++) {
    //   let countUpperCase: number = 0;
    //   let countLowerCase: number = 0;
    //   let countDigit: number = 0;
    //   let countSpecialCharacters: number = 0;
    //   const specialChars = [
    //     "!",
    //     "@",
    //     "#",
    //     "$",
    //     "%",
    //     "^",
    //     "&",
    //     "*",
    //     "(",
    //     ")",
    //     "_",
    //     "-",
    //     "+",
    //     "=",
    //     "[",
    //     "{",
    //     "]",
    //     "}",
    //     ":",
    //     ";",
    //     "<",
    //     ">",
    //   ];

    //   if (specialChars.includes(userinput.password[i])) {
    //     countSpecialCharacters++;
    //   } else if (!isNaN(userinput.password[i] * 1)) {
    //     countDigit++;
    //   } else {
    //     if (userinput.password[i] == userinput.password[i].toUpperCase()) {
    //       countUpperCase++;
    //     }
    //     if (userinput.password[i] == userinput.password[i].toLowerCase()) {
    //       countLowerCase++;
    //     }
    //   }
    // }

    dispatch(ProductAction.signupaction(userinput))
      .then((res) => {
        const data:any = res?.payload
        console.log("1111111111", data?.response?.data?.msg);
        console.log("2222222",data?.response)
         alert("Successfully registered");
      })
      .catch((err) => {
        console.log("error in catch", err);
        alert(err);
        
      })
      .finally(() => {});

      // productNetworkService.signupUser(userinput)
      //   .then((res)=>{
      //     console.log("success",res)
      //     alert("success")
      //   })
      //   .catch((err)=>{
      //     console.log("error",err)
      //     alert("failed")
      //   })
      //   .finally(()=>{})
  };

  useEffect(()=>{
    alert(iserror)
  },[iserror])


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
          <form onSubmit={ formSubmission} className="form-form">
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
          <Box>
            Already Signup please <a href="/login">Login</a>
          </Box>
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
