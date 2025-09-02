import BadgeShape from "./Badge";
export default function BadgeSet({ shape }) {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  return (
    <div className="badgeSet-container">
      {colors.map((color) => (
        <BadgeShape key={color} color={color} shape={shape} />
      ))}
    </div>
  );
}
