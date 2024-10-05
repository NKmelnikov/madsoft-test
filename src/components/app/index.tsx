import { Button, Heading } from "@chakra-ui/react";
import styles from "./index.module.css";
import { TimeCountdown } from "./TestForm/TimeCountdown";
import { TestForm } from "./TestForm";

export const App = () => {
  return (
    <div className={styles["app"]}>
      <div className={styles["title-container"]}>
        <Heading as="h3" size="lg">
          Тестирование
        </Heading>
        <TimeCountdown />
      </div>
      <TestForm />

      <Button colorScheme="teal" variant="solid">
        Button
      </Button>
    </div>
  );
};
