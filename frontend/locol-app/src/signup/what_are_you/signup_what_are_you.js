import React from "react";
import styled from "styled-components";

export const Signup_what_are_you = ({}) => {
    return (
        <SignupRootRootRoot>
            <Background>
                <Panel>
                    <Text1>Welcome to Locol!</Text1>
                    <Text2>What are you?</Text2>
                    <FlexColumn>
                        <Text3>Student</Text3>
                    </FlexColumn>
                    <FlexColumn1>
                        <Text4>Business Owner</Text4>
                    </FlexColumn1>
                    <Text5>
                        Already have an account?<Text6> </Text6>
                        <Text7>Login</Text7>
                        <Text8> instead.</Text8>
                    </Text5>
                </Panel>
            </Background>
            <Image1 src={`undefined`} />
        </SignupRootRootRoot>
    );
};

const SignupRootRootRoot = styled.div`
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
  background-image: url("https://file.rendit.io/n/4C3igkQcKBwEwXeGYl7r.svg");
`;
const Panel = styled.div`
  height: 279px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 4.93% 0px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text1 = styled.div`
  width: 100%;
  height: 44px;
  align-self: flex-start;
  margin: 0px 0px 5.39% 0px;
  color: #ca8342;
  font-size: 35px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 44.41500186920166px;
  text-align: center;
`;
const Text2 = styled.div`
  width: 17.57%;
  height: 18px;
  align-self: flex-start;
  margin: 0px 0px 2% 17.87%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 17.72% 3.08% 0px;
  padding: 1.7% 51.46% 1.76% 4.31%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text3 = styled.div`
  width: 100%;
  height: 16px;
  font-size: 13px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 17.72% 5.41% 0px;
  padding: 1.69% 0px 1.77% 4.31%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text4 = styled.div`
  width: 100%;
  height: 16px;
  font-size: 13px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Text5 = styled.div`
  width: 34.67%;
  height: 13px;
  margin: 0px 31.59% 0px 0px;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text6 = styled.div`
  display: contents;
  color: #38518d;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Text7 = styled.div`
  display: contents;
  color: #ca8342;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  text-decoration-line: underline;
`;
const Text8 = styled.div`
  display: contents;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Image1 = styled.img`
  height: 0px;
`;
