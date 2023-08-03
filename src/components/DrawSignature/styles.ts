import styled from 'styled-components'

export const Container = styled.section `

    display: grid;
    grid-template-rows: repeat(2, auto);
    place-items: center;
    gap: 20px;
    height: 100%;
    width: 100%;
`

export const BtnContainer = styled.section `

    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    justify-items: center;
    width: 100%;
    column-gap: 5px;
    margin-top: 10px;
    
    @media (min-width: 480px) {
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, auto);
    }

    @media (min-width: 550px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 480px) {
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, auto);
    }
    
    @media (min-width: 1050px) {
        grid-template-columns: repeat(3, auto);
    }
`

const BaseBtn = styled.button `

    padding: 8px;
    color: white;
    outline: none;
    border-radius: 4px;
    height: 50px;
    width: 125px;
    text-align: center;
    border: 1px solid #cecece;
    font-size: 10pt;
`

export const Cancel = styled(BaseBtn) `
    
    background-color: darkred;

`

export const Clear = styled(BaseBtn) `

    background-color: darkblue;

`

export const Save = styled(BaseBtn) `

    background-color: darkgreen;

`