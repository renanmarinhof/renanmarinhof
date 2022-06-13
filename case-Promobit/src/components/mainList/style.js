import styled from 'styled-components'

export const MainList = styled.main`
width: 100vw;
max-width: 100vw;
background-color: #fff;
display: flex;
justify-content: space-evenly;
align-items: space-evenly;
flex-wrap: wrap;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 1vw;
width: 13vw;
margin-top: 24px;
img{
    width: 100%;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    }
    p{
    width: 84px;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #646464;
    }
}
@media screen and (max-device-width : 480px){
    width: 154.67px;
    p{
        font-size: 12px;
    }
    h4{
        font-size: 14px;
        width: 150px;
    }
}
`

export const Selector = styled.div`
display: flex;
flex-direction: row;
margin: 24px auto;
`

export const OtherPage = styled.button`
min-width: 42px;
padding: 8px;
height: 40px;
color: #5C16C5;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
@media screen and (max-device-width : 480px){
    padding: 6px;
}
`

export const ThisPage = styled.button`
width: 42px;
height: 40px;
padding: 8px;
background-color: #5C16C5;
color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
`