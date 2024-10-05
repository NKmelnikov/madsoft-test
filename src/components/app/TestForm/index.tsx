import styles from "./index.module.css";
import { ProgressCellBar } from "./ProgressCellBar";

export const TestForm = () => {
  return (
    <div className={styles["container"]}>
      <ProgressCellBar />
    </div>
  );
};
