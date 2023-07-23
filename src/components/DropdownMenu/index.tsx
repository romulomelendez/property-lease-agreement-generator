import { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import { Container, SelectLangContainer, SelectLangText, LangContainer, OpenCloseLangMenuButton, LangOption } from './styles'

export const DropdownMenu = () => {

    const { t, i18n: { changeLanguage } } = useTranslation()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState("English")

    type LangProps = {
        lang: string
        shortening: string
    }

    const handleCurrrentLanguage = (props: LangProps): void => {

        // Set current language to DropdownMenu component
        setCurrentLanguage(props.lang)

        // set App language
        changeLanguage(props.shortening)

        // Close language menu
        setMenuIsOpen(!menuIsOpen)

    }

    return (

        <Container>
            <SelectLangContainer>
                <SelectLangText>
                    {t(`${currentLanguage}`)}
                </SelectLangText>
                <OpenCloseLangMenuButton type="button" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <IoIosArrowDown />
                </OpenCloseLangMenuButton>
            </SelectLangContainer>
            {
                menuIsOpen && (
                    <LangContainer>
                        <LangOption value="en" onClick={() => handleCurrrentLanguage({"lang": "English", "shortening": "en"})}>
                            {t("english")}
                        </LangOption>
                        <LangOption value="pt" onClick={() => handleCurrrentLanguage({"lang": "Portuguese", "shortening": "ptBR"})}>
                            {t("portuguese")}
                        </LangOption>
                        <LangOption value="es" onClick={() => handleCurrrentLanguage({"lang": "Spanish", "shortening": "es"})}>
                            {t("spanish")}
                        </LangOption>
                        <LangOption value="fr" onClick={() => handleCurrrentLanguage({"lang": "French", "shortening": "fr"})}>
                            {t("french")}
                        </LangOption>
                    </LangContainer>
                )
            }
            
        </Container>

    )
}
