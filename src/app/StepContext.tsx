import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FormSteps,
  sessionStorageCurrentStepKey,
} from "../entities/testForm/models/steps";
import { loadFromSessionStorage, saveToSessionStorage } from "../utils/storage";

type StepsContextType = {
  currentStep: FormSteps;
  currentStepIndex: number;
  goNextStep: () => void;
  goPrevStep: () => void;
  setIsTimeOver: React.Dispatch<React.SetStateAction<boolean>>;
  isTimeOver: boolean;
};

export const StepsContext = createContext<StepsContextType | undefined>(
  undefined,
);

const stepKeys = Object.keys(FormSteps) as FormSteps[];

export const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const savedCurrentStep = loadFromSessionStorage<FormSteps>(
    sessionStorageCurrentStepKey,
  );

  const initialStepIndex = savedCurrentStep
    ? stepKeys.indexOf(savedCurrentStep)
    : 0;

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(() => {
    return initialStepIndex !== -1 ? initialStepIndex : 0;
  });
  const [isTimeOver, setIsTimeOver] = useState<boolean>(false);

  const goNextStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex < stepKeys.length) {
        saveToSessionStorage(sessionStorageCurrentStepKey, stepKeys[nextIndex]);
        return nextIndex;
      }
      return prev;
    });
  }, []);

  const goPrevStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex >= 0) {
        saveToSessionStorage(sessionStorageCurrentStepKey, stepKeys[prevIndex]);
        return prevIndex;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    saveToSessionStorage(
      sessionStorageCurrentStepKey,
      stepKeys[currentStepIndex],
    );
  }, [currentStepIndex]);

  const memoizedValues = useMemo(
    () => ({
      currentStep: stepKeys[currentStepIndex],
      currentStepIndex,
      goNextStep,
      goPrevStep,
      setIsTimeOver,
      isTimeOver,
    }),
    [currentStepIndex, goNextStep, goPrevStep, setIsTimeOver, isTimeOver],
  );

  return (
    <StepsContext.Provider value={memoizedValues}>
      {children}
    </StepsContext.Provider>
  );
};
