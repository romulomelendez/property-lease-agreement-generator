import styled from 'styled-components'

export const Button = styled.button `
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 80px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #3f7ae0;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
        background-color: #3861a8;
    }

    @media (min-width: 550px) {
        width: 150px;
        padding: 12px;
    }

    @media (min-width: 750px) {
        padding: 13px;
    }
`

export const BtnText = styled.h5 `

    font-family: 'Dancing Script', cursive;
    font-size: 13pt;
    font-weight: 700;

    @media (min-width: 550px) {
        font-size: 13pt;
    }

    @media (min-width: 750px) {
        font-size: 15pt;
    }

`
