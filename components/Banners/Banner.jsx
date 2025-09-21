import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner({ msg, text }) {
  let title;
  const style = {};
  const txtColor = {};
  let emoji = {};

  switch (msg) {
    case "success":
      title = "Congratulations!";
      style.backgroundColor = "#ECFDF5";
      style.color = "#065F46";
      txtColor.color = "#047857";
      emoji = (
        <FontAwesomeIcon
          className="check-icon"
          icon={faCircleCheck}
          style={{ color: "#34D399" }}
        />
      );
      break;
    case "warning":
      title = "Attention";
      style.backgroundColor = "#FFFBEB";
      style.color = "#92400E";
      txtColor.color = "#B45309";
      emoji = (
        <FontAwesomeIcon
          className="check-icon"
          icon={faTriangleExclamation}
          style={{ color: "#FBBF24" }}
        />
      );
      break;
    case "error":
      title = "There is a problem with your application";
      style.backgroundColor = "#FEF2F2";
      style.color = "#92400E";
      txtColor.color = "#B45309";
      emoji = (
        <FontAwesomeIcon
          className="check-icon"
          icon={faCircleXmark}
          style={{ color: "#F87171" }}
        />
      );
      break;
    case "neutral":
      title = "Update available !";
      style.backgroundColor = "#EFF6FF";
      style.color = "#1E40AF";
      txtColor.color = "#1C51B9";
      emoji = (
        <FontAwesomeIcon
          className="check-icon"
          icon={faCircleExclamation}
          style={{ color: "#60A5FA" }}
        />
      );
      break;
  }

  const txt = text != null ? <p style={txtColor}> {text} </p> : null;
  return (
    <>
      <div
        className="msg-container"
        style={{ backgroundColor: style.backgroundColor }}
      >
        <div className="emoji-msg-holder">
          {emoji}
          <p style={{ color: style.color }}>{title}</p>
        </div>
        {txt}
      </div>
    </>
  );
}
