import { Homepage } from "./homepage/homepage";
import { Marketplace } from "./marketplace/marketplace";
import { Board } from "./board/board";
import { Community } from "./community/community";
import { Login } from "./login/login";
import { Signup_what_are_you } from "./signup/what_are_you/signup_what_are_you";
import { Signup_type_of_account } from "./signup/what_type_of_account/signup_type_of_account";
import { Signup_education } from "./signup/education/signup_education";
import { Signup_about_you } from "./signup/about_you/signup_about_you";
import { Signup_create } from "./signup/create/signup_create";
import {Route, Routes, BrowserRouter} from 'react-router-dom';

export default function App() {
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/marketplace" element={<Marketplace/>} />
                <Route path="/board" element={<Board/>} />
                <Route path="/community" element={<Community/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup_person" element={<Signup_what_are_you/>} />
                <Route path="/signup_account" element={<Signup_type_of_account/>} />
                <Route path="/signup_education" element={<Signup_education/>} />
                <Route path="/signup_about_you" element={<Signup_about_you/>} />
                <Route path="/signup_create" element={<Signup_create/>} />
            </Routes>
        </BrowserRouter>
    );
}


