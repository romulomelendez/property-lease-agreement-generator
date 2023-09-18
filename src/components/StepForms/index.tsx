import { useTranslation } from "react-i18next"

import { useStepForm } from "../../hooks/useStepForm"

import { ActionButton } from "../ActionButton"
import { LocatorForm } from "../LocatorForm"
import { RentalForm } from "../RentalForm"
import { RenterForm } from "../RenterForm"
import { SignatureForm } from "../SignatureForm"
import { WitnessGuarantorForm } from "../WitnessGuarantorForm"

import { Form, BtnContainer } from "./styles"

export const StepForms = () => {

    const { t } = useTranslation()
    const { nextForm, backForm, currentStepIndex } = useStepForm()

    return (
        <Form>
            {
                currentStepIndex === 0 ?
                    <LocatorForm />
                :
                    currentStepIndex === 1 ?
                        <RenterForm />
                    :
                        currentStepIndex === 2 ?
                            <RentalForm />
                        :
                            currentStepIndex === 3 ?
                                <WitnessGuarantorForm />
                            : <SignatureForm />
            }

            <BtnContainer>
                {
                    currentStepIndex === 0 ?
                        <ActionButton text={t("next")} onClick={nextForm} />
                    :
                    currentStepIndex === 4 ?
                        <ActionButton text={t("previous")} onClick={backForm} color="#941d15" />
                        :
                            <BtnContainer>
                                <ActionButton text={t("previous")} onClick={backForm} color="#941d15" />
                                <ActionButton text={t("next")} onClick={nextForm} />
                            </BtnContainer>
                }
            </BtnContainer>

        </Form>
    )
}
