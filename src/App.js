import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faChevronUp,
    faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

library.add(faChevronDown, faExternalLinkAlt, faChevronUp);

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <Footer></Footer>
        </div>
    );
}

export default App;
