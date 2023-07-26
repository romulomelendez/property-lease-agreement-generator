import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    height: 100vh;
    width: 100vw;
    background-color: #cecece;

    @media (min-width: 950px) {
        grid-template-rows: none;
        grid-template-columns: repeat(2, 50%);
    }
`

export const GetStartedContainer = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background-color: yellow;

    @media (min-width: 362px) {
        padding: 30px;
    }

    @media (min-width: 950px) {
        paddding: 10px;
    }
`

export const ViewerContainer = styled.div `

    height: 100%;
    width: 100%;
`

export const Title = styled.h1 `

    font-family: 'Dancing Script', cursive;
    font-size: 28pt;

    @media (min-width: 550px) {
        font-size: 35pt;
    }

    @media (min-width: 750px) {
        font-size: 38pt;
    }

    @media (min-width: 950px) {
        font-size: 40pt;
    }
`

export const Subtitle = styled.h6 `

    font-family: 'Dancing Script', cursive;
    font-size: 12pt;
    color: #9ba103;

    @media (min-width: 550px) {
        font-size: 15pt;
    }

    @media (min-width: 750px) {
        font-size: 18pt;
    }

    @media (min-width: 950px) {
        font-size: 20pt;
    }
`

export const Button = styled.button `

    max-width: 220px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #3f7ae0;
    color: white;
    font-family: 'Dancing Script', cursive;
    font-size: 14pt;
    font-weight: 700;
    cursor: pointer;
    margin: 35px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
        background-color: #3861a8;
    }

    @media (min-width: 550px) {
        padding: 12px;
        font-size: 18pt;
    }

    @media (min-width: 750px) {
        padding: 15px;
        font-size: 20pt;
    }
`