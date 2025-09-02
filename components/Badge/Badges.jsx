import BadgeSet from "./BadgeSet";

export default function Badges() {
  return (
    <>
      <div className="badge-holder">
        <h1>badges</h1>
        <div className="badges-container">
          <BadgeSet shape="square" />
          <BadgeSet shape="pill" />
        </div>
      </div>
    </>
  );
}
