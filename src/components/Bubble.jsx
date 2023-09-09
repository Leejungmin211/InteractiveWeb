import React, { useState, useEffect } from "react";
import "../App.css";

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export default function Bubble() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const mouseLeaveHandler = () => {
      setMousePos({ x: -10, y: -10 });
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []); 

  useEffect(() => {
    const draw = setInterval(() => {
      if (mousePos.x > 0 && mousePos.y > 0) {
        const range = 15;
        const color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(
          0,
          255
        )}, ${getRandomInt(0, 255)})`;

        const sizeInt = getRandomInt(10, 40);
        const size = { height: sizeInt + "px", width: sizeInt + "px" };
        const left =
          getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px";
        const top =
          getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px";

        const newBall = {
          style: {
            transform: `translate(${left}, ${top})`,
            background: color,
            ...size,
          },
          id: Date.now(),
        };

        if (balls.length >= 50) {
          setBalls((prevBalls) => prevBalls.slice(balls.length - 49));
        }
        setBalls((prevBalls) => [...prevBalls, newBall]);
      }
    }, 1);

    return () => {
      clearInterval(draw);
    };
  }, [mousePos, balls]);

  return (
    <div id="wrap">
      {balls.map((ball) => (
        <div key={ball.id} className="pointer" style={ball.style}></div>
      ))}
    </div>
  );
}

