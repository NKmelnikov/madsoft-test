import styles from "./index.module.css";
import { FormSteps } from "../../../../entities/testForm/model";
import { ProgressCell } from "../ProgressCell";

export const ProgressCellBar = () => {
  return (
    <div className={styles["container"]}>
      {Object.values(FormSteps).map((step) => {
        return <ProgressCell key={step} active={false} completed={false} />;
      })}
    </div>
  );
};
