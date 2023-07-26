import { FormTitle } from '../FormTitle'
import { FormInput } from '../FormInput'
import { ActionButton } from '../ActionButton'

import { InputContainer, SocialIdsContainer } from './styles'

export const LocatorForm: React.FC = () => {
  
  return (
    <>
      <FormTitle text="LOCATOR" />

      <InputContainer>
        <FormInput type="text" placeholder="Name" />

        <SocialIdsContainer>
          <FormInput type="number" placeholder="Social Security Number" />
          <FormInput type="number" placeholder="Identity Card Number" />
        </SocialIdsContainer>

        <FormInput type="text" placeholder="Address" />
      </InputContainer>
      
      <ActionButton text="Next" />
    </>
  )
}
