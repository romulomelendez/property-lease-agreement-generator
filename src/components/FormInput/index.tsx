import { ChangeEvent } from 'react'

import { Input } from './styles'

type FormInputProps = {
    type: string,
    placeholder: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput: React.FC<FormInputProps> = ({ type, placeholder, onChange }) => (
    <Input type={type} placeholder={placeholder} onChange={onChange} />
)