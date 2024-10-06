import { FormStepsData } from "../../../../../entities/testForm/models/steps";
import { TextAreaTypeQuestion } from "../../../../../entities/testForm/ui/TextAreaTypeQuestion";

export const StepThree = () => {
  return (
    <TextAreaTypeQuestion
      name={FormStepsData.StepThree.name}
      label={FormStepsData.StepThree.label}
    />
  );
};
