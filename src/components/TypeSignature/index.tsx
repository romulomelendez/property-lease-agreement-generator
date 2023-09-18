import { ChangeEvent, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
    Container,
    FullNameInput,
    AlexBrushFont,
    DancingScriptFont,
    FontStyleContainer,
    GreatVibesFont,
    ZeyadaFont,
} from './styles'

export const TypeSignature: React.FC = () => {

  const { t } = useTranslation()
  const [fullName, setFullName] = useState('')
  const [, setSignatureFontSelected] = useState('')

  const handleSignatureFontSelected = (font: string): void => setSignatureFontSelected(font)

  return (
    <Container>
        <FullNameInput
          type="text"
          placeholder={t("typeYourFullName")}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFullName(event.target.value)}
        />

        <FontStyleContainer>
            <AlexBrushFont type="text" value={fullName} placeholder={t('alexBrushFont')} onClick={() => handleSignatureFontSelected("Alex Brush")} readOnly />
            <DancingScriptFont type="text" value={fullName} placeholder={t('dancingScriptFont')} onClick={() => handleSignatureFontSelected("Dancing Script")} readOnly />
            <GreatVibesFont type="text" value={fullName} placeholder={t('greatVibesFont')} onClick={() => handleSignatureFontSelected("Great Vibes")} readOnly />
            <ZeyadaFont type="text" value={fullName} placeholder={t('zeyadaFont')} onClick={() => handleSignatureFontSelected("Zeyada")} readOnly />
        </FontStyleContainer>
    </Container>
  )
}
