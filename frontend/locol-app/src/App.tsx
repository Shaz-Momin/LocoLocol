import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import logo from './logo.svg';
import { Navbar } from "./Navbar";
import { Homepage } from "./homepage/homepage";
import { Marketplace } from "./marketplace/marketplace";
import { Board } from "./board/board";
import { Community } from "./community/community";
import styled from "styled-components";




const RoutesContainer = (props: {}) => {
  // tuple of text displayed on the button and the link it leads to
  const links: [string, string][] = [
    // const links = [

    // [<Text13>Home</Text13>, "\home"],
    // [<Text14>Marketplace</Text14>, "market"],
    // [<Text15>Board</Text15>, "\bord"],
    // [<Text16>Community</Text16>, "community"]
    ["Home", "/home"],
    ["Marketplace", "/market"],
    ["Board", "/board"],
    ["Community", "/community"]
  ];

  const path = useLocation().pathname;
  const onLoginPage = ["/"].includes(path);

  return (
    <Fragment>
      <div className="content">
        <Navbar options={links} currPath={path} simple={onLoginPage} />

        <div>current path: {path}</div>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/home"} element={<Homepage />} />
          <Route path={"/market"} element={<Marketplace />} />
          <Route path={"/board"} element={<Board />} />
          <Route path={"/community"} element={<Community />} />
        </Routes>
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;


const Text13 = styled.div`
  width: 51px;
  height: 23px;
  align-self: flex-start;
  color: #00416b;
  font-size: 17px;
  font-weight: 700;
  font-family: Open Sans;
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
  margin: 26px 0px 0px 0px;
  color: #575757;
  font-size: 17px;
  font-weight: 600;
  font-family: Open Sans;
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
  margin: 26px 0px 0px 0px;
  color: #575757;
  font-size: 17px;
  font-weight: 600;
  font-family: Open Sans;
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
  margin: 26px 256px 0px 0px;
  color: #575757;
  font-size: 17px;
  font-weight: 600;
  font-family: Open Sans;
  white-space: nowrap;
`;
const Text17 = styled.div`
  width: 140px;
  height: 27px;
  left: 1092px;
  top: 40.5px;
  position: absolute;
  color: #ca8342;
  font-size: 20px;
  font-weight: 600;
  font-family: Open Sans;
  text-align: center;
  transform: rotate(-0.22deg);
  transform-origin: 0px 0px;
`;