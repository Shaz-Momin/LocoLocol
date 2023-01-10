import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import homepage from "./homepage/homepage";
import marketplace from "./marketplace/marketplace";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route exact path='/' element={<homepage/>}/>
                 <Route path="marketplace" element={<marketplace/>}/>
            </Routes>
        </BrowserRouter>
    );
}


