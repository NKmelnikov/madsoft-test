import { useContext } from "react"

import { StepsContext } from "./StepContext"

export const useStepper = () => {
  const context = useContext(StepsContext)
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider")
  }
  return context
}
