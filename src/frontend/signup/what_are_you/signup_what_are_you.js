import React from "react";
import styled from "styled-components";

import "./signup_whatareyou.css";

export const Signup_what_are_you = ({}) => {
    return (
      <div id="signupRootRootRoot">
        <div id="background">
          <div id="panel">
            <text1_what>Welcome to Locol!</text1_what>
            <text2_what>What are you?</text2_what>
            <a href="/signup_account">
              {/* <button>
                <text3>Student</text3>
              </button>
            </a> */}
            <div id="button">
              <text3_what>Student</text3_what>
            </div>
          </a>
          <a href="">
            <div id="button">
              <text4_what>Business Owner</text4_what>
            </div>
            </a>
            <text5_what>Already have an account? <text6_what> </text6_what>
            <a href="/login"><text7_what>Login</text7_what></a>
            <text8_what> instead</text8_what></text5_what>
          </div>

        </div>
      </div>
    );
};

