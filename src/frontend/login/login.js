import {useEffect} from "react";

import {Authenticator, useAuthenticator, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {useNavigate, useLocation} from 'react-router';

const Login = ({}) => {
    return (
        <Authenticator>
            {({signOut}) => {
                <div>
                    <h1> yeehaw </h1>
                    <h3> this is a test </h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            }}
        </Authenticator>
    );
};

export default Login;


//my prev code

// import React, {useState} from "react";
// import styled from "styled-components";
// import {InputAdornment, Button, TextField, Input} from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";

// import "./login.css";

// export const Login = ({}) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     function changeEmail(val) {
//         setEmail(val)
//     }

//     function changePassword(val) {
//         setPassword(val)
//     }

//     function sendLoginInfoToBackend() {
//         // Send a POST request to the Django server
//         fetch('http://127.0.0.1:8000/login_request/', {
//             method: 'POST',
//             withCredentials: true,
//             mode: "cors",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: email, password: password})
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
//             .catch(error => {
//                 console.log(error)
//             });
//     }

//     const FlexColumn1Function = (e, name) => {
//         alert(`${name} was clicked`);
//     };
//     return (
//         <div id="LoginPage">
//             <div id="Background">
//                 <div id="Panel">
//                     <text10>Welcome Back!</text10>

//                     <text1>Sign in</text1>
//                     <text2>to your Locol Student account</text2>
//                     <text3>Email:</text3>
//                     <div className="tf-outer">
//                         <TextField
//                             className="tf-inner"
//                             variant="outlined"
//                             position="absolute"
//                             onChange={(e) => changeEmail(e.target.value)}
//                         />


//                     </div>
//                     <text4>Password</text4>
//                     <div className="tf-outer">
//                         <TextField
//                             className="tf-inner"
//                             variant="outlined"
//                             position="absolute"
//                             InputProps={{
//                                 endAdornment: (<InputAdornment position="end" style={{cursor: "pointer"}}>
//                                     <Visibility
//                                         onMouseDown={() => this.toggleShowPassword()}
//                                         onMouseUp={() => this.toggleShowPassword()}
//                                     />
//                                 </InputAdornment>)
//                             }}
//                             onChange={(e) => changePassword(e.target.value)}
//                             // InputProps={{
//                             //   endAdornment: (
//                             //     <InputAdornment position="end" style={{ cursor: "pointer"}}>
//                             //       <Visibility
//                             //         onMouseDown={() => this.toggleShowPassword()}
//                             //         onMouseUp={() => this.toggleShowPassword()}
//                             //       />
//                             //     </InputAdornment>
//                             //   ),
//                             // }}
//                             // type={this.state.showPassword ? "text" : "password"}
//                             // value={this.state.password}
//                             // onChange={(e) => this.changePassword(e.target.value)}
//                         />

//                         {/*

//                     <Element1 />
//                     <Text4>Password</Text4>
//                     <FlexColumn>
//                         <IconsaxLineareye
//                             src={`https://file.rendit.io/n/InxojZGgvxtK7t5awRLt.svg`}
//                         />
//                     </FlexColumn> */}
//                     </div>
//                     <div className="FlexColumn1">
//                         <button onClick={sendLoginInfoToBackend}>Login</button>
//                     </div>
//                     <text6>Don't have an account?
//                         <a href="/signup_person"> Sign Up</a> instead.
//                         <div><a href="/home">Forgot Password?</a></div> {/*change the url*/}
//                     </text6>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const IconsaxLineareye = styled.img`
//   width: 100%;
//   height: 24px;
// `;
