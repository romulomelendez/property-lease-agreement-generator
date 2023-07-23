import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { Container, SelectLangContainer, SelectLangText, LangContainer, OpenCloseLangMenuButton, LangOption } from './styles'

export const DropdownMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState("English")
    
    const handleCurrrentLanguage = (language: string) => {
        // Set current language
        setCurrentLanguage(language)

        // Close language menu
        setMenuIsOpen(!menuIsOpen)

    }

    return (

        <Container>
            <SelectLangContainer>
                <SelectLangText>{currentLanguage}</SelectLangText>
                <OpenCloseLangMenuButton type="button" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <IoIosArrowDown />
                </OpenCloseLangMenuButton>
            </SelectLangContainer>
            {
                menuIsOpen && (
                    <LangContainer>
                        <LangOption value="en" onClick={() => handleCurrrentLanguage("English")}>English</LangOption>
                        <LangOption value="pt" onClick={() => handleCurrrentLanguage("Portuguese")}>Portuguese</LangOption>
                        <LangOption value="es" onClick={() => handleCurrrentLanguage("Spanish")}>Spanish</LangOption>
                    </LangContainer>
                )
            }
            
        </Container>

    )
}
