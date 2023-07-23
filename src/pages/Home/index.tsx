import { useState } from 'react'

import { PdfViewer } from '../../components/PdfViewer'
import { PdfForm } from '../../components/PdfForm'

import { Container, GetStartedContainer, ViewerContainer, Title, Subtitle, Button } from './styles'
import { DropdownMenu } from '../../components/DropdownMenu'

export const Home = () => {
    
    const [formIsOpen, setFormIsOpen] = useState(true)

    const handleOpenCloseForm = () => setFormIsOpen(!formIsOpen)

    return (
        <Container>
            <GetStartedContainer>
                <DropdownMenu />
                <Title>Lease Agreement Generator</Title>
                <Subtitle>Create your own custom lease agreement</Subtitle>

                {
                    formIsOpen ?
                        <Button type="button" onClick={handleOpenCloseForm}>
                            Create Now!
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
