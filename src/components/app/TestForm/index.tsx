import { Button } from "@chakra-ui/react";
import { useStepper } from "../../../app/use-stepper";
import { FormSteps } from "../../../entities/testForm/models/steps";
import { StepOne } from "./FormSteps/StepOne";
import { StepResult } from "./FormSteps/StepResult";
import { StepThree } from "./FormSteps/StepThree";
import { StepTwo } from "./FormSteps/StepTwo";
import styles from "./index.module.css";
import { ProgressCellBar } from "./ProgressCellBar";
import { FormProvider, useForm } from "react-hook-form";
import { StepFour } from "./FormSteps/StepFour";

const formStepComponents = {
  [FormSteps.StepOne]: StepOne,
  [FormSteps.StepTwo]: StepTwo,
  [FormSteps.StepThree]: StepThree,
  [FormSteps.StepFour]: StepFour,
  [FormSteps.StepResult]: StepResult,
};

export const TestForm = () => {
  const { currentStep, goPrevStep } = useStepper();
  const StepComponent = formStepComponents[currentStep];
  const methods = useForm();
  const isSubmitButtonVisible = currentStep !== FormSteps.StepResult;
  const isBackButtonVisible = currentStep !== FormSteps.StepOne;

  return (
    <FormProvider {...methods}>
      <div className={styles["container"]}>
        <ProgressCellBar />
        <StepComponent />

        <div className={styles["actions"]}>
          {isBackButtonVisible && (
            <Button
              colorScheme="gray"
              variant="solid"
              size={"sm"}
              onClick={goPrevStep}
            >
              Назад
            </Button>
          )}

          {isSubmitButtonVisible && (
            <Button
              colorScheme="red"
              variant="solid"
              size={"sm"}
              type="submit"
              form="question-form"
            >
              Ответить
            </Button>
          )}
        </div>
      </div>
    </FormProvider>
  );
};
