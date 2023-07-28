import { ActionButton } from "../ActionButton"
import { FormInput } from "../FormInput"
import { FormTitle } from "../FormTitle"

import { WitnessContainer, InputContainer, GuarantorContainer, BtnContainer } from './styles'

export const WitnessGuarantorForm: React.FC = () => {


    return (

        <>
            <WitnessContainer>
                <FormTitle text="Witness" />
                <InputContainer>
                    <FormInput type="text" placeholder="Name" />
                    <FormInput type="number" placeholder="Social Security Number" />
                </InputContainer>
            </WitnessContainer>

            <GuarantorContainer>
                <FormTitle text="Guarantor" />
                <FormInput type="text" placeholder="Name" />
            </GuarantorContainer>

            <BtnContainer>
                <ActionButton text="Previous" />
                <ActionButton text="Next" />
            </BtnContainer>
        </>

    )

}
