import { useTranslation } from "react-i18next"

import { FormInput } from "../FormInput"
import { FormTitle } from "../FormTitle"

import { InputContainer, SocialIdsContainer } from "./styles"

export const LocatorForm: React.FC = () => {
  
  const { t } = useTranslation()

  return (
    <>
      <FormTitle text={t("locator")} />
      <InputContainer>
        <FormInput type="text" placeholder={t("name")} />

        <SocialIdsContainer>
          <FormInput type="number" placeholder={t("socialSecurityNumber")} />
          <FormInput type="number" placeholder={t("identityCardNumber")} />
        </SocialIdsContainer>

        <FormInput type="text" placeholder={t("address")} />
      </InputContainer>
    </>
  )
}
