import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <Star color="pink" isFilled />
            <Star color="magenta" />
            <Star color="indigo" isFilled />
            <h2>Rating Component:</h2>
            <Rating stars={4} />
            <Rating stars={0} />
            {/* <h2>A Star Component on its own:</h2>
            <Star color="purple" />
            <h3>Rating Components:</h3>
            <Rating stars={5} />
            <Rating stars={3} /> */}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
