import { useTranslation } from "react-i18next"

import { ActionButton } from "../ActionButton"
import { FormInput } from "../FormInput"
import { FormTitle } from "../FormTitle"

import { WitnessContainer, InputContainer, GuarantorContainer, BtnContainer } from './styles'

export const WitnessGuarantorForm: React.FC = () => {

    const { t } = useTranslation()

    return (

        <>
            <WitnessContainer>
                <FormTitle text={t('witness')} />
                <InputContainer>
                    <FormInput type="text" placeholder={t('name')} />
                    <FormInput type="number" placeholder={t('socialSecurityNumber')} />
                </InputContainer>
            </WitnessContainer>

            <GuarantorContainer>
                <FormTitle text={t('guarantor')} />
                <FormInput type="text" placeholder={t('name')} />
            </GuarantorContainer>

            <BtnContainer>
                <ActionButton text={t('previous')} />
                <ActionButton text={t('next')} />
            </BtnContainer>
        </>

    )

}
