import React from "react";
import styled from "styled-components";

import "./signup_type_of_account.css";


export const Signup_type_of_account = ({}) => {
  const[type, setType] = useState('');

  function changeType(val) {
    setType(val)
  }

  function sendTypeInfoToBackend() {
    // Send a POST request to the Django server
    fetch('http://127.0.0.1:8000/signup_request/', {
      method: 'POST',
      withCredentials: true,
      mode: "cors",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: type})
  })
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
      .catch(error => {
          console.log(error)
      });
  }
    return (
      <div id = "studentsignupRootRootRoot">
        <div id = "background">
          <div id = "panel">
            <text1_type>Welcome to Locol!</text1_type>
            <text2_type>What type of account are you seeking?</text2_type>
            <a href="/signup_education">
              <div id="button" onClick={(e) => changeType(e.target.value)}>
                <text3_type>Student account</text3_type>
              </div>
            </a>
          <a href="/business_information">
            <div id="button" onClick={(e) => changeType(e.target.value)}>
              <text4_type>Business account</text4_type>
            </div>
            </a>
            <text5_type>Already have an account? <text6_type> </text6_type>
            <a href="/login"><text7_type>Login</text7_type></a>
            <text8_type> instead</text8_type></text5_type>
          </div>
        </div>
      </div>
  
        // <StudentsignupRootRootRoot>
        //     <Background>
        //         <Panel>
        //             <Text1>Welcome to Locol!</Text1>
        //             <Text2>What type of account are you seeking?</Text2>
        //             <FlexColumn>
        //                 <StudentAccount>Student account </StudentAccount>
        //                 <Dropshadow>
        //                     <FlexColumn1>
        //                         <Text3>Student account</Text3>
        //                     </FlexColumn1>
        //                 </Dropshadow>
        //             </FlexColumn>
        //             <FlexColumn2>
        //                 <Text4>Business account</Text4>
        //             </FlexColumn2>
        //             <Text5>
        //                 Already have an account?<Text6> </Text6>
        //                 <Text7>Login</Text7>
        //                 <Text8> instead.</Text8>
        //             </Text5>
        //         </Panel>
        //     </Background>
        //     <Image1 src={`undefined`} />
        // </StudentsignupRootRootRoot>
    );
};

const StudentsignupRootRootRoot = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`;
const Background = styled.div`
  // height: 668px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13.13% 27.5% 13.13% 27.43%;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/WEXEW8nMUubKOhiJCqi4.svg");
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
  width: 46.84%;
  height: 18px;
  align-self: flex-start;
  margin: 0px 0px 2% 17.87%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn = styled.div`
  width: 64.1%;
  height: 38.5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 17.72% 3.08% 0px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const StudentAccount = styled.div`
  width: 26.56%;
  height: 16px;
  left: 28px;
  top: 11.1px;
  position: absolute;
  font-size: 13px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Dropshadow = styled.div`
  width: 100%;
  height: 38.5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.9% 66.59% 2.87% 6.97%;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/N3myx0Nbkfg5EsLVOOIG.svg");
`;
const Text3 = styled.div`
  width: 100%;
  height: 16px;
  color: #ca8342;
  font-size: 13px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
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
