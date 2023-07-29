import { StepForms } from '../StepForms'
// import { LocatorForm } from '../LocatorForm'
// import { RenterForm } from '../RenterForm'
// import { RentalForm } from '../RentalForm'
// import { WitnessGuarantorForm } from '../WitnessGuarantorForm'
import { SignatureForm } from '../SignatureForm'

export const PdfForm: React.FC = () => {

  return (

    <StepForms>
      <SignatureForm />
    </StepForms>

  )

}
