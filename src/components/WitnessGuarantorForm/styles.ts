import styled from "styled-components"

export const WitnessContainer = styled.section `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    justify-items: flex-start;
    gap: 10px;
    width: 100%;
`

export const InputContainer = styled(WitnessContainer) `

    @media (min-width: 550px) {
        grid-template-rows: none;
        grid-template-columns: repeat(2, auto);
    }
`

export const GuarantorContainer = styled(WitnessContainer) `
    width: 100%;
`

export const Note = styled.h6 `

    width: 200px;
    font-size: 8pt;
    font-family: 'REM', sans-serif;
    color: #a30808;

    @media (min-width: 550px) {
        width: 320px;
    }
`