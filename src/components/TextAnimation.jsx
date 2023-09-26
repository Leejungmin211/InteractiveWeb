import { useState } from "react";

export default function TextAnimation() {
  const [text, setText] = useState("FRONTEND DEVELOPER");
  let write = null;

  const mouseOverHandler = (e) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    // const splitText = e.target.innerText;
    const splitText = "Leejungmin";

    write = setInterval(() => {
      const newText = [...splitText]
        .map((letter, index) => {
          if (index < iteration) {
            return splitText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(newText);

      if (iteration >= splitText.length) {
        clearInterval(write);
      }
      iteration += 1;
    }, 50);
  };

  const mouseLeaveHandler = () => {
    clearInterval(write);
    setText("FRONTEND DEVELOPER");
  };

  return (
    <>
      <h1
        className="text-animation"
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {text}
      </h1>
    </>
  );
}
