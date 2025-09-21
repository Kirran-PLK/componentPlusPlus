import Banner from "./Banner";
import useToggle from "../../hooks/useToggle";

export default function Banners() {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
  });
  return (
    <div className="banners">
      {open ? (
        <>
          <h1 style={{ alignSelf: "center" }}>Banners</h1>
          <h2>Single Line </h2>
          <Banner msg="success" />
          <Banner msg="warning" />
          <Banner msg="error" />
          <Banner msg="neutral" />

          <h2>Multi line</h2>
          <Banner
            msg="success"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
          <Banner
            msg="warning"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
          <Banner
            msg="error"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
          <Banner
            msg="neutral"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
        </>
      ) : null}
      <button onClick={toggleOpen} className="badge-btn">
        {open ? "Hide Banners" : "See Banners"}
      </button>
    </div>
  );
}
