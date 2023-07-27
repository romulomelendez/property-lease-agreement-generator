import { useTranslation } from "react-i18next"

import { FormTitle } from '../FormTitle'
import { FormInput } from '../FormInput'
import { ActionButton } from '../ActionButton'

import { InputContainer, BtnContainer, InputDate } from './styles'

export const RentalForm: React.FC = () => {

    const { t } = useTranslation()

    return (
        
        <>
            <FormTitle text={t('rental')} />

            <InputContainer>
                <InputDate type="date" placeholder={t('startDate')} />
                <InputDate type="date" placeholder={t('endDate')} />
                <FormInput type="number" placeholder={t('rentalAmount')} />
                <FormInput type="number" placeholder={t('dueDate')} />
            </InputContainer>

            <BtnContainer>
                <ActionButton text={t('previous')} />
                <ActionButton text={t('next')} />
            </BtnContainer>
        </>
    )

}