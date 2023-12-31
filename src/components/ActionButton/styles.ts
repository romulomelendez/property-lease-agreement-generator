import styled from 'styled-components'

type ActionBtnProps = {
    color?: string
}

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
    background-color: ${({ color }: ActionBtnProps) => color ? color : '#3f7ae0'};
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
        background-color: ${({ color }: ActionBtnProps) => {
            if( color === '#941d15')
                return '#701009'
            else if( color === 'darkgreen')
                return 'green'
            else
                return '#3861a8'
        }};
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

    font-family: 'REM', sans-serif;
    font-size: 11pt;
    font-weight: 700;

    @media (min-width: 550px) {
        font-size: 13pt;
    }

    @media (min-width: 750px) {
        font-size: 15pt;
    }

`
