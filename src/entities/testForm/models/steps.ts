export const FormSteps = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
  StepThree: "StepThree",
  StepFour: "StepFour",
  StepResult: "StepResult",
} as const;

type FormSteps = (typeof FormSteps)[keyof typeof FormSteps];

type StepKey = Exclude<FormSteps, "StepResult">;

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
