import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { PdfViewer } from '../../components/PdfViewer'
import { PdfForm } from '../../components/PdfForm'
import { DropdownMenu } from '../../components/DropdownMenu'

import { Container, GetStartedContainer, ViewerContainer, Title, Subtitle, Button } from './styles'

export const Home = () => {
    
    const [formIsOpen, setFormIsOpen] = useState(true)

    const handleOpenCloseForm = () => setFormIsOpen(!formIsOpen)
    const { t } = useTranslation()

    return (
        <Container>
            <GetStartedContainer>
                <DropdownMenu />
                <Title>{t("appTitle")}</Title>
                <Subtitle>{t("appSubtitle")}</Subtitle>

                {
                    formIsOpen ?
                        <Button type="button" onClick={handleOpenCloseForm}>
                            {t("createPdfButton")}
                        </Button> 
                    :
                        <PdfForm />
                }

            </GetStartedContainer>

            <ViewerContainer>
                <PdfViewer />
            </ViewerContainer>
        </Container>
    )
}
