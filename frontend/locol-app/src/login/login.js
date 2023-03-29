import React, {useState} from "react";
import styled from "styled-components";
import {InputAdornment, Button, TextField, Input} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";

import "./login.css";

export const Login = ({}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function changeEmail(val) {
        setEmail(val)
    }

    function changePassword(val) {
        setPassword(val)
    }

    function sendLoginInfoToBackend() {
        // Send a POST request to the Django server
        fetch('http://127.0.0.1:8000/login_request/', {
            method: 'POST',
            withCredentials: true,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password})
        })
            .then(response => response.json())
            .then(data => {console.log(data)})
            .catch(error => {console.log(error)});
    }

    const FlexColumn1Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    return (
        <div id="LoginPage">
            <div id="Background">
                <div id="Panel">
                    <text10>Welcome Back!</text10>

                    <text1>Sign in</text1>
                    <text2>to your Locol Student account</text2>
                    <text3>Email:</text3>
                    <div className="tf-outer">
                        <TextField
                            className="tf-inner"
                            variant="outlined"
                            position="absolute"
                            onChange={(e) => changeEmail(e.target.value)}
                        />


                    </div>
                    <text4>Password</text4>
                    <div className="tf-outer">
                        <TextField
                            className="tf-inner"
                            variant="outlined"
                            position="absolute"
                            InputProps={{
                                endAdornment: (<InputAdornment position="end" style={{cursor: "pointer"}}>
                                    <Visibility
                                        onMouseDown={() => this.toggleShowPassword()}
                                        onMouseUp={() => this.toggleShowPassword()}
                                    />
                                </InputAdornment>)
                            }}
                            onChange={(e) => changePassword(e.target.value)}
                            // InputProps={{
                            //   endAdornment: (
                            //     <InputAdornment position="end" style={{ cursor: "pointer"}}>
                            //       <Visibility
                            //         onMouseDown={() => this.toggleShowPassword()}
                            //         onMouseUp={() => this.toggleShowPassword()}
                            //       />
                            //     </InputAdornment>
                            //   ),
                            // }}
                            // type={this.state.showPassword ? "text" : "password"}
                            // value={this.state.password}
                            // onChange={(e) => this.changePassword(e.target.value)}
                        />

                        {/*

                    <Element1 />
                    <Text4>Password</Text4>
                    <FlexColumn>
                        <IconsaxLineareye
                            src={`https://file.rendit.io/n/InxojZGgvxtK7t5awRLt.svg`}
                        />
                    </FlexColumn> */}
                    </div>
                    <div className="FlexColumn1">
                        <button onClick={sendLoginInfoToBackend}>Login</button>
                    </div>
                    <text6>Don't have an account?
                        <a href="/signup_person"> Sign Up</a> instead.
                        <div><a href="/home">Forgot Password?</a></div> {/*change the url*/}
                    </text6>
                </div>
            </div>
        </div>
    );
};

const LoginRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  overflow: hidden;
`;
const Panel = styled.div`
  height: 389px;
  left: 395px;
  top: 189px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2.5% 0px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text1 = styled.div`
  width: 100%;
  height: 44px;
  margin: 0px 0px 1.08% 0px;
  color: #00416b;
  font-size: 35px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 44.41500186920166px;
  text-align: center;
`;
const Text2 = styled.div`
  width: 100%;
  height: 18px;
  margin: 0px 0px 2.62% 0px;
  color: #00416b;
  font-size: 14px;
  font-weight: 500;
  font-family: Montserrat;
  line-height: 17.766000747680664px;
  text-align: center;
`;
const Text3 = styled.div`
  width: 6.32%;
  height: 16px;
  margin: 0px 0px 1.08% 16.95%;
  font-size: 13px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Element1 = styled.div`
  width: 64.1%;
  height: 40px;
  margin: 0px 0px 3.08% 16.95%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text4 = styled.div`
  width: 10.02%;
  height: 16px;
  margin: 0px 0px 1.08% 16.95%;
  font-size: 13px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 5.55% 16.95%;
  padding: 1.23% 2.16% 1.23% 58.24%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const IconsaxLineareye = styled.img`
  width: 100%;
  height: 24px;
