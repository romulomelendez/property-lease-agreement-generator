import { ReactNode } from 'react'

import { Form } from './styles'

interface FormProps {
    children: ReactNode
}

export const StepForms: React.FC<FormProps> = ({ children }) => <Form>{ children }</Form>