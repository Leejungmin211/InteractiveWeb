import "./App.css";
import AnimationButton from "./components/AnimationButton";
import MousePointer from "./components/MousePointer";
import TextAnimation from "./components/TextAnimation";

function App() {
  return (
    <main className="wrap">
      <MousePointer />
      <TextAnimation />
      <AnimationButton />
    </main>
  );
}

export default App;
