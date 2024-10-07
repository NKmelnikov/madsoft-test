import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStepper } from "../../../app/use-stepper";
import {
  FormData,
  formDefaultValues,
  FormSteps,
  sessionStorageFormDataKey,
} from "../../../entities/testForm/models/steps";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "../../../utils/storage";
import { StepFour } from "./FormSteps/StepFour";
import { StepOne } from "./FormSteps/StepOne";
import { StepResult } from "./FormSteps/StepResult";
import { StepThree } from "./FormSteps/StepThree";
import { StepTwo } from "./FormSteps/StepTwo";
import styles from "./index.module.css";
import { ProgressCellBar } from "./ProgressCellBar";

const formStepComponents = {
  [FormSteps.StepOne]: StepOne,
  [FormSteps.StepTwo]: StepTwo,
  [FormSteps.StepThree]: StepThree,
  [FormSteps.StepFour]: StepFour,
  [FormSteps.StepResult]: StepResult,
};

const sessionSavedFormData = loadFromSessionStorage<FormData>(
  sessionStorageFormDataKey,
);

export const TestForm = () => {
  const { currentStep, goPrevStep } = useStepper();

  const methods = useForm({
    defaultValues: sessionSavedFormData || formDefaultValues,
  });

  const isSubmitButtonVisible = currentStep !== FormSteps.StepResult;
  const isBackButtonVisible = currentStep !== FormSteps.StepOne;

  useEffect(() => {
    const subscription = methods.watch((value) => {
      saveToSessionStorage(sessionStorageFormDataKey, value);
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  const StepComponent = formStepComponents[currentStep];

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
              size="sm"
              onClick={goPrevStep}
            >
              Назад
            </Button>
          )}

          {isSubmitButtonVisible && (
            <Button
              colorScheme="red"
              variant="solid"
              size="sm"
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
