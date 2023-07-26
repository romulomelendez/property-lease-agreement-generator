import { Button, BtnText } from "./styles"

type BtnProps = {
    text: string
}

export const ActionButton = ({ text }: BtnProps) => {
    
    return (
        <>
            <Button type="button">
                <BtnText>{ text }</BtnText>
            </Button>
        </>
    )

}
