import styled from "styled-components"

export const DivMain = styled.div`
    height: 100vh;
    min-height: 600px;
    background-color: ${(props) => props.color};
    @media only screen and (min-width: 600px) {
        display: flex;
        min-height: 100vh;
    }
`

export const DivSelect = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    select {
        border: none;
        border-radius: 10px;
        height: 30px;
        width: 150px;
        font-size: 15px;
        text-align: center;
        font-weight: bolder;
    }
    @media only screen and (min-width: 600px) {
        height: 100vh;
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;

    }
`

export const DivNumbers = styled.div`background-color: white;
    min-height: 350px;
    height: 60vh;
    padding-bottom: 45px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    align-content: center;
    background-color: #EFEFEF;
    text-align: center;
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    p{
        align-items: center;
        text-align: center;
        margin-top: 40px;
        font-size: 13px;
    }
    @media only screen and (min-width: 600px) {
        height: 100vh;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 0px;
        p{
            width: 90%;
        }
    }
`

export const DivDivision = styled.div`
    max-height: 65px;
    height: 25px;
    width: 100%;
    position: relative;
    path{
        fill: #EFEFEF;
    }
    @media only screen and (min-width: 600px) {
        width: 0px;
    }
`

export const DivBallNumber = styled.div`
    z-index: 1;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    border: none;
    border-radius: 50%;
    margin: 5px;
    width: 76px;
    height: 76px;
    background-color: #ffff;
    @media only screen and (max-width: 430px) {
        display: flex;
        margin: 2px;
        width: 50px;
        height: 50px;
    }
`