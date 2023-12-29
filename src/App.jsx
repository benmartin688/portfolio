import { createRoot } from "react-dom/client";
import Title from "./Title";
import Navigation from "./Navigation";
import Tech from "./Tech";

function App() {
  return (
    <div>
      <Navigation />
      <div className="flex h-screen justify-center items-center">
        <Title />
        <Tech />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
