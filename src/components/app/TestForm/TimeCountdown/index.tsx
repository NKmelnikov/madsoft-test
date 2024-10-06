import Countdown from "react-countdown";
import styles from "./index.module.css";

type rendererProps = {
  minutes: number;
  seconds: number;
  completed: boolean;
};

const renderer = ({ minutes, seconds, completed }: rendererProps) => {
  if (completed) {
    return <span className={styles["completed"]}>Время истекло!</span>;
  } else {
    return (
      <span>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    );
  }
};
export const TimeCountdown = () => {
  const fifteenMinutes = 15 * 60 * 1000;

  return (
    <div className={styles["container"]}>
      <Countdown date={Date.now() + fifteenMinutes} renderer={renderer} />
    </div>
  );
};
