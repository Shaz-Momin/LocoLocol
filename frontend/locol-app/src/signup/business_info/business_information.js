import React from "react";
import styled from "styled-components";

import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";

export const BusinesssignupRootRoot1 = ({}) => {
  return (
    <BusinesssignupRootRoot>
      <Elements1 />
      <YellowCircle src={`https://file.rendit.io/n/Lb2HEl9yHetbFnQAfe7p.svg`} />
      <BlueCircle src={`https://file.rendit.io/n/OGjegfX227duIVy8kgjU.svg`} />
      <OrangeCircle src={`https://file.rendit.io/n/a0m79hbAY3jbtUOohdvS.svg`} />
      <OrangeCircle1
        src={`https://file.rendit.io/n/jk6EtzMyb2rkFLyGQG6v.svg`}
      />
      <Orange>
        <Panel>
          <Group>
          {/* <a href = "/signup_account">
                <Arrows src={rightArrow} />
              </a> */}
            <a>
                <Image1 src={`https://file.rendit.io/n/AhRiaIGeDRHXTwKWSZoW.svg`} />
            </a>
            <Text5>Basic Info</Text5>
            <Image2 src={`https://file.rendit.io/n/fBcUy0rgJxCRSey68dUO.svg`} />
          </Group>
          <Text2>Where is your office located?</Text2>
          <Dropshadow>
            <Element1>
              <TypeHere>Type here . . . </TypeHere>
            </Element1>
          </Dropshadow>
          <Text3>What industry are you part of?</Text3>
          <Element2>
            <TypeHere1>Type here . . . </TypeHere1>
          </Element2>
          <Text4>When was the company founded?</Text4>
          <Element3>
            <Text1>Enter date</Text1>
          </Element3>
        </Panel>
      </Orange>
    </BusinesssignupRootRoot>
  );
};

const BusinesssignupRootRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Elements1 = styled.div`
  width: 100%;
  height: 1046px;
  left: 0px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  overflow: hidden;
  filter: blur(18px);
`;
const YellowCircle = styled.img`
  width: 928px;
  min-width: 0px;
  height: 930px;
  min-height: 0px;
  left: 412.99609375px;
  top: 300px;
  position: absolute;
  box-sizing: border-box;
`;
const BlueCircle = styled.img`
  width: 540px;
  min-width: 0px;
  height: 540px;
  min-height: 0px;
  left: -112.1640625px;
  top: 885.2841796875px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-102.93deg);
  transform-origin: 0px 0px;
`;
const OrangeCircle = styled.img`
  width: 540px;
  min-width: 0px;
  height: 548px;
  min-height: 0px;
  left: 1101.8828125px;
  top: -214px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(22.7deg);
  transform-origin: 0px 0px;
`;
const OrangeCircle1 = styled.img`
  width: 139px;
  min-width: 0px;
  height: 141px;
  min-height: 0px;
  left: 853.26171875px;
  top: -78px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(22.7deg);
  transform-origin: 0px 0px;
`;
const Orange = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 177px 395px 302px 395px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/2H5DsaN8eqAiRbQhr0dG.svg");
`;
const Panel = styled.div`
  width: 649px;
  gap: 15.6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 52px 51px 177px 51px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Group = styled.div`
  width: 99.82%;
  gap: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 7.37px 0px;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  width: 3.81%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 11px 0px 8.86px 0px;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 283px 0px 0px;
  color: #262626;
  font-size: 25px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 31.725001335144043px;
  text-align: center;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  width: 3.81%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 11px 0px 8.86px 0px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 37px;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Dropshadow = styled.div`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 6.65px 0px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Element1 = styled.div`
  width: 100.42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 0px 0px -1px;
  padding: 15.2px 32.8px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("undefined");
`;
const TypeHere = styled.div`
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 37px;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 12px 0px;
  padding: 14.2px 31.8px 14.7px 31.8px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const TypeHere1 = styled.div`
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0.37px 40px;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Element3 = styled.div`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  padding: 14px 27px 14.9px 27px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text1 = styled.div`
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
