import React from "react";
import styled from "styled-components";

export const Signup_about_you = ({}) => {
    return (
        <StudentsignupRootRootRoot>
            <Background>
                <Panel>
                    <Group>
                        <Text1>About You</Text1>
                        <Arrows src={`https://file.rendit.io/n/p5OSPxeFyL5WRdnMsZ8G.svg`} />
                    </Group>
                    <Text2>Select Skills</Text2>
                    <Dropshadow>
                        <Text3>Select . . .</Text3>
                    </Dropshadow>
                    <Text4>Areas of Interest</Text4>
                    <FlexColumn1>
                        <Group1>
                            <Element1 />
                            <Text5>Copywriting</Text5>
                        </Group1>
                        <Line />
                        <Group2>
                            <Element2 />
                            <Text6>Email Marketing</Text6>
                        </Group2>
                        <Line1 />
                        <Group3>
                            <Element3 />
                            <Text7>Graphic Design</Text7>
                        </Group3>
                        <Line2 src={`https://file.rendit.io/n/b82SVgYRbMmNluoCJanG.svg`} />
                        <Group4>
                            <Element4 />
                            <Text8>Marketing Strategy</Text8>
                        </Group4>
                        <Line3 />
                        <Group5>
                            <Element5 />
                            <Text9>Video Marketing</Text9>
                        </Group5>
                        <Line4 />
                        <Group6>
                            <Element6 />
                            <Text10>Search Engine Optimization</Text10>
                        </Group6>
                        <Line5 />
                        <Group7>
                            <Element7 />
                            <Text11>Social Media Marketing</Text11>
                        </Group7>
                        <Line6 />
                        <Group8>
                            <Element8 />
                            <Text12>Web Analytics</Text12>
                        </Group8>
                        <Line7 />
                        <Group9>
                            <Element9 />
                            <Text13>Web Development</Text13>
                        </Group9>
                    </FlexColumn1>
                </Panel>
            </Background>
            <Image1 src={`undefined`} />
        </StudentsignupRootRootRoot>
    );
};

const StudentsignupRootRootRoot = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13.13% 27.5% 14.17% 27.43%;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/d1A5dfHd1bS2uKcBQXe7.svg");
`;
const Panel = styled.div`
  height: 571px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6.32% 7.74% 6.32% 7.9%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Group = styled.div`
  width: 100.09%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 4.57% 0px;
  padding: 1.69% 0px 1.66% 0px;
`;
const Text1 = styled.div`
  width: 25.02%;
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
  width: 100.09%;
  height: 13.6px;
  position: relative;
`;
const Text2 = styled.div`
  width: 16.8%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Dropshadow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 3.75% 0px;
  padding: 2.37% 61.55% 2.28% 5.11%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text3 = styled.div`
  width: 100%;
  height: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 23.2%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  height: 299px;
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
const Group1 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.1% 0px;
  padding: 0px 4.03%;
`;
const Element1 = styled.div`
  width: 2.51%;
  height: 8.6px;
  align-self: flex-end;
  margin: 0px 0px 0.72% 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text5 = styled.div`
  width: 18.13%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 3.08% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group2 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 3.05% 0px;
  padding: 0px 4.03%;
`;
const Element2 = styled.div`
  width: 2.51%;
  height: 8.6px;
  margin: 0.74% 0px 0px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text6 = styled.div`
  width: 24.27%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line1 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.13% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group3 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.49% 0px;
  padding: 0px 4.03%;
`;
const Element3 = styled.div`
  width: 2.51%;
  height: 8.6px;
  align-self: flex-end;
  margin: 0px 0px 0.69% 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text7 = styled.div`
  width: 22.81%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line2 = styled.img`
  width: 100%;
  height: 0.75px;
  margin: 0px 0px 2.69% 0px;
`;
const Group4 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.8% 0px;
  padding: 0px 4.03%;
`;
const Element4 = styled.div`
  width: 2.51%;
  height: 8.6px;
  margin: 0.77% 0px 0px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text8 = styled.div`
  width: 28.36%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line3 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.37% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group5 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.41% 0px;
  padding: 0px 4.03%;
`;
const Element5 = styled.div`
  width: 2.51%;
  height: 8.6px;
  align-self: flex-end;
  margin: 0px 0px 0.66% 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text9 = styled.div`
  width: 24.56%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line4 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.76% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group6 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.83% 0px;
  padding: 0px 4.03%;
`;
const Element6 = styled.div`
  width: 2.51%;
  height: 8.6px;
  margin: 0.8% 0px 0px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text10 = styled.div`
  width: 41.52%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line5 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.35% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group7 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.97% 0px;
  padding: 0px 4.03%;
`;
const Element7 = styled.div`
  width: 2.51%;
  height: 8.6px;
  margin: 0.66% 0px 0px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text11 = styled.div`
  width: 34.8%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line6 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.2% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group8 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2.58% 0px;
  padding: 0px 4.03%;
`;
const Element8 = styled.div`
  width: 2.51%;
  height: 8.6px;
  align-self: flex-end;
  margin: 0px 0px 0.77% 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text12 = styled.div`
  width: 21.05%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Line7 = styled.div`
  width: 100%;
  height: 0px;
  margin: 0px 0px 2.59% 0px;
  border-width: 0.75px 0px 0px 0px;
  border-style: solid;
  border-color: #e1e1e1;
`;
const Group9 = styled.div`
  width: 91.94%;
  height: 15.5px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 4.03%;
`;
const Element9 = styled.div`
  width: 2.51%;
  height: 8.6px;
  margin: 0.69% 0px 0px 0px;
  border-width: 0.7px;
  border-radius: 2px;
  border-style: solid;
  border-color: #000000;
`;
const Text13 = styled.div`
  width: 27.78%;
  height: 15.5px;
  color: #151515;
  font-size: 11px;
  font-family: Open Sans;
`;
const Image1 = styled.img`
  height: 0px;
`;
