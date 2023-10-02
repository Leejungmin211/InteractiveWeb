import { useEffect, useState } from "react";

export default function TextAnimation() {
  const [text, setText] = useState("FRONTEND DEVELOPER");
  const [write, setWrite] = useState(null);

  useEffect(() => {
    return () => {
      if (write !== null) {
        clearInterval(write);
      }
    };
  }, [write]);

  const mouseOverHandler = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const splitText = "Leejungmin";
    let iteration = 0;

    const intervalId = setInterval(() => {
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
        clearInterval(intervalId);
      }
      iteration += 1;
    }, 50);

    setWrite(intervalId);
  };

  const mouseLeaveHandler = () => {
    if (write !== null) {
      clearInterval(write);
      setWrite(null);
    }
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
