import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
} from "@material-ui/core";
import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Navbar = (props: {
  options: [string, string][];
  currPath?: string;
  simple?: boolean;
}) => {
  const navigate = useNavigate();
  const redirectTo = (link: string) => {
    console.log("redirecting to " + link);
    navigate(link);
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
                  let onTargetLink = props.currPath === link;
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
                    <Button
                      key={index}

                      onClick={() => {
                        console.log(
                          "clicked " + text + ", link targets " + link
                        );
                        redirectTo(link);
                      }}
                      style={style}
                    >
                      {text}
                    </Button>
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
margin: 0px 266px 0px 0px;
padding: 5px 18px 6px 19px;
background-size: cover;
background-image: url("undefined");
`;
const LocolBlue1 = styled.img`
width: 126px;
height: 77px;
align-self: flex-start;
`;