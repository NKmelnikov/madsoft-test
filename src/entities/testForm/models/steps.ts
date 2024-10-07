export const FormSteps = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
  StepThree: "StepThree",
  StepFour: "StepFour",
  StepResult: "StepResult",
} as const;

export type FormSteps = (typeof FormSteps)[keyof typeof FormSteps];

export type StepKey = Exclude<FormSteps, "StepResult">;

type StepData = {
  label: string;
  name: string;
  type?: "single" | "multiple";
  data?: Record<string, string>;
};

export const FormStepsData: Record<StepKey, StepData> = {
  StepOne: {
    label: "Что должен знать фронт-енд разработчик?",
    name: "question-1",
    type: "single",
    data: {
      "1": "html, css, js",
      "2": "java, python, kotlin",
      "3": "php, c++, go",
    },
  },
  StepTwo: {
    label: "Напишите название любимого языка программирования?",
    name: "question-2",
  },
  StepThree: {
    label: "Напишите почему вы любите JavaScript",
    name: "question-3",
  },
  StepFour: {
    label: "Какие фреймворки относятся к языку JavaScript?",
    name: "question-4",
    type: "multiple",
    data: {
      React: "React",
      Angular: "Angular",
      Spring: "Spring",
      Django: "Django",
    },
  },
} as const;

export const formDefaultValues = {
  "question-1": undefined,
  "question-2": undefined,
  "question-3": undefined,
  "question-4": undefined,
};

export type FormData = {
  "question-1": string | undefined;
  "question-2": string | undefined;
  "question-3": string | undefined;
  "question-4": string[] | undefined;
};

export const sessionStorageFormDataKey = "testFormData";
export const sessionStorageCurrentStepKey = "currentStep";