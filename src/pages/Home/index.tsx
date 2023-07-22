import { PdfViewer } from '../../components/PdfViewer'

import { Container, GetStartedContainer, ViewerContainer, Title } from './styles'

export const Home = () => (
    <Container>
        <GetStartedContainer>
            <Title>Get Started Here</Title>
        </GetStartedContainer>

        <ViewerContainer>
            <PdfViewer />
        </ViewerContainer>
    </Container>
)
