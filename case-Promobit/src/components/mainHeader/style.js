import styled from 'styled-components'

export const Header = styled.header`
display: flex;
flex-direction: column;
width: 100%;
max-width: 100vw;
@media screen and (max-device-width : 480px){
    width: 100vw;
}
`

export const Top = styled.div`
width: 100%;
height: 56px;
background-color: #5C16C5;
display: flex;
align-items: center;
img{
width: 184px;
margin-left: 112px;
align-self: center;
@media screen and (max-device-width : 480px) {
    margin: auto !important;
    width: 140px;
}
}

`

export const Rectangle = styled.div`
width: 100%;
height: 449px;
background-color: #2D0C5E;
`

export const Group = styled.section`
width: 100%;
height: 280px;
justify-content: center;

p{
width: 781px;
height: 112px;
margin: 140px auto;
justify-self: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
text-align: center;
letter-spacing: -0.005em;
color: #FFFFFF;
@media screen and (max-device-width : 480px) {
width: 281px;
height: 84px;
font-size: 24px;
line-height: 28px;
}
}
@media screen and (max-device-width : 480px){
    align-items: center;
    padding: 1vw;
}
`
