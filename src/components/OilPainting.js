import React, { useRef, useEffect, useState } from "react";
import "../App.css";

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

function OilPainting() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [colour, setColour] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.strokeStyle = colour;
    context.fillStyle = colour;
    context.lineWidth = 3;
    contextRef.current = context;
  }, [colour]);

  const startDrawing = () => {
    const newColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColour(newColour);
    contextRef.current.strokeStyle = newColour;
    contextRef.current.fillStyle = newColour;
  };

  const continueDrawing = (e) => {
    if (!contextRef.current) return;
    const { clientX, clientY } = e;
    const distance = Math.sqrt(
      Math.pow(clientX - contextRef.current.canvas.offsetLeft, 2) +
        Math.pow(clientY - contextRef.current.canvas.offsetTop, 2)
    );
    const a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5);
    const r = Math.random() - 0.5;
    const size = (Math.random() * 15) / distance;
    const startX = clientX + 30;
    const startY = clientY + 30;
    const newDistX = (clientX - startX) * Math.sin(0.5) + clientX;
    const newDistY = (clientY - startY) * Math.cos(0.5) + clientY;
    contextRef.current.lineWidth = getRandomInt(1, 30) + size;
    contextRef.current.strokeWidth = getRandomInt(1, 3) + size;
    contextRef.current.lineCap = "round";
    contextRef.current.lineJoin = "round";
    contextRef.current.beginPath();
    contextRef.current.moveTo(startX, startY);
    contextRef.current.quadraticCurveTo(newDistX, newDistY, clientX, clientY);
    contextRef.current.strokeStyle = colour;
    contextRef.current.fillStyle = colour;
    contextRef.current.moveTo(startX + a, startY + a);
    contextRef.current.lineTo(startX + r + a, startY + r + a);
    contextRef.current.stroke();
    contextRef.current.fill();
    contextRef.current.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div id="wrap">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseLeave={clearCanvas}
      ></canvas>
    </div>
  );
}

export default OilPainting;