`;

const Text6 = styled.div`
  width: 34.82%;
  height: 13px;
  align-self: flex-end;
  margin: 0px 31.28% 0.92% 0px;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text7 = styled.div`
  display: contents;
  color: #38518d;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Text8 = styled.div`
  display: contents;
  color: #38518d;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  text-decoration-line: underline;
`;
const Text9 = styled.div`
  display: contents;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const ForgotPassword1 = styled.div`
  width: 21.11%;
  height: 13px;
  margin: 0px 0px 0px 33.9%;
  color: #39538e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  text-decoration-line: underline;
`;
const ForgotPassword = styled.div`
  display: contents;
  color: #3a548f;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  text-decoration-line: underline;
`;
const Text10 = styled.div``;

// import React, {useEffect, useState, Component} from "react";
// import styled from "styled-components";
// import { InputAdornment, Button, TextField, Input } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import axios from 'axios';

// import "./login.css";

// // export const Login = ({}) => {
// //   const FlexColumn1Function = (e, name) => {
// //     alert(`${name} was clicked`);
// //   };


//   // const [message, setMessage] = useState('');

//   // useEffect(() => {
//   //   axios.get('http://localhost:8000/hello-world/')
//   //     .then(response => {
//   //       setMessage(response.data.message);
//   //     })
//   //     .catch(error => {
//   //       console.log(error);
//   //     });
//   // }, []);


//   // class Login extends Component {
//   //   constructor(props) {
//   //     super(props);
//   //     this.redirect = this.redirect.bind(this);
//   //     this.state = {
//   //       loginButton: false,
//   //       username: "",
//   //       id: "",
//   //       password: "",
//   //       showPassword: false,
//   //       showAlert: false,
//   //       alertMessage: { message: "Loading..." },
//   //     };
//   //   }
//   function Login () {
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     //    constructor(props) {
//     //   super(props);
//     //   this.redirect = this.redirect.bind(this);
//     //   this.state = {
//     //     loginButton: false,
//     //     username: "",
//     //     id: "",
//     //     password: "",
//     //     showPassword: false,
//     //     showAlert: false,
//     //     alertMessage: { message: "Loading..." },
//     //   };
//     // }
//       return(
//         <div id="LoginPage">
//        <div id="Background">
//          <div id="Panel">
//              <text10>Welcome Back!</text10>
          
//            <text1>Sign in</text1>
//            <text2>to your Locol account</text2>
//            <text3>Email:</text3>
//            <div className="tf-outer">
//              <TextField
//               className="tf-inner"
//               variant="outlined"
//               position="absolute"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             </div>
//             <text4>Password</text4>
//             <div className="tf-outer">
//              <TextField
//               className="tf-inner"
//               variant="outlined"
//               position="absolute"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{endAdornment: (<InputAdornment position="end" style = {{cursor: "pointer"}}>
//                 <Visibility 
//                   onMouseDown={() => this.toggleShowPassword()}
//                   onMouseUp={() => this.toggleShowPassword()}
//                   />
//               </InputAdornment>)}}
//               // InputProps={{
//               //   endAdornment: (
//               //     <InputAdornment position="end" style={{ cursor: "pointer"}}>
//               //       <Visibility
//               //         onMouseDown={() => this.toggleShowPassword()}
//               //         onMouseUp={() => this.toggleShowPassword()}
//               //       />
//               //     </InputAdornment>
//               //   ),
//               // }}
//               // type={this.state.showPassword ? "text" : "password"}
//               // value={this.state.password}
//               // onChange={(e) => this.changePassword(e.target.value)}
//             />
            
//           {/* 

