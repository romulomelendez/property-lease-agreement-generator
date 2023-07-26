import { useState } from 'react'

export const useFormSteps = () => {

    const [currentStep, setCurrentStep] = useState(0)

    return {
        currentStep,
        setCurrentStep
    }

}