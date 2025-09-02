import ReactDOM from "react-dom/client";
import Badges from "./components/Badge/Badges";

function App() {
  return (
    <>
      <Badges />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