//                     <Element1 />
//                     <Text4>Password</Text4>
//                     <FlexColumn>
//                         <IconsaxLineareye
//                             src={`https://file.rendit.io/n/InxojZGgvxtK7t5awRLt.svg`}
//                         />
//                     </FlexColumn> */}
//                     </div>
//                     <div className="FlexColumn1">
//                       <text5>Login</text5>
//                     </div>
//             <text6>Don't have an account?  
//               <a href="/signup_person"> Sign Up</a> instead.
//               <div><a href="/home">Forgot Password?</a></div> {/*change the url*/}
//             </text6>
//         </div>
//       </div>
//     </div>
//       );
//     }

//   export default Login;



//   // import React, { Component } from 'react';
//   // import './pages.css';
//   // import './stylesheet.css'
  
//   // class Login extends Component {
  
//   //   constructor(props){
//   //     super(props);
//   //     this.userInput = React.createRef();
//   //     this.passInput = React.createRef();
//   //     this.state = { 
//   //       Lmessage: "",
//   //       Smessage: "",
//   //       signup: false
//   //     };
//   //   }
  
//   //   newMessage(newMessage, m){
//   //     if (m == "l")
//   //     {
//   //       this.setState({Lmessage: newMessage.message})
//   //       this.hideTimeout = setTimeout(() => this.setState({Lmessage: ''}), 3000)
//   //     }
//   //     else
//   //     {
//   //       this.setState({Smessage: newMessage.message})
//   //       this.hideTimeout = setTimeout(() => this.setState({Smessage: ''}), 3000)
//   //     }
//   //   }
  
//   //   // clean up in case there is pending update
//   //   componentWillUnmount() {
//   //     clearTimeout(this.hideTimeout)
//   //   }
  
//   //   async isValidUser(user, passw, event)
//   //   {
//   //     event.preventDefault();
//   //     const dataToSend = {
//   //       method: 'POST',
//   //       headers: { 'content-type': 'application/json' },
//   //       body: JSON.stringify({ "username": user, "password": passw })
//   //     }
//   //     const response = await fetch("/login", dataToSend);
//   //     const retVal = await response.json();
//   //     console.log(retVal.auth)
//   //     if (retVal.auth == true)
//   //     {
//   //       this.props.setUsername(this.userInput.current.value);
//   //       this.props.setPassword(this.passInput.current.value);
//   //       this.props.logUserIn();
//   //     }
//   //     else
//   //     {
//   //         const newMessage = {
//   //           message: "Invalid Username or Password"
//   //         }
//   //         this.newMessage(newMessage, "l");
//   //     }
//   //   }
  
//   //   async Signup(user, passw, event)
//   //   {
//   //     event.preventDefault();
//   //     const dataToSend = {
//   //       method: 'POST',
//   //       headers: { 'content-type': 'application/json' },
//   //       body: JSON.stringify({ "username": user, "password": passw })
//   //     }
//   //     const response = await fetch("/signup", dataToSend);
//   //     const retVal = await response.json();
//   //     console.log(retVal.status)
//   //     if (retVal.status == "added")
//   //     {
//   //       this.props.setUsername(this.userInput.current.value);
//   //       this.props.setPassword(this.passInput.current.value);
//   //       this.props.logUserIn();
//   //       this.setState({signup: false});
//   //     }
//   //     else
//   //     {
//   //         const newMessage = {
//   //           message: "Username already exists"
//   //         }
//   //         this.newMessage(newMessage, "s");
//   //     }
//   //   }
  
//   //   handleLogin = event => {
//   //     this.isValidUser(this.userInput.current.value, this.passInput.current.value, event);
//   //   };
  
