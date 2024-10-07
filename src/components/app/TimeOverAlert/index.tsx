import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";
import { sessionStorageFormDataKey } from "../../../entities/testForm/models/steps";
import { clearSessionStorage } from "../../../utils/storage";

export const TimeOverAlert = () => {
  const handleStartOver = () => {
    clearSessionStorage(sessionStorageFormDataKey);
    location.reload();
  };

  return (
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
  );
};
