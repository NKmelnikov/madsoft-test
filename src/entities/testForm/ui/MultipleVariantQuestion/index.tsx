import { FC } from "react";
import {
  FormLabel,
  Text,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";

import styles from "./index.module.css";
import { useStepper } from "../../../../app/use-stepper";

const rules = {
  validate: (value: string[]) =>
    value?.length > 0 || "Нужно выбрать хотя бы одно значение",
};

type MultipleVariantQuestionProps = {
  name: string;
  label: string;
  questions: Record<string, string>;
};

export const MultipleVariantQuestion: FC<MultipleVariantQuestionProps> = ({
  name,
  label,
  questions,
}) => {
  const {
    field: { value = [], onChange },
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
      {/* <FormControl as="fieldset" isInvalid={invalid}>
        FormControl does not provide context to CheckboxGroup
        https://github.com/chakra-ui/chakra-ui/issues/4629
      </FormControl> */}

      <FormLabel as="legend">{label}</FormLabel>
      <CheckboxGroup
        value={value}
        onChange={onChange}
        colorScheme={invalid ? "red" : "blue"}
      >
        <Stack spacing={4} direction="column">
          {Object.entries(questions).map(([key, value]) => (
            <Checkbox key={key} value={key}>
              {value}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {!!error && <Text className={styles["error"]}>{error.message}</Text>}
    </form>
  );
};
