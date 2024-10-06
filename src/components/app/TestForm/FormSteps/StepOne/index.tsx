import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { useController, useFormContext } from "react-hook-form";
import { useStepper } from "../../../../../app/use-stepper";
import { firstQuestion } from "../../../../../entities/testForm/model";

const name = "question-1";
const rules = {
  required: { value: true, message: "Нужно выбрать одно значение" },
};

export const StepOne = () => {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({ name, rules });

  const { goNextStep } = useStepper();
  const { handleSubmit: _handleSubmit } = useFormContext();
  const handleSubmit = _handleSubmit(goNextStep);

  return (
    <form
      id="question-form"
      onSubmit={handleSubmit}
      className={styles["container"]}
    >
      <FormControl as="fieldset" isInvalid={invalid}>
        <FormLabel as="legend">
          Что должен знать фронт-енд разработчик?
        </FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          <Stack direction="column">
            {Object.entries(firstQuestion).map(([key, value]) => (
              <Radio value={key}>{value}</Radio>
            ))}
          </Stack>
        </RadioGroup>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};
