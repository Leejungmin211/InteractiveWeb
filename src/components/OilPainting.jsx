import { useRef, useEffect, useState } from "react";
import "../App.css";

export default function OilPainting() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [startPos, setStartPos] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const [prevPos, setPrevPos] = useState({ x: window.innerWidth, y: window.innerHeight });
  const [dist, setDist] = useState({ x: 0, y: 0 });
  const [colour, setColour] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    contextRef.current = context;
  }, []);

  const startDrawing = () => {
    const newColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColour(newColour);

    contextRef.current.strokeStyle = newColour;
    contextRef.current.fillStyle = newColour;
  };

  const continueDrawing = (event) => {
    if (!contextRef.current) return;
    const { clientX, clientY } = event;
    const distance = Math.sqrt(
      Math.pow(prevPos.x - startPos.x, 2) + Math.pow(prevPos.y - startPos.y, 2)
    );
    const a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5);
    const r = Math.random() - 0.5;
    const size = (Math.random() * 15) / distance;
    const newDistX = (prevPos.x - startPos.x) * Math.sin(0.5) + startPos.x;
    const newDistY = (prevPos.y - startPos.y) * Math.cos(0.5) + startPos.y;

    setDist({x: newDistX, y: newDistY})
    setStartPos({ x: prevPos.x, y: prevPos.y });
    setPrevPos({ x: clientX, y: clientY });

    const randomWidth =
      (Math.random() + 20 / 10 - 0.5) * size +
      (1 - Math.random() + 30 / 20 - 0.5) * size;

    contextRef.current.lineWidth = randomWidth;
    contextRef.current.strokeWidth = randomWidth;
    contextRef.current.lineCap = "round";
    contextRef.current.lineJoin = "round";
    contextRef.current.beginPath();
    contextRef.current.moveTo(startPos.x, startPos.y);
    contextRef.current.quadraticCurveTo(dist.x, dist.y, prevPos.x, prevPos.y);
    contextRef.current.strokeStyle = colour;
    contextRef.current.fillStyle = colour;
    contextRef.current.moveTo(startPos.x + a, startPos.y + a);
    contextRef.current.lineTo(startPos.x + r + a, startPos.y + r + a);
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
    <div className="wrap">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onDoubleClick={clearCanvas}
      ></canvas>
    </div>
  );
}

