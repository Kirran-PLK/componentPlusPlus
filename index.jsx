import ReactDOM from "react-dom/client";
import Badges from "./components/Badge/Badges";
import SingleLineBanners from "./components/Banners/SingleLineBanners";

function App() {
  return (
    <>
      <Badges />
      <SingleLineBanners />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
