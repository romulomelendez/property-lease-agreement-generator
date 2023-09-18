import { useState } from 'react'

export const useStepForm = () => {

    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const nextForm = (): void => {
        setCurrentStepIndex(Number(currentStepIndex) + 1)

        if (currentStepIndex > 4)
            setCurrentStepIndex(4)
    }

    const backForm = (): void => {
        setCurrentStepIndex(Number(currentStepIndex) - 1)

        if (currentStepIndex < 0)
            setCurrentStepIndex(0)

    }

    return {
        nextForm,
        backForm,
        currentStepIndex
    }
}
