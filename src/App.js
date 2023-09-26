import "./App.css";
import HoverLetter from "./components/HoverLetter";
import MousePointer from "./components/MousePointer";
import TextAnimation from "./components/TextAnimation";

function App() {
  return (
    <main className="wrap">
      <MousePointer />
      <TextAnimation />
      <HoverLetter />
    </main>
  );
}

export default App;
