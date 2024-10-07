import { FormStepsData } from "../../../../../entities/testForm/models/steps";
import { SingleVariantQuestion } from "../../../../../entities/testForm/ui/SingleVariantQuestion";

export const StepOne = () => {
  return (
    <SingleVariantQuestion
      name={FormStepsData.StepOne.name}
      label={FormStepsData.StepOne.label}
      questions={FormStepsData.StepOne.data!}
    />
  );
};
