import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import NavBar from "./components/NavBar";

library.add(faChevronDown, faExternalLinkAlt);

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
        </div>
    );
}

export default App;
