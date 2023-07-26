import { Input } from './styles'

type FormInputProps = {
    type: string,
    placeholder: string
}

export const FormInput: React.FC<FormInputProps> = ({ type, placeholder }) => (
    <Input type={type} placeholder={placeholder} />
)