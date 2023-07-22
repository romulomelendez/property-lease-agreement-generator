import { PdfViewer } from '../../components/PdfViewer'

import { Container, GetStartedContainer, ViewerContainer } from './styles'

export const Home = () => (
    <Container>
        <GetStartedContainer>
            <h1>Get Started Here</h1>
        </GetStartedContainer>

        <ViewerContainer>
            <PdfViewer />
        </ViewerContainer>
    </Container>
)
