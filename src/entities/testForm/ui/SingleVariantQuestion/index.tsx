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
import { useStepper } from "../../../../app/use-stepper";
import { FC } from "react";

const rules = {
  required: { value: true, message: "Нужно выбрать одно значение" },
};

type SingleVariantQuestionProps = {
  name: string;
  label: string;
  questions: Record<string, string>;
};

export const SingleVariantQuestion: FC<SingleVariantQuestionProps> = ({
  name,
  label,
  questions,
}) => {
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
        <FormLabel as="legend">{label}</FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          <Stack direction="column">
            {Object.entries(questions).map(([key, value]) => (
              <Radio key={key} value={key}>
                {value}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};
