import React from "react";

function Joke(props) {
    return (
        <div>
            <h3>{props.setup}</h3>
            <h3>{props.oneLiner}</h3>
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke;