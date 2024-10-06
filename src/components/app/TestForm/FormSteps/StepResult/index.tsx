import {
  Alert,
  AlertIcon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { useFormContext } from "react-hook-form";
import { FormStepsData } from "../../../../../entities/testForm/models/steps";

export const StepResult = () => {
  const { getValues } = useFormContext();
  const formValues = getValues();

  return (
    <div className={styles["container"]}>
      <Alert status="success">
        <AlertIcon />
        Поздравляю! Вы успешно прошли тест.
      </Alert>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Ваши ответы</TableCaption>
          <Thead>
            <Tr>
              <Th>Вопрос</Th>
              <Th>Ответ</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(FormStepsData).map(([stepKey, stepData]) => (
              <Tr key={stepKey}>
                <Td>{stepData.label}</Td>
                <Td>
                  {stepData.data
                    ? (() => {
                        const answer = formValues[stepData.name];
                        console.log("answer", answer);
                        if (stepData.type === "single") {
                          return stepData.data[answer] ?? "Неизвестный ответ";
                        } else if (stepData.type === "multiple") {
                          return answer?.join(" ") ?? "Неизвестный ответ";
                        }

                        return "Ответ не предоставлен";
                      })()
                    : formValues[stepData.name] || "Не предоставлен"}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
