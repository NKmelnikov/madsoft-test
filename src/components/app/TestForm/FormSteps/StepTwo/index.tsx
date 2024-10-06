import { FormStepsData } from "../../../../../entities/testForm/models/steps";
import { InputTypeQuestion } from "../../../../../entities/testForm/ui/InputTypeQuestion";

export const StepTwo = () => {
  return (
    <InputTypeQuestion
      name={FormStepsData.StepTwo.name}
      label={FormStepsData.StepTwo.label}
    />
  );
};
