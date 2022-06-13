import styled from 'styled-components'

export const Header = styled.header`
display: flex;
flex-direction: column;
width: 100vw;
`
export const Top = styled.div`
@media screen and (min-device-width : 481px){
width: 28.34vw;
height: 3.88vw;
background-color: #5C16C5;
display: flex;
align-items: center;
img{
width: 12.77vw;
margin-left: 7.77vw;
    }
}
@media screen and (max-device-width : 480px){
width: 100vw;
height: 56px;
background-color: #5C16C5;
display: flex;
align-items: center;
    img{
        margin: auto;
        width: 148px;
    }
}
`
export const Rectangle = styled.div`
background-color: #2D0C5E;
color: white;
img{
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;
}
@media screen and (min-device-width : 481px){
    height: 41.66vw;
    width: 100%;
    img{
        position: absolute;
    width: 27vw;
    left: 7.77vw;
    top: 8.9vw;
    }
}
@media screen and (max-device-width : 480px){
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center !important;
    img{
        width: 186px;
        margin: 50px auto !important;
        align-self: center;
        left: 0;
    }
}
`

export const CrewNames = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;

@media screen and (min-device-width : 481px){
    height: 8vw;
left: 40vw;
top: 33.6vw;
}
@media screen and (max-device-width : 480px){
    margin: 16px auto;
    gap: 8px;
}
`

export const MemberCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-family: 'Roboto';
font-style: normal;
p{
    font-weight: 400;
}
h4{
    font-weight: 700;
}
@media screen and (min-device-width : 481px){
    align-items: center;
}
@media screen and (max-device-width : 480px){
    align-items: left;
    width: 35vw;
}
`

export const MovieTitle = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #FFFFFF;
@media screen and (min-device-width : 481px){
left: 40vw;
top: 9vw;
height: 38px;
}

`
export const Info = styled.div`
display: flex;
margin-top: 1vw;
width: 90%;
justify-content: space-between;
@media screen and (min-device-width : 481px){
flex-direction: row;
row-gap: 1vw;
height: 24px;
}
@media screen and (max-device-width : 480px){
    flex-direction: column;
}
`
export const Genres = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
height: 24px;
`

export const InfoText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const Overview = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
color: #FFFFFF;
@media screen and (max-device-width : 480px){
    margin-top: 16px;
}
`
export const TextOverview = styled.p`
text-align: justify;
font-family: 'Roboto';
font-style: normal;
margin-top: 1vw;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #DDDDDD;
@media screen and (max-device-width : 480px){
    max-width: 95%;
    margin: auto;
}
`

export const RatingContainer = styled.div`
width: 61.4px;
height: 61.4px;
background: rgba(255, 255, 255, 0.1);
align-items: center;
justify-content: center;
display: flex;
p{
color: #14FF00;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 38px;
}
`

export const SideRating = styled.p`
width: 102px;
height: 40px;
margin-left: 2vw;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const CastCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px;
width: 191px;
height: 380px;
left: 1040px;
top: 0px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 0 18px;
img{
width: 175px;
left: 8px;
top: 8px;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    }
    p{
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #646464;
    }
}
`

export const CastTitle = styled.p`
width: 185px;
height: 32px;
margin-top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #131313;
`

export const CastList = styled.nav`
display: flex;
flex-direction: row;
margin-top: 50px;
height: 420px;
overflow-x: scroll;
max-width: 100%;
`

export const Body = styled.div`
max-width: 100vw;
background: #F3F3F3;
width: 100vw;
`


export const Recomendations = styled.p`
width: 208px;
height: 32px;
margin-top: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #131313;
`

export const RecommendationList = styled.nav`
display: flex;
margin-top: 50px;
flex-direction: row;
gap: 8px;
@media screen and (min-device-width : 481px){

height: 420px;
overflow-x: scroll;
max-width: 100%;
}
@media screen and (max-device-width : 480px){
    flex-wrap: wrap;
    width: 100%;
}
`
export const RecomendationCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;

img{
border-radius: 4px;

}
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    }
    p{
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #646464;
    }
}
@media screen and (min-device-width : 481px){
    width: 191px;
height: 380px;
left: 1040px;
top: 0px;
margin: 0 18px;
img{
width: 175px;
left: 8px;
top: 8px;
margin: 16px 0px;
}}
@media screen and (max-device-width : 480px){
    width: 156px;
    img{
        max-width: 156px;
    }
}
`
export const Content = styled.section`
display: flex;
flex-direction: column;

@media screen and (min-device-width : 481px){
    padding: 112px;
}
@media screen and (max-device-width : 480px){
    padding: 16px;
}
`
export const InfoContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1vw;
@media screen and (min-device-width : 481px){
height: 85%;
margin-left: 40vw;
margin-top: 5vw;
margin-right: 5vw;
margin-bottom: 5vw;
}
@media screen and (max-device-width : 480px){
    padding: 16px;
    max-width: 95%;
    margin: auto;
}
`
export const RatingCard =styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-device-width : 480px){
    margin-top: 16px;
}
`

export const TitleInfo=styled.div`
@media screen and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
}
`

