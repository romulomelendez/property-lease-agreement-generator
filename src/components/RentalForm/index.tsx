import { useTranslation } from "react-i18next"

import { FormTitle } from '../FormTitle'
import { FormInput } from '../FormInput'

import { InputContainer, InputDate } from './styles'

export const RentalForm: React.FC = () => {

    const { t } = useTranslation()

    return (
        
        <>
            <FormTitle text={t('rental')} />

            <InputContainer>
                <InputDate type="date" placeholder={t('startDate')} />
                <InputDate type="date" placeholder={t('endDate')} />
                <FormInput type="number" placeholder={t('rentalAmount')} />
                <InputDate type="date" placeholder={t('dueDate')} />
            </InputContainer>
        </>
    )

}