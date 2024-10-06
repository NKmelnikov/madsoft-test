import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { useController, useFormContext } from "react-hook-form";
import { useStepper } from "../../../../../app/use-stepper";

const name = "question-2";
const rules = {
  required: { value: true, message: "Обязательное поле" },
};

export const StepTwo = () => {
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
          Напишите название любимого языка программирования
        </FormLabel>
        <Input
          placeholder="подсказка: JavaScript"
          onChange={onChange}
          value={value}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};
