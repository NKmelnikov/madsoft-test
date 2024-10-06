import { Heading } from "@chakra-ui/react";
import styles from "./index.module.css";
import { TestForm } from "./TestForm";
import { TimeCountdown } from "./TestForm/TimeCountdown";

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
    </div>
  );
};
