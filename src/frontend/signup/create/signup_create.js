import React from "react";
import styled from "styled-components";

import rightArrow from "./rightArrow.png";

export const Signup_create = ({}) => {
    return (
        <StudentsignupRootRootRoot>
            <Background>
                <WhiteFlexColumn>
                    <Group>
                        <Text1>Create your student account</Text1>
                        <a href = "/signup_about_you">
                <Arrows src={rightArrow} />
              </a>
                        {/* <Arrows src={`https://file.rendit.io/n/b1JyyRivYzZhtxkj3Hgr.svg`} /> */}
                    </Group>
                    <Text2>Email</Text2>
                    <input type="text" id="ip2" />
                    {/* <TextField
                      required
                      label="Type here..." 
                      inputProps={{
                        style: {
                          width: "280px",
                          borderRadius: '20px',
                        },
                      }}
                      /> */}
                    {/* <Element1 /> */}
                    <Text3>*Must be school email ending with ‘.edu’</Text3>
                    <Text4>Create a password</Text4>
                    <input type="text" id="ip2"/>
                    {/* <TextField
                      required
                      label="Type here..." 
                      inputProps={{
                        style: {
                          width: "280px",
                          borderRadius: '20px',
                        },
                      }}
                      /> */}
                    {/* <FlexColumn1>
                        <IconsaxLineareye
                            src={`https://file.rendit.io/n/cNbO26hhK1928vFLh81s.svg`}
                        /> */}
                    {/* </FlexColumn1> */}
                    <Text5>Confirm password</Text5>
                    <input type="text" id="ip2"/>
                    {/* <TextField
                      required
                      label="Type here..." 
                      inputProps={{
                        style: {
                          width: "280px",
                          borderRadius: '20px',
                        },
                      }}
                      /> */}
                    {/* <FlexColumn2>
                        <IconsaxLineareye
                            src={`https://file.rendit.io/n/cNbO26hhK1928vFLh81s.svg`}
                        />
                    </FlexColumn2> */}
                    <FlexColumn3>
                    <form action = "/login">
                      <input type="submit" value="Create Account" class = "button"/>
                    </form>
                    {/* <button>Create Account</button> */}
                        {/* <Text6>Create Account</Text6> */}
                    </FlexColumn3>
                    <Text7>
                        Already have an account?<Text8> </Text8>
                        <Text9>Login</Text9>
                        <Text10> instead.</Text10>
                    </Text7>
                </WhiteFlexColumn>
            </Background>
        </StudentsignupRootRootRoot>
    );
};

const IconsaxLineareye = styled.img`
  width: 24px;
  height: 24px;
`;
const StudentsignupRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  overflow: hidden;
`;
const Background = styled.div`
  height: 668px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13.13% 27.5% 13.13% 27.43%;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/ei8Z5OHmB22wReopZU75.svg");
`;
const WhiteFlexColumn = styled.div`
  // height: 406px;
  height: auto;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6.32% 7.86% 8.63% 7.9%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Group = styled.div`
  width: 100.05%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 4.76% 0px;
  padding: 1.69% 0px 1.67% 0px;
`;
const Text1 = styled.div`
  width: 68.77%;
  height: 32px;
  left: 64.8px;
  top: 0px;
  position: absolute;
  color: #262626;
  font-size: 25px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 31.725001335144043px;
  text-align: center;
  white-space: nowrap;
`;
const Arrows = styled.img`
  width: 100.05%;
  height: 13.6px;
  position: relative;
`;
const Text2 = styled.div`
  width: 10.24%;
  height: 21.2px;
  margin: 0px 0px 1.23% 11.84%;
  font-size: 13px;
  font-family: Montserrat;
`;
const Element1 = styled.div`
  width: 76.09%;
  height: 38.5px;
  align-self: flex-end;
  margin: 0px 11.71% 1.21% 0px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text3 = styled.div`
  width: 29.45%;
  height: 12px;
  margin: 0px 0px 2.01% 14.4%;
  color: #595959;
  font-size: 8px;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 21.95%;
  height: 16px;
  margin: 0px 0px 1.28% 11.84%;
  font-size: 13px;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 11.71% 3.66% 0px;
  padding: 1.39% 3.29% 1.25% 68.4%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text5 = styled.div`
  width: 21.76%;
  height: 16px;
  margin: 0px 0px 1.28% 11.84%;
  font-size: 13px;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 11.71% 5.68% 0px;
  padding: 1.31% 3.29% 1.34% 68.4%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const FlexColumn3 = styled.div`
  height: 40.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 27.25% 3.39% 0px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/s2WKehEtuZu6d05Q2wpp.svg");
`;
const Text6 = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fefdfb;
  font-size: 15px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 40.5px;
  text-align: center;
`;
const Text7 = styled.div`
  width: 41.15%;
  height: 13px;
  align-self: flex-end;
  margin: 0px 28.72% 0px 0px;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text8 = styled.div`
  display: contents;
  color: #38518d;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Text9 = styled.div`
  display: contents;
  color: #ca8342;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  text-decoration-line: underline;
`;
const Text10 = styled.div`
  display: contents;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