//   //   handleSignup = event => {
//   //     this.Signup(this.userInput.current.value, this.passInput.current.value, event)
//   //   }
//   //   render()
//   //   {
//   //     if (this.state.signup)
//   //     {
//   //       return (
//   //       <div className = 'login-root'>
//   //         <form onSubmit={this.handleSignup}>  
//   //           <div className='container'>
//   //             <div style={{background:"red", color:"white", textAlign:"center"}}>{this.state.Smessage}</div>  
//   //             <h2>Signup</h2><br/>
//   //             <label htmlFor='uname'><b>Username</b></label>  
//   //             <input type='text' placeholder='Enter Username' ref={this.userInput} name='uname' className='mb-3' required/><br/>
//   //             <label htmlFor='psw'><b>Password</b></label>  
//   //             <input type='password' placeholder='Enter Password' ref={this.passInput} name='psw' required/><br/>
//   //             <button type="submit">Signup</button>
//   //           </div>
//   //         </form>
//   //         <div className='container'>
//   //           <button type="submit" onClick={() => {this.setState({signup: false});}}>Back</button>
//   //         </div>
//   //       </div>
//   //       );
//   //     }
//   //     else
//   //     {
//   //       return (
//   //         <div className = 'login-root'>
//   //           <form onSubmit={this.handleLogin}>  
//   //             <div className='container'>
//   //               <div style={{background:"red", color:"white", textAlign:"center"}}>{this.state.Lmessage}</div>  
//   //               <h2>Login</h2><br/>
//   //               <label htmlFor='uname'><b>Username</b></label>  
//   //               <input type='text' placeholder='Enter Username' ref={this.userInput} name='uname' className='mb-3' required/><br/>
//   //               <label htmlFor='psw'><b>Password</b></label>  
//   //               <input type='password' placeholder='Enter Password' ref={this.passInput} name='psw' required/><br/>
//   //               <button type="submit">Login</button>
//   //             </div>
//   //           </form>
//   //           <div className='container'>
//   //             <button type="submit" onClick={() => {this.setState({signup: true});}}>Signup</button>
//   //           </div>
//   //         </div>
//   //       );
//   //     }
//   //   }
//   // }
  
//   // export default Login;


    
// // function login() {

// //   return (
// //     <div id="LoginPage">
// //       <div id="Background">
// //         <div id="Panel">
// //             <text10>Welcome Back!</text10>
          
// //           <text1>Sign in</text1>
// //           <text2>to your Locol account</text2>
// //           <text3>Email:</text3>
// //           <div className="tf-outer">
// //             <TextField
// //               className="tf-inner"
// //               variant="outlined"
// //               position="absolute"
// //             />
// //             </div>
// //             <text4>Password</text4>
// //             <div className="tf-outer">
// //              <TextField
// //               className="tf-inner"
// //               variant="outlined"
// //               position="absolute"
// //               InputProps={{endAdornment: (<InputAdornment position="end" style = {{cursor: "pointer"}}>
// //                 <Visibility 
// //                   onMouseDown={() => this.toggleShowPassword()}
// //                   onMouseUp={() => this.toggleShowPassword()}
// //                   />
// //               </InputAdornment>)}}
// //               // InputProps={{
// //               //   endAdornment: (
// //               //     <InputAdornment position="end" style={{ cursor: "pointer"}}>
// //               //       <Visibility
// //               //         onMouseDown={() => this.toggleShowPassword()}
// //               //         onMouseUp={() => this.toggleShowPassword()}
// //               //       />
// //               //     </InputAdornment>
// //               //   ),
// //               // }}
// //               // type={this.state.showPassword ? "text" : "password"}
// //               // value={this.state.password}
// //               // onChange={(e) => this.changePassword(e.target.value)}
// //             />
            
// //           {/* 

// //                     <Element1 />
// //                     <Text4>Password</Text4>
// //                     <FlexColumn>
// //                         <IconsaxLineareye
// //                             src={`https://file.rendit.io/n/InxojZGgvxtK7t5awRLt.svg`}
// //                         />
// //                     </FlexColumn> */}
// //                     </div>
// //                     <div className="FlexColumn1">
// //                       <text5>Login</text5>
// //                     </div>
// //             <text6>Don't have an account?  
// //               <a href="/signup_person"> Sign Up</a> instead.
// //               <div><a href="/home">Forgot Password?</a></div> {/*change the url*/}
// //             </text6>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default login;

// // const LoginRootRootRoot = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: flex-start;
// //   align-items: flex-start;
// //   background-color: #ffffff;
// //   overflow: hidden;
// // `;
// // const Panel = styled.div`
// //   height: 389px;
// //   left: 395px;
// //   top: 189px;
// //   position: absolute;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: flex-end;
// //   align-items: flex-start;
// //   padding: 2.5% 0px;
// //   border-radius: 20px;
// //   background-color: rgba(255, 255, 255, 0.75);
// //   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// // `;
// // const Text1 = styled.div`
// //   width: 100%;
// //   height: 44px;
// //   margin: 0px 0px 1.08% 0px;
// //   color: #00416b;
// //   font-size: 35px;
// //   font-weight: 700;
// //   font-family: Montserrat;
// //   line-height: 44.41500186920166px;
// //   text-align: center;
// // `;
// // const Text2 = styled.div`
// //   width: 100%;
// //   height: 18px;
// //   margin: 0px 0px 2.62% 0px;
// //   color: #00416b;
// //   font-size: 14px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// //   line-height: 17.766000747680664px;
// //   text-align: center;
// // `;
// // const Text3 = styled.div`
// //   width: 6.32%;
// //   height: 16px;
// //   margin: 0px 0px 1.08% 16.95%;
// //   font-size: 13px;
// //   font-weight: 600;
// //   font-family: Montserrat;
// //   white-space: nowrap;
// // `;
// // const Element1 = styled.div`
// //   width: 64.1%;
// //   height: 40px;
// //   margin: 0px 0px 3.08% 16.95%;
// //   border-width: 1px;
// //   border-radius: 20px;
// //   border-style: solid;
// //   border-color: #bdbdbd;
// //   box-shadow: 0px 5px 25px 0px #02375f;
// // `;
// // const Text4 = styled.div`
// //   width: 10.02%;
// //   height: 16px;
// //   margin: 0px 0px 1.08% 16.95%;
// //   font-size: 13px;
// //   font-weight: 600;
// //   font-family: Montserrat;
// //   white-space: nowrap;
// // `;
// // const FlexColumn = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: flex-start;
// //   align-items: flex-start;
// //   margin: 0px 0px 5.55% 16.95%;
// //   padding: 1.23% 2.16% 1.23% 58.24%;
// //   border-width: 1px;
// //   border-radius: 20px;
// //   border-style: solid;
// //   border-color: #bdbdbd;
// //   box-shadow: 0px 5px 25px 0px #02375f;
// // `;
// // const IconsaxLineareye = styled.img`
// //   width: 100%;
// //   height: 24px;
// // `;

// // const Text6 = styled.div`
// //   width: 34.82%;
// //   height: 13px;
// //   align-self: flex-end;
// //   margin: 0px 31.28% 0.92% 0px;
// //   color: #9e9e9e;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// //   white-space: nowrap;
// // `;
// // const Text7 = styled.div`
// //   display: contents;
// //   color: #38518d;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// // `;
// // const Text8 = styled.div`
// //   display: contents;
// //   color: #38518d;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// //   text-decoration-line: underline;
// // `;
// // const Text9 = styled.div`
// //   display: contents;
// //   color: #9e9e9e;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// // `;
// // const ForgotPassword1 = styled.div`
// //   width: 21.11%;
// //   height: 13px;
// //   margin: 0px 0px 0px 33.9%;
// //   color: #39538e;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// //   text-decoration-line: underline;
// // `;
// // const ForgotPassword = styled.div`
// //   display: contents;
// //   color: #3a548f;
// //   font-size: 11px;
// //   font-weight: 500;
// //   font-family: Montserrat;
// //   text-decoration-line: underline;
// // `;
// // const Text10 = styled.div``;

