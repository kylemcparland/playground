import React, { useState, useEffect } from "react";
import "../styles/Terminal.css";

const codeString = `const TypingAnimation = (props) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const typingSpeed = 7;
  const code = props.code;

  // Initialize typing on mount...
  useEffect(() => {
    // Function to add character to code string...
    const typeCode = () => {
      if (typingIndex < code.length - 1) {
        setDisplayedCode((prev) => prev + code[typingIndex]);
        setTypingIndex((prevIndex) => prevIndex + 1);
      }
    };

    // Interval to call typeCode function...
    const typingInterval = setInterval(typeCode, typingSpeed);
`;

const TypingAnimation = (props) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const typingSpeed = 7;
  const code = props.code;

  // Initialize typing on mount...
  useEffect(() => {
    // Function to add character to code string...
    const typeCode = () => {
      if (typingIndex < code.length - 1) {
        setDisplayedCode((prev) => prev + code[typingIndex]);
        setTypingIndex((prevIndex) => prevIndex + 1);
      }
    };

    // Interval to call typeCode function...
    const typingInterval = setInterval(typeCode, typingSpeed);

    // Cleanup on unmount...
    return () => clearInterval(typingInterval);
  }, [typingIndex, code]);

  return (
    <div className="terminal-code">
      <pre>{displayedCode}</pre>
    </div>
  );
};

const Terminal = () => {
  return (
    <div className="terminal-window">
      <TypingAnimation code={codeString} />
    </div>
  );
};

export default Terminal;
