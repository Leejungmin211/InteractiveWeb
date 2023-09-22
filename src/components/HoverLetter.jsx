const STACK = [
  "HTML",
  "CSS",
  "Javascript",
  "Next.js",
  "Redux",
  "React",
  "TypeScript",
  "Git",
  "axois",
  "TailwindCSS",
  "Styled-components",
  "Zustand",
];

export default function HoverLetter() {
  const groupedStack = [];
  const groupSize = 3;

  for (let i = 0; i < STACK.length; i += groupSize) {
    groupedStack.push(STACK.slice(i, i + groupSize));
  }

  return (
    <>
      <div className="flex-container">
        {groupedStack.map((group, groupIndex) => (
          <ul key={groupIndex} className="flex-text">
            {group.map((item, index) => (
              <li key={index} className="hover-size-text">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
