import React from "react";
import styled from "styled-components";

import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";
import "./business_services.css";

export const BusinesssignupRootRootRootRoot = ({}) => {
  return (
    <div id="businesssignupRootRootRoot">
      <div id="background_services">
        <div id="panel_services">
            <div style={{display: 'flex', flexDirection: "row"}}>
                <div style={{ flex:1 }}>
                  <a href = "/business_information">
                    <Arrows1 src={rightArrow} />
                  </a>
                </div>
              <div style={{ flex:1 }}>
                <text1_bus>What services interest you?</text1_bus>
              </div>
              <div style={{ flex:1 }}>
                <a href = "/business_create">
                  <Arrows2 src={leftArrow} />
                </a>
              </div>
            </div>
      <Elements1 />
      <YellowCircle />
      <BlueCircle src="https://file.rendit.io/n/Ig94XTX6YBoUC6z99jNS.svg" />
      <OrangeCircle src="https://file.rendit.io/n/WcWzCIwoML6P8gGXCIOu.svg" />
      <OrangeCircle1 src="https://file.rendit.io/n/zvM4EFxPXpy0dAjDiyWO.svg" />
      <Orange>

        <div id = "Panel">
            <Group1>
              <form>
                <div>
                    <label><input type="checkbox" /> Copywriting </label>
                  </div>
                </form>
            </Group1>
            <Line />
            <Group2>
              <form>
                <div>
                    <label><input type="checkbox" /> Email Marketing </label>
                  </div>
                </form>
            </Group2>
            <Line1 />
            <Group3>
                <form>
                <div>
                    <label><input type="checkbox" /> Graphic Design </label>
                  </div>
                </form>
            </Group3>
            <Line3 />
            <Group4>
              <form>
                <div>
                    <label><input type="checkbox" /> Marketing Stategy </label>
                  </div>
                </form>
            </Group4>
            <Line3 />
            <Group5>
              <form>
                <div>
                    <label><input type="checkbox" /> Video Marketing </label>
                  </div>
                </form>
            </Group5>
            <Line4 />
            <Group6>
              <form>
                <div>
                    <label><input type="checkbox" /> Search Engine Optimization </label>
                  </div>
                </form>
            </Group6>
            <Line5 />
            <Group7>
              <form>
                <div>
                    <label><input type="checkbox" /> Social Media Marketing </label>
                  </div>
                </form>
            </Group7>
            <Line6 />
            <Group8>
              <form>
                <div>
                    <label><input type="checkbox" /> Web Analytics </label>
                  </div>
                </form>
            </Group8>
            <Line7 />
            <Group9>
              <form>
                <div>
                    <label><input type="checkbox" /> Web Development </label>
                  </div>
                </form>
            </Group9>
        </div>
      </Orange> 
        </div> 
      </div>
    </div>
  );
};

const Arrows1 = styled.img`
  width: 100.09%;
  height: 13.6px;
  position: relative;
`;
const Arrows2 = styled.img`
  width: 100.09%;
  height: 13.6px;
  position: relative;
  left: 150px;
`;
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
const YellowCircle = styled.div`
  width: 928px;
  height: 930px;
  left: 412.99609375px;
  top: 300px;
  position: absolute;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/QUSPg9QYffoMnLd42K0H.svg");
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
  gap: 78px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 179px 395px 101px 395px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/vldZ3kBUd0ALJezDWH2l.svg");
`;
const Group = styled.div`
  width: 546px;
  gap: 67px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 51px 0px 0px;
  box-sizing: border-box;
`;
const Vector = styled.img`
  width: 4.13%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 11px 12px 8.86px 0px;
  box-sizing: border-box;
`;
const Vector1 = styled.img`
  width: 4.13%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 11px 0px 8.86px 0px;
  box-sizing: border-box;
`;
const FlexColumn1 = styled.div`
  height: 299px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  padding: 3.65% 4.93% 3.09% 3.11%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Rectangle = styled.div`
  width: 418px;
  gap: 3.83px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 18.4px 17px 17.1px 17px;
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
const Group1 = styled.div`
  width: 83px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 15px;
  box-sizing: border-box;
`;
const Rectangle1 = styled.div`
  width: 13.89%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 6.42px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const Copywriting = styled.div`
  align-self: flex-end;
  margin: 1.42px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 10.2px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 104px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 3.8px 15px;
  box-sizing: border-box;
`;
const Rectangle2 = styled.div`
  width: 10.75%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 6.62px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const EmailMarketing = styled.div`
  align-self: flex-end;
  margin: 1.62px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line1 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 7.17px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 99px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 15.4px 15px;
  box-sizing: border-box;
`;
const Rectangle3 = styled.div`
  width: 11.36%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 5.81px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const GraphicDesign = styled.div`
  align-self: flex-end;
  margin: 0.81px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 118px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 3.41px 15px;
  box-sizing: border-box;
`;
const Rectangle4 = styled.div`
  width: 9.35%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 6.01px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const MarketingStrategy = styled.div`
  align-self: flex-end;
  margin: 1.01px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line3 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 8.17px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 105px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 2.21px 15px;
  box-sizing: border-box;
`;
const Rectangle5 = styled.div`
  width: 10.64%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 5.21px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const VideoMarketing = styled.div`
  align-self: flex-end;
  margin: 0.21px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line4 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 9.17px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group6 = styled.div`
  width: 163px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4.02px 15px;
  box-sizing: border-box;
`;
const Rectangle6 = styled.div`
  width: 6.58%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 5.4px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const SearchEngineOptimization = styled.div`
  align-self: flex-end;
  margin: 0.4px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line5 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 7.17px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: 140px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4.82px 15px;
  box-sizing: border-box;
`;
const Rectangle7 = styled.div`
  width: 7.75%;
  height: 10px;
  align-self: flex-start;
  margin: 0px 0px 5.6px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const SocialMediaMarketing = styled.div`
  align-self: flex-end;
  margin: 0.6px 0px 0px 0px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line6 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 6.97px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group8 = styled.div`
  width: 93px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 3.62px 15px;
  box-sizing: border-box;
`;
const Rectangle8 = styled.div`
  width: 12.2%;
  height: 10px;
  align-self: flex-start;
  margin: 0.2px 0px 4.8px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const WebAnalytics = styled.div`
  align-self: flex-start;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Line7 = styled.div`
  width: 97.38%;
  height: 0.75px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 8.16px 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
  box-sizing: border-box;
`;
const Group9 = styled.div`
  width: 116px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 15px;
  box-sizing: border-box;
`;
const Rectangle9 = styled.div`
  width: 9.52%;
  height: 10px;
  align-self: flex-start;
  margin: 0.01px 0px 4.99px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const WebDevelopment = styled.div`
  align-self: flex-start;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
  white-space: nowrap;
  box-sizing: border-box;
`;
