import Countdown from "react-countdown";
import styles from "./index.module.css";
import { useStepper } from "../../../../app/use-stepper";

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
  const { setIsTimeOver } = useStepper();
  const handleComplete = () => {
    setIsTimeOver(true);
  };

  const fifteenMinutes = 15 * 60 * 1000;
  const timeLeft = Date.now() + fifteenMinutes;

  return (
    <div className={styles["container"]}>
      <Countdown
        date={timeLeft}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
};
