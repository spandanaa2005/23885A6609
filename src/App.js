// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React, { useState } from "react";
import { Copy } from "lucide-react";
import "./styles.css";

const generateShortUrl = (originalUrl) => {
  const randomStr = Math.random().toString(36).substring(2, 8); // random 6-char
  return `https://sho.rt/${randomStr}`;
};


export default function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (originalUrl.trim()) {
      const short = generateShortUrl(originalUrl);
      setShortUrl(short);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>🔗 URL Shortener</h2>

        <input
          type="text"
          placeholder="Enter a long URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />

        <button onClick={handleShorten}>Shorten URL</button>

        {shortUrl && (
          <div className="result-box">
            <span>{shortUrl}</span>
            <button onClick={handleCopy} title="Copy">
              <Copy size={16} />
            </button>
            {copied && <span className="copied-text">Copied!</span>}
          </div>
        )}
      </div>
    </div>
  );
}
