import BadgeSet from "./BadgeSet";
import useToggle from "../../hooks/useToggle";
export default function Badges() {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
  });
  return (
    <>
      <div className="badge-holder">
        {open ? (
          <>
            <h1>badges</h1>
            <div className="badges-container">
              <BadgeSet shape="square" />
              <BadgeSet shape="pill" />
            </div>
          </>
        ) : null}
        <button onClick={toggleOpen} className="badge-btn">
          {open ? "Hide Badges" : "See Badges"}
        </button>
      </div>
    </>
  );
}
