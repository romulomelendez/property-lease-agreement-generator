import { Button, BtnText } from "./styles"

type BtnProps = {
    text: string,
    color?: string,
    onClick?: () => void
}

export const ActionButton = ({ text, color, onClick }: BtnProps) => {
    
    return (
        <>
            <Button type="button" color={color} onClick={onClick}>
                <BtnText>{ text }</BtnText>
            </Button>
        </>
    )

}
