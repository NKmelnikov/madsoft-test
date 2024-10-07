import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Heading,
} from "@chakra-ui/react";
import styles from "./index.module.css";
import { TestForm } from "./TestForm";
import { TimeCountdown } from "./TestForm/TimeCountdown";
import { useStepper } from "../../app/use-stepper";
import { clearSessionStorage } from "../../utils/storage";

export const App = () => {
  const { isTimeOver } = useStepper();

  const handleStartOver = () => {
    clearSessionStorage("testForm");
    location.reload();
  };

  return isTimeOver ? (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Время вышло</AlertTitle>
      <AlertDescription>
        Пожалуйста начните тест заново{" "}
        <Button colorScheme="gray" onClick={handleStartOver} size="xs">
          Начать заново
        </Button>
      </AlertDescription>
    </Alert>
  ) : (
    <div className={styles["app"]}>
      <div className={styles["title-container"]}>
        <Heading as="h3" size="lg">
          Тестирование
        </Heading>
        <TimeCountdown />
      </div>
      <TestForm />
    </div>
  );
};
