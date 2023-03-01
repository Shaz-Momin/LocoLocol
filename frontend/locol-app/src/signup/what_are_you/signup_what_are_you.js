import React from "react";
import styled from "styled-components";

import "./signup_whatareyou.css";

export const Signup_what_are_you = ({}) => {
    return (
      <div id="signupRootRootRoot">
        <div id="background">
          <div id="panel">
            <text1>Welcome to Locol!</text1>
            <text2>What are you?</text2>
            <a href="/signup_account">
              {/* <button>
                <text3>Student</text3>
              </button>
            </a> */}
            <div id="button">
              <text3>Student</text3>
            </div>
          </a>
          <a href="">
            <div id="button">
              <text4>Business Owner</text4>
            </div>
            </a>
            <text5>Already have an account? <text6> </text6>
            <a href="/login"><text7>Login</text7></a>
            <text8> instead</text8></text5>
          </div>

        </div>
      </div>
    );
};

/*
width:150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 17.72% 3.08% 0px;
    margin-left: 45px;
    padding: 1.7% 51.46% 1.76% 4.31%;
    border-width: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #bdbdbd;
    box-shadow: 0px 5px 25px 0px #02375f;
    margin-bottom: 20px;
     */