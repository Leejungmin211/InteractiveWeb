import { useState } from "react";
import "../App.css";

export default function HoverItem({ item }) {
  const { id, text, url } = item && item;
  const [clipX, setClipX] = useState(0);
  const [clipY, setClipY] = useState(0);
  const [clipRadius, setClipRadius] = useState(0);

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    const svgElement = document.getElementById(`${id}`);
    setClipRadius(150);

    if (svgElement) {
      const svgRect = svgElement.getBoundingClientRect();
      const svgX = svgRect.left;
      const svgY = svgRect.top;
      const clipX = clientX - svgX;
      const clipY = clientY - svgY;

      setClipX(clipX);
      setClipY(clipY);
    }
  };

  const mouseLeaveHandler = () => {
    const svgElement = document.getElementById(`${id}`);
    if (svgElement) {
      setClipRadius(0);
    }
  };

  return (
    <li
      className="hover-li-list"
      onMouseEnter={mouseMoveHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <svg
        id={`${id}`}
        viewBox="0 0 290 290"
        preserveAspectRatio="xMidYMid slice"
        className="hover-svg"
      >
        {url && (
          <defs>
            <clipPath id={`clip-${id}`} clipPathUnits="userSpaceOnUse">
              <circle cx={clipX} cy={clipY} r={clipRadius} fill="transparent" />
            </clipPath>
          </defs>
        )}
        {url && (
          <image
            href={url}
            alt={text}
            className="hover-image"
            style={{ clipPath: `url(#clip-${id})` }}
          />
        )}
      </svg>
    </li>
  );
}
