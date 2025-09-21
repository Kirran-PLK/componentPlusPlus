import ReactDOM from "react-dom/client";
import Badges from "./components/Badge/Badges";
import Banners from "./components/Banners/Banners";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <Badges />
        <Banners />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
