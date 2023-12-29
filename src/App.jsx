import { createRoot } from "react-dom/client";
import Title from "./Components/Title";
import Navigation from "./Components/Navigation";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
      <Navigation />
      <div className="flex h-screen justify-center items-center">
        <Title />
        <Cards />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
