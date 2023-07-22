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

`