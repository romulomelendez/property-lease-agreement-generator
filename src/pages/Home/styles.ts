import styled from 'styled-components'

export const Container = styled.div `
/* @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Dancing+Script&family=Great+Vibes&family=Zeyada&display=swap'); */

    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 100vh;
    width: 100vw;
    background-color: #cecece;
`

export const GetStartedContainer = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: yellow;
`

export const ViewerContainer = styled.div `

    height: 100%;
    width: 100%;
`

export const Title = styled.h1 `

    font-family: 'Dancing Script', cursive;
    font-size: 40pt;

`

export const Subtitle = styled.h6 `

    font-family: 'Dancing Script', cursive;
    font-size: 18pt;
    color: #9ba103;

`

export const Button = styled.button `

    width: 170px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #3f7ae0;
    color: white;
    font-family: 'Dancing Script', cursive;
    font-size: 25pt;
    font-weight: 700;
    cursor: pointer;
    margin: 35px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
        background-color: #3861a8;
    }

`