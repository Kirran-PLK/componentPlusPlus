import ColorPicker from "./ColorPicker/ColorPicker";

export default function Badge({ color, shape = "square" }) {
  const style = ColorPicker(color);
  return (
    <p className={`badge ${shape}`} style={style}>
      Badge
    </p>
  );
}
