import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
// import logo from './logo.svg';
import { Navbar } from "./Navbar";
import  Homepage  from "./homepage/homepage";
import { Marketplace } from "./marketplace/marketplace";
import { Board } from "./board/board";
import { Community } from "./community/community";
import { LoginStudent } from "./login/login";
import { LoginBusiness } from "./login/login2";
import { Signup_what_are_you } from "./signup/what_are_you/signup_what_are_you";
import { BusinesssignupRootRootRootRoot } from "./signup/services_interest/business_services";
import { BusinesssignupRootRootRoot1 } from "./signup/create/business_create";
import { BusinesssignupRootRoot1 } from "./signup/business_info/business_information";
import { Signup_type_of_account } from "./signup/what_type_of_account/signup_type_of_account";
import  Signup_education  from "./signup/education/signup_education";
import  Signup_about_you  from "./signup/about_you/signup_about_you";
import { Signup_create } from "./signup/create/signup_create";
import { Calendar } from "./calendar/calendar";
import { Services } from "./services/services";
import { Student_profile } from "./student_profile/student_profile";
import { Business_profile } from "./business_profile/business_profile";
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
    ["Community", "/community"],
    ["Login", "/login_student"],
    ["Signup", "/signup_person"], 
    // ["Account", "/signup_account"],
    // ["Education", "/signup_education"],
    // ["About", "/signup_about_you"],
    // ["Create", "/signup_create"],
    // ["Calendar", "/calendar"],
    // ["Services", "/services"],
    // ["StudentProfile", "/student_profile"],
    // ["BusinessProfile", "/business_profile"] 
  ];

    const path = useLocation().pathname;
    const onLoginPage = ["/"].includes(path);

    return (
        <Fragment>
            <div className="content">
                <Navbar options={links} currPath={path} simple={onLoginPage}/>

        {/* <div>current path: {path}</div> */}
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/home"} element={<Homepage />} />
          <Route path={"/market"} element={<Marketplace />} />
          <Route path={"/board"} element={<Board />} />
          <Route path={"/community"} element={<Community />} />
          <Route path={"/login_student"} element={<LoginStudent/>} />
          <Route path={"/login_business"} element={<LoginBusiness/>} />
          <Route path={"/signup_person"} element={<Signup_what_are_you/>} />
          <Route path={"/signup_account"} element={<Signup_type_of_account/>} />
          <Route path={"/signup_education"} element={<Signup_education/>} />
          <Route path={"/signup_about_you"} element={<Signup_about_you/>} />
          <Route path={"/signup_create"} element={<Signup_create/>} />
          <Route path={"/calendar"} element={<Calendar/>} />
          <Route path={"/services"} element={<Services/>} />
          <Route path={"/student_profile"} element={<Student_profile/>} />
          <Route path={"/business_profile"} element={<Business_profile/>} />
          <Route path={"/business_information"} element={<BusinesssignupRootRoot1/>} />
          <Route path={"/business_services"} element={<BusinesssignupRootRootRootRoot/>} />
          <Route path={"/business_create"} element={<BusinesssignupRootRootRoot1/>} />
        </Routes>
      </div>
    </Fragment>
  );
};

function App() {
    return (
        <BrowserRouter>
            <RoutesContainer/>
        </BrowserRouter>
    );

}


export default App;