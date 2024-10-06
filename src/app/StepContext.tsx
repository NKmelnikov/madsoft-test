import { createContext, useCallback, useMemo, useState } from "react";
import { FormSteps } from "../entities/testForm/model";

type StepType = keyof typeof FormSteps;

type StepsContextType = {
  currentStep: StepType;
  currentStepIndex: number;
  goNextStep: () => void;
  goPrevStep: () => void;
};

export const StepsContext = createContext<StepsContextType | undefined>(
  undefined,
);
const stepKeys = Object.keys(FormSteps) as StepType[];

export const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const goNextStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex < stepKeys.length ? nextIndex : prev;
    });
  }, []);

  const goPrevStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex >= 0 ? prevIndex : prev;
    });
  }, []);

  const memoizedValues = useMemo(
    () => ({
      currentStep: stepKeys[currentStepIndex],
      currentStepIndex,
      goNextStep,
      goPrevStep,
    }),
    [currentStepIndex, goNextStep, goPrevStep],
  );

  return (
    <StepsContext.Provider value={memoizedValues}>
      {children}
    </StepsContext.Provider>
  );
};
