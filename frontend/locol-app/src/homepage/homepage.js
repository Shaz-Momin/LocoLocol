import React from "react";
import styled from "styled-components";
import "./homepage.css";
import { Navigate, redirect } from "react-router-dom";
// import { routeManager } from "../../routeManager";
import { render } from "@testing-library/react";

// export const Homepage = ({}) => {
  function homepage() {
    return (
      <div id = "HomepgSTYLEDRootRoot">
        <div className = "FlexRow">
          <div className = "Group1">
            <text1>Starting{" "}
              <text2>Small
                <br /></text2><text3>To Build </text3>
                <text4>Big</text4></text1>
                <div className = "Group2">
                  <text5>The freelance marketplace where
                    <text6> small businesses</text6>
                    <text7> can hire</text7>
                    <text8> student freelancers</text8>
                    <text9> to complete diigtal marketing tasks.</text9>
                  </text5>
                </div>
            </div>
        </div>
        <div className = "WhiteFlexColumn">

        </div>
        <div className = "MidnightBlueFlexColumn">

        </div>
        <div className = "FlexRow8">
          
        </div>
        <div className = "Group37">

        </div>
      </div>
    );
}

export default homepage;