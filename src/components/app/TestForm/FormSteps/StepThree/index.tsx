import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { useController, useFormContext } from "react-hook-form";
import { useStepper } from "../../../../../app/use-stepper";

const name = "question-3";
const rules = {
  required: { value: true, message: "Обязательное поле" },
};

export const StepThree = () => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, rules });

  const { goNextStep } = useStepper();
  const { handleSubmit: _handleSubmit } = useFormContext();
  const handleSubmit = _handleSubmit(goNextStep);

  return (
    <form
      id="question-form"
      className={styles["container"]}
      onSubmit={handleSubmit}
    >
      <FormControl as="fieldset" isInvalid={invalid}>
        <FormLabel as="legend">
          Сколько типов данных в языке JavaScript?
        </FormLabel>
        <NumberInput min={0} max={10} onChange={onChange} value={value}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};
