import styles from "./index.module.css";
import { FormSteps } from "../../../../entities/testForm/models/steps";
import { ProgressCell } from "./ProgressCell";
import { useStepper } from "../../../../app/use-stepper";

export const ProgressCellBar = () => {
  const { currentStep, currentStepIndex } = useStepper();

  return (
    <div className={styles["container"]}>
      {Object.values(FormSteps).map((step, index) => {
        const isActive = currentStepIndex === index;
        const isCompleted =
          currentStepIndex > index || currentStep === FormSteps.StepResult;

        return (
          <ProgressCell key={step} active={isActive} completed={isCompleted} />
        );
      })}
    </div>
  );
};
