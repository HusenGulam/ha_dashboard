import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media (max-width:1000px){
        height:auto;
        padding-bottom: 30px;
    }
`

export const LessonContainer = styled.div`
    width: 98%;
    height: auto;
    min-height: 400px;
    @media (max-width:1000px){
        margin-top: 30px;
    }
`
export const LessonTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 41px;
    color: #272626;
    @media (max-width:500px){
        font-size: 25px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
    margin-top: 30px;
    @media (max-width:1000px){
        flex-direction: column;
        height: auto;
    }
`
export const VideoContainer = styled.div`
    width:60%;
    height:100%;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width:1000px){
        height: 400px;
        width: 100%;
    }
    @media (max-width:500px){
        height: 300px;
    }
`
export const ListContainer = styled.div`
    width:33%;
    /* background-color: rgba(27, 0, 70, 1); */
    background-color: white;
    height:100%;
    padding: 12px;
    box-sizing: border-box;
    min-height: 400px;
    border-radius: 10px;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 0.5em;
    }
    
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${p=>p.Base_style == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794E' } ;
        
        border-radius: 5px;
    }
    @media (max-width:1000px){
        width: 100%;
        margin-top: 15px;
    }
    .css-i4bv87-MuiSvgIcon-root{
         color: #F27221  !important;
    }
`

export const LessonText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    background-color: ${props=>props.isfine};
    margin-top: 10px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: .3s linear;
    &:hover{
        cursor: pointer;
        background-color:rgba(64, 69, 187, 1);
    }
`
export const VideoIcon = styled(PlayCircleOutlineIcon)`
    color: white;
    margin-right: 10px;
`
export const DetailAc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover{cursor: pointer;
    }
`
export const LessonWord = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 28px;
    color:  ${p=>p.Base_style == '1' ?  '#0BA7BF' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#0BA7BF' } ;
`
export const LessonWord1 = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;
    color:  ${p=>p.Base_style == '1' ?  ' #F27221' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B' } ;
    display: flex;

    align-items: center;
`

export const LessonMinute = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;
    color: ${p=>p.Base_style == '1' ?  ' #F27221' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B' };
`

export const DownContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 200px;
    background-size: cover;
    background-position: center start;
`

export const InnerDownWrapper = styled.div`
    max-width: 1500px;
    width: 98%;
`


export const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 25px;
    @media (max-width:555px){
        flex-direction: column;
    }
`

export const Links = styled(Link)`
    font-family: 'Lexend';
    font-size: 18px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0px;
    text-align: left;
    color:  ${p=>p.isctive === 1 ? '#363CC7' : '#333333'};
    padding:0px 40px;
    &:nth-child(-n+1){
        padding: 0px;
    }
    &:hover{
        color: #363CC7;
        cursor: pointer;
    }
    @media (max-width:850px){
        padding: 0px 20px;
    }
    @media (max-width:700px){
        padding: 0px 10px;
        font-size: 15px;
    }
    @media (max-width:555px){
        font-size: 18px;
    }
    text-decoration: none;
`
export const SaveIcon = styled(BookmarkBorderSharpIcon)`
    color: #525252 ;
    margin-left: 8px;
`
export const MenuOpenContainer = styled.div`
   height: 240px;
    width: 245px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 2px #b1b1b1;
    background-color: white;
    position: absolute;
    top: 0px;
    margin-top: 30px;
    display: none;
    padding: 14px;
    box-sizing: border-box;
    z-index: 9999999;
`
export const Links2 = styled.div`
    font-family: 'Lexend';
    font-size: 18px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0px;
    text-align: left;
    color: #333333  ;
    padding:0px 40px;
    display: flex;
    align-items: center;
    position: relative;
    &:hover{
        cursor: pointer;
    }
    &:hover ${SaveIcon}{
        color: #363CC7;
    }
    &:hover ${MenuOpenContainer}{
        display: block;
    }

`

export const MenuTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`

export const MyLessonTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 18px;
    padding-bottom: 5px;
    border-bottom: 2px solid #363CC7;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TickOutline = styled(CheckCircleIcon)`
    color: #363CC7;
    font-size: 20px !important;
`

export const MylessonsRow = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-top: 10px;
    color: #000000;
    &:hover{
        color: #363CC7;
        cursor: pointer;
    }
`

export const InnerMenu = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const CreateNewPart = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #363CC7;
    position: absolute;
    bottom: 0px;
    right: 0px;
`

export const OrtgaBtn = styled.div`
    height: 42px;
    width: 160px;
    border-radius: 5px;
    background: rgba(11, 167, 191, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    transition: 0.5s linear;
    &:hover{
        cursor: pointer;
        background: #1bd1ec;

    }
`