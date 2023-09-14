import { useState } from "react";
import "../App.css";

export default function HoverItem({ item }) {
  const { id, text, url } = item && item;
  const [clipX, setClipX] = useState(0);
  const [clipY, setClipY] = useState(0);
  const [clipRadius, setClipRadius] = useState(0);

  const getCoordinates = (e) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
  };

  const mouseEnterHandler = () => {
    setClipRadius(100);
  };

  const mouseMoveHandler = (e) => {
    console.log(e.clientX);
    const { clientX, clientY } = getCoordinates(e);
    setClipRadius(100);
    setClipX(clientX);
    setClipY(clientY);
  };

  const mouseLeaveHandler = () => {
    setClipRadius(0);
  };

  return (
    <li
      className="hover-li-list"
      onMouseEnter={mouseEnterHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <svg viewBox="0 0 290 290" preserveAspectRatio="xMidYMid slice">
        <defs>
          <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
            <circle cx={clipX} cy={clipY} r={clipRadius} fill="#000" />
          </clipPath>
        </defs>
        {url && (
          <image
            xlinkHref={url}
            alt={text}
            style={{
              clipPath: `url(#clip-${id})`,
            }}
          />
        )}
      </svg>
    </li>
  );
}
