"use client"
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
} from "@mui/material";
import React, { CSSProperties } from "react";
import styled from "styled-components";
import { useRouter } from 'next/navigation';

export const Navbar = (props: {
  options: [string, string][];
  currPath?: string;
  simple?: boolean;
}) => {
  const router = useRouter();
  const redirectTo = (link: string) => {
    console.log("redirecting to " + link);
    router.push(link);
  };

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: "#fcf8f5"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              <Logo>
                  <LocolBlue1
                  src={`https://file.rendit.io/n/trC8644Fp3YAsjuSndcy.png`}
                  />
              </Logo>
            {props.simple ? null : (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {props.options.map(([text, link], index) => {
                  // const path = useLocation().pathname;
                  let onTargetLink = window.location.href === link;
                  let style: CSSProperties = {
                    fontSize: "17px",
                    fontWeight: onTargetLink? 700 : 600,
                    textAlign: "center",
                    color: onTargetLink ? "#00416b" : "#575757",
                    // fontSize: onTargetLink ? "2em" : "1em",
                    fontFamily: 'Open Sans',
                    textTransform: 'capitalize',
                    textDecorationLine: onTargetLink? "underline" : "none",
                    // position: "absolute",
                  };
                  return (

                //     <div>{
                //       link === '/Home' ? <p>cyeeeurrent path: {link} </p> : <p>oop: {link} </p> 
                // }</div>
                 text === "Home" ? <Button
                 key={index}
                       

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    > <Text13>Home</Text13>
                {/* <Image1
                    src={`https://file.rendit.io/n/Ajesrz3rzUIAbOMJCQRR.svg`}
                /> */}
                </Button>: text === "Marketplace" ? <Button
                key={index}
                       

                onClick={() => {
                  console.log(
                    "clicked " + text + ", link targets " + link
                  );
                  redirectTo(link);
                }}
                style={style}
              ><Text14>Marketplace</Text14>
                            {/* <Chevronright
                                src={`https://file.rendit.io/n/L6D9U86zi9xQG83Fl6Vj.svg`}
                            /> */}
                            </Button> : 
                text == "Board"? <Button
                key={index}
                       

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    ><Text15>Board</Text15>
                {/* <Chevronright1
                    src={`https://file.rendit.io/n/L6D9U86zi9xQG83Fl6Vj.svg`}
                /> */}
                </Button> : 
                text == "Community"? <Button
                key={index}
                       

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    ><Text16>Community</Text16></Button> : 
                    text === "Login" ?
                <Button
                key={index}
                       

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    > <Text17>Login</Text17>
                    <Line2 />
                {/* <Image1
                    src={`https://file.rendit.io/n/Ajesrz3rzUIAbOMJCQRR.svg`}
                /> */}
                </Button> : <Button
                key={index}
                       

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    > 
                    <Login>Sign Up</Login>
                {/* <Image1
                    src={`https://file.rendit.io/n/Ajesrz3rzUIAbOMJCQRR.svg`}
                /> */}
                </Button>
                //keep going like this format for styling
                //if this is too much, then swap to switch cases!

                //     <Button
                //       key={index}
                       

                //       onClick={() => {
                //         console.log(
                //           "clicked " + text + ", link targets " + link
                //         );
                //         redirectTo(link);
                //       }}
                //       style={style}
                //     >
                //       {text}
                //     </Button>
                  );
                })}
              </Box>
            )}
            <div style={{ flexGrow: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

const Logo = styled.div`
width: 126px;
height: 77px;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-self: flex-start;
margin: 0px 145px 0px 0px;
padding: 5px 18px 6px 19px;
background-size: cover;
background-image: url("undefined");
`;
const LocolBlue1 = styled.img`
width: 126px;
height: 77px;
align-self: flex-start;
`;

const Text13 = styled.div`
  width: 51px;
  height: 23px;
  align-self: flex-start;
  margin: 0px 0px 0px 0px;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 49px;
  height: 3px;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
`;
const Text14 = styled.div`
  width: 103px;
  height: 23px;
  position: relative;
  align-self: flex-start;
  margin: 0px 20px 0px 46px;
  white-space: nowrap;
`;
const Chevronright = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  align-self: flex-start;
  margin: 25px 66px 0px 0px;
`;
const Text15 = styled.div`
  width: 50px;
  height: 23px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 0px 56px;
  white-space: nowrap;
`;
const Chevronright1 = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  align-self: flex-start;
  margin: 25px 45px 0px 0px;
`;
const Text16 = styled.div`
  width: 96px;
  height: 23px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 0px 52px;
  white-space: nowrap;
`;
const Text17 = styled.div`
width: 140px;
height: 27px;
// left: 1253px;
// right: 200px;
// top: 41.5px;
margin: 0px 0px 0px 56px;
position: realtive;
color: #ca8342;
font-size: 20px;
font-weight: 600;
font-family: Open Sans;
text-align: center;
transform: rotate(-0.22deg);
transform-origin: 0px 0px;
`;
const Login = styled.div`
  width: 140px;
  height: 27px;
  // left: 1253px;
  // top: 41.5px;
  position: realtive;
  color: #ca8342;
  font-size: 20px;
  font-weight: 600;
  font-family: Open Sans;
  text-align: center;
  transform: rotate(-0.22deg);
  transform-origin: 0px 0px;
`;
const Line2 = styled.div`
  width: 0px;
  height: 47px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 0px 0px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #ca8342;
`;
