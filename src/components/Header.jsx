import React from "react";
import "../styles/Header.css";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const Header = () => {
  const mousePosition = useMousePosition();
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate fontWeight based on mouse y position (inverted)
  const fontWeight =
    mousePosition.y !== null
      ? 800 - (mousePosition.y / windowHeight) * (800 - 300) // Inverted: goes up when mouse moves up
      : 400; // Default to 400 if mousePosition.y is null

  // Calculate scaleX based on mouse x position
  const scaleX =
    mousePosition.x !== null
      ? 0.9 + (mousePosition.x / windowWidth) * 0.1 // Scale from 0.9 to 1
      : 1; // Default to 1 if mousePosition.x is null

  const fontStyle = {
    fontWeight: Math.min(Math.max(fontWeight, 300), 800), // Ensure it stays within 400 to 800
    transform: `scaleX(${scaleX})`, // Apply horizontal scaling
  };

  return (
    <div className="box-for-hero-text">
      <span className="kyle-mcparland" style={fontStyle}>
        Front-End,<br/>
        Back-End &<br/>
        Database Design.
      </span>
      {/* <p className="test">{mousePosition.x} {mousePosition.y}</p> */}
    </div>
  );
};

export default Header;
