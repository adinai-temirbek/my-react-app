import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [quote, setQuote] = useState("");

    const quotes = [
        "Keep pushing, great things take time! 🚀",
        "Coding is 90% debugging and 10% writing bugs on purpose.",
        "Every bug is just an undiscovered feature. 😄",
        "Small steps every day lead to big results. ✨",
    ];

    // Pick a random quote on initial render
    useState(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    // Function to get a new random quote
    const handleNewQuote = () => {
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(newQuote);
    };

    return (
        <>
            <div className="logos">
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1 className="title">Welcome to My Cool Vite + React App 🚀</h1>

            <div className="card">
                <button className="btn" onClick={() => setCount((c) => c + 1)}>
                    You clicked {count} times
                </button>

                <p>
                    This is my customized React project. Edit <code>src/App.jsx</code> and
                    save to see live updates!
                </p>
            </div>

            <div className="quote-box">
                <h3>✨ Today's Motivation ✨</h3>
                <p>{quote}</p>
                <button className="btn" onClick={handleNewQuote}>
                    New Quote
                </button>
            </div>

            <p className="read-the-docs">
                Click the logos above to learn more about Vite & React
            </p>
        </>
    );
}

export default App;
