import { FormStepsData } from "../../../../../entities/testForm/models/steps";
import { MultipleVariantQuestion } from "../../../../../entities/testForm/ui/MultipleVariantQuestion";

export const StepFour = () => {
  return (
    <MultipleVariantQuestion
      name={FormStepsData.StepFour.name}
      label={FormStepsData.StepFour.label}
      questions={FormStepsData.StepFour.data!}
    />
  );
};
