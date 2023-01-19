import { Homepage } from "./homepage/homepage";
import { Marketplace } from "./marketplace/marketplace";
import { Board } from "./board/board";
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
            </Routes>
        </BrowserRouter>
    );
}
