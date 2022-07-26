import React from "react";
import Joke from "./Components/Joke.jsx";
import Suggestions from "./Components/Suggestions.jsx"

function App() {
    return (
        <div className="app">
            <Suggestions/>
            <Joke
                oneLiner="Just to clarify, when I say I cleaned my room,
                I mean that I cleared a path from the door to the bed."
            />
            <Joke
                setup="Why are frogs so happy?"
                punchline="They eat whatever bugs them."
            />
            <Joke
                setup="Want to hear a construction joke?"
                punchline="Sorry, I'm still working on it."
                isFunny={false}
            />
            <Joke
                setup="Why should I not fart in an Apple store?"
                punchline="They don't have windows."
            />
            <Joke
                setup="What is the tallest building in the world?"
                punchline="The library, because it has so many stories."
            />
            <Joke
                setup="How do you know carrots are good for your eyes?"
                punchline="You never see a rabbit wearing glasses."
            />
        </div>
    )
} 

export default App;