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
import { firstQuestion } from "../../../../../entities/testForm/model";

export const StepResult = () => {
  const { getValues } = useFormContext();
  const answer1 = getValues("question-1") as keyof typeof firstQuestion;
  const answer2 = getValues("question-2");
  const answer3 = getValues("question-3");

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
            <Tr>
              <Td>Что должен знать фронт-енд разработчик?</Td>
              <Td>{firstQuestion[answer1]}</Td>
            </Tr>
            <Tr>
              <Td>Напишите название любимого языка программирования</Td>
              <Td>{answer2}</Td>
            </Tr>
            <Tr>
              <Td>Сколько типов данных в языке JavaScript?</Td>
              <Td isNumeric>{answer3}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
