import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import Starr from '@mui/icons-material/StarPurple500Sharp';

export const Container = styled.div`
    width: 100%;
    margin-top: 40px;
`

export const LessonTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 41px;
    color: #333333;
    @media (max-width:660px){
        font-size: 22px;
        font-weight: 500;
        text-align: center;
    }
`

export const TavsifContianer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    @media (max-width:1055px){
        flex-direction: column-reverse;
    }
`

export const ImgInfoWrapper = styled.div`
    width: 30%;
    @media (max-width:1055px){
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
export const TextInfoWrapper = styled.div`
    width: 40%;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 35px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width:1055px){
        order: -1;
        width: 100%;
    }
`
export const ProfileInfoWrapper = styled.div`
    width: 27%;
    @media (max-width:1055px){
        width: 100%;
        display: flex;
        align-items: center;
    }
    @media (max-width:660px){
        flex-direction: column;
    }
`
export const ImgBlock = styled.div`
    width: 100%;
    border-radius: 16.0246524810791px;
    box-shadow: 0px 2.033235549926758px 5.0830888748168945px 0px #00000040;
    overflow: hidden;
    background-color: #fff;
`

export const InnerImg = styled.img`
    width: 100%;
    height: 270px;
    object-fit: cover;
`

export const InfoTextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
`
export const LitText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 11.1828px;
    line-height: 14px;
    color: #000000;
`
export const LitText1 = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 11.1828px;
    line-height: 14px;
    color: #363CC7;
    background: #363CC73B;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 84px;
    height: 26px;
    justify-content: space-around;

`

export const TickIcon = styled(DoneSharpIcon)`
    color: #363CC7;
    font-size: 18px !important;
`


export const ProfileFirstLine  = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1055px){
        justify-content: flex-start;
    }
    @media (max-width:660px){
       justify-content: space-around;
    }

`

export const EachBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    flex-direction: column;
    @media (max-width:1055px){
        margin: 10px;
    }
`

export const DegreeImg = styled.img`
    
`
export const DegreeShow = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    line-height: 40px;
    text-align: center;

    color: #000000;
`

export const EachText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    margin-top: 8px;
    color: #000000;
`


export const ProfileSecondLine  = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    @media (max-width:1055px){
        margin-top: 0px;
    }
    @media (max-width:660px){
        margin-top: 40px;
    }
`

export const MyAvatar = styled.img`
    height: 89px;
    width: 89px;
    margin: 1px;
    object-fit: cover;
    border-radius: 100%;
    @media (max-width:460px){
        width: 70px;
        height: 70px;
    }
`

export const RightBlock = styled.div`
    margin-left: 14px;
`

export const Fullname = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #000000;
`
export const JobName = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #000000;
    margin-top: 3px;
    margin-bottom: 3px;
`
export const LabelStars = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px;
    gap: 4px;

    width: auto;
    max-width: 300px;
    height: 31px;

    background: #4209A2;
    border-radius: 5px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
    transition: .3s linear;
    &:hover{
        background: #945af8;
        cursor: pointer;
    }
`

export const StarIcon = styled(Starr)`
    color: yellow;
    font-size: 18px !important;
`

export const LastDefinition = styled.div`
    width: 100%;
    box-sizing: border-box;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 80px;
`