import styled from 'styled-components'

export const Container = styled.div `

    position: fixed;
    top: 50px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-bottom: 80px;
    background-color: #3f7ae0;
    color: white;   
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

export const SelectLangContainer = styled.div `

    display: grid;
    grid-template-columns: 80% 20%;
    place-items: center;
    gap: 5px;
    width: 150px;
    padding: 5px;
    cursor: pointer;
    font-family: 'Dancing Script', cursive;
    font-weight: bold;

    @media (min-width: 550px) {
        width: 170px;
        padding: 8px;
    }

`

export const SelectLangText = styled.h4 `

    font-size: 13pt;

    @media (min-width: 550px) {
        font-size: 15pt;
    }

`

export const LangContainer = styled.div `

    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 180px;
    gap: 4px;
    cursor: pointer;
`

export const LangOption = styled.option  `

    font-family: 'Dancing Script', cursive;
    font-size: 13pt;
    font-weight: bold;
    padding: 5px;

    &:hover {
        background-color: white;
        color: #3f7ae0;
    }

    @media (min-width: 550px) {
        font-size: 15pt;
    }

`

export const OpenCloseLangMenuButton = styled.button `

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    cursor: pointer;
    background-color: #3f7ae0;
    color: white;
    font-size: 12pt;
`
