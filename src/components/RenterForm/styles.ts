import styled from 'styled-components'

export const InputContainer = styled.section `

    display: flex;
    flex-direction: column;
    
    gap: 8px;

    @media (min-width: 550px) {
        display: grid;
        grid-template-rows: auto auto auto;
    }
`

export const SocialIdsContainer = styled(InputContainer) `

    @media (min-width: 550px) {
        display: grid;
        grid-template-rows: none;
        grid-template-columns: auto auto;
    }
`