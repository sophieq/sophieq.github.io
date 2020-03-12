import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faChevronDown, faExternalLinkAlt);

function App() {
    return (
        <div className="App">
            <Home></Home>
            <Experience></Experience>
        </div>
    );
}

export default App;
