import { Heading } from "@chakra-ui/react";
import { useStepper } from "../../app/use-stepper";
import styles from "./index.module.css";
import { TestForm } from "./TestForm";

import { TimeCountdown } from "./TimeCountdown";
import { TimeOverAlert } from "./TimeOverAlert";

export const App = () => {
  const { isTimeOver } = useStepper();

  return isTimeOver ? (
    <TimeOverAlert />
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
