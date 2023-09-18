import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 20px;
    height: 100%;
    width: 100%;
`

export const FullNameInput = styled.input `

    font-size: 14pt;
    font-family: 'REM', sans-serif;
    font-weight: 300;
    background-color: white;
    color: #3f7ae0;
    border: 2px solid #3f7ae0;
    outline: none;
    width: 100%;
    padding: 10px;
`

export const FontStyleContainer = styled.div `

    display: grid;
    grid-template-rows: repeat(4, 25%);
    height: 100%;
    gap: 5px;

    @media (min-width: 550px) {
        grid-template-rows: repeat(2, 50%);
        grid-template-columns: repeat(2, 50%);
    }
`

const BaseFont = styled.input `

    border: 1px solid #cecece;
    padding: 10px;
    font-size: 15pt;
    height: 35px;
    width: 100%;
    outline: none;
    cursor: pointer;
    text-align: center;
`

export const AlexBrushFont = styled(BaseFont) `

    font-family: 'Alex Brush', cursive;

`

export const DancingScriptFont = styled(BaseFont) `

    font-family: 'Dancing Script', cursive;

`

export const GreatVibesFont = styled(BaseFont) `

    font-family: 'Great Vibes', cursive;

`

export const ZeyadaFont = styled(BaseFont) `

    font-family: 'Zeyada', cursive;

`