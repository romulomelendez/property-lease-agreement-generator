import { Title } from './styles'

type TitleProp = {
    text: string
}

export const FormTitle: React.FC<TitleProp> = ({ text }: TitleProp ) => <Title>{ text }</Title>