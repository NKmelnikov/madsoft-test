import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { useController, useFormContext } from "react-hook-form";
import { useStepper } from "../../../../app/use-stepper";
import { FC } from "react";

const rules = {
  required: { value: true, message: "Обязательное поле" },
};

type InputTypeQuestionProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const InputTypeQuestion: FC<InputTypeQuestionProps> = ({
  name,
  label,
  placeholder = "подсказка: JavaScript",
}) => {
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
        <FormLabel as="legend">{label}</FormLabel>
        <Input placeholder={placeholder} onChange={onChange} value={value} />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};
