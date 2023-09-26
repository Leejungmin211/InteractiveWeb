import { useEffect, useState } from "react";

export default function MousePointer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
    const textElements = document.querySelectorAll(".hover-size-text");

    const mouseEnterHandler = () => {
      setIsHovered(true);
    };

    const mouseLeaveHandler = () => {
      setIsHovered(false);
    };

    textElements.forEach((textElement) => {
      textElement.addEventListener("mouseenter", mouseEnterHandler);
      textElement.addEventListener("mouseleave", mouseLeaveHandler);
    });

    return () => {
      textElements.forEach((textElement) => {
        textElement.removeEventListener("mouseenter", mouseEnterHandler);
        textElement.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`mouse-pointer ${isHovered && `mouse-hover`}`}
        style={{
          transform: isHovered
            ? `translate(${mousePos.x - 25}px, ${mousePos.y - 25}px)`
            : `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      ></div>
    </>
  );
}
