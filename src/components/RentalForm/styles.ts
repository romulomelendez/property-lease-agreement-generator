import styled from 'styled-components'

export const InputContainer = styled.section `

    display: grid;
    grid-template-rows: repeat(4, auto);
    row-gap: 10px;

    @media (min-width: 550px) {
        grid-template-rows: none;
        grid-template-columns: repeat(2, 50%);
        height: 100px;
        grid-gap: 15px;
    }
`

export const InputDate = styled.input `

    font-size: 11pt;
    font-family: 'REM', sans-serif;
    font-weight: 300;
    color: #3f7ae0;
    border: 1px solid #3f7ae0;
    outline: none;
    width: 100%;
    padding: 10px;
    height: 45px;

`