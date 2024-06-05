import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    /* border: 3px solid yellow; */
    width: 100%;
    padding: 35px;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    padding-bottom: 1px;
    padding-right: 0px;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0.5em;
        background-color: #F5F6F8;
    }
    
    
    ::-webkit-scrollbar-thumb {
        background-color:  '#253fbc' ;
        border-radius: 0px 5px 5px 5px;
    }
    .myrestable{
        box-shadow: none !important;
        border-radius: 0 !important;
    }
    @media (max-width:1050px){
        padding: 10px;
    }
`

export const CustomWrapper = styled.div`
    width: 100%;
    max-width: 1110px;
    /* border: 1px solid blue; */
    height: 100%;
`
export const AddContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid red; */
`
export const TaxrirContainer = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 10px #ddd8d8;
    border-radius: 5px;
    margin-top: 30px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
`

//avatar change
export const ProfileImageEdit = styled.div`
    width: 100%;
    height: 150px;
    @media (max-width:550px){
        height: auto;
        margin: 0;
    }
`

export const EditImgDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 134px;
    @media (max-width:550px){
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       height: auto;
       padding-top: 15px;
       padding-bottom: 20px;
       margin: 0;
       box-sizing: border-box;
    }
`
export const ImgPreview = styled.div`
    height: 117px;
    width: 117px;
    border-radius: 6.353383541107178px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(11, 167, 191, 1) ;
    box-sizing: border-box;
`

export const MainImg = styled.img`
    height: 99px;
    width: 99px;
    border-radius: 100%;
`
export const ImgLabel = styled.label`
    height: 117px;
    width:85%;
    border: 2px dashed #DADADA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
    @media (max-width:850px){
        padding-right: 10px;
        padding-left: 10px;
        width: 70%;
    }
    @media (max-width:600px){
       justify-content: center;
       width: 70%;
       align-items: center;
       margin-top: 20px;
    }
    @media (max-width:550px){
       width: 100%;
       height: 90px;
    }
    
`

export const FileYuklang = styled.p`
    font-family: 'Lexend';
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    color: #808191;
    @media (max-width:600px){
       display: none;
    }
`
export const AvatarYuklang = styled.p`
    background: rgba(11, 167, 191, 1);
    height: 35px;
    width: 172.9375px;
    border-radius: 2.268062114715576px;
    border: none;
    font-family: Lexend;
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:500px){
        flex-direction: column;
    }
`

export const EachBox = styled.div`
    width: 48%;
    height: 90px;
    margin-top: 15px;
    @media (max-width:500px){
        width: 98%;

    }
    .css-1s2u09g-control{
        border: 1px solid #DADADA;
        border-radius: 0px;
        
    }
    .css-1okebmr-indicatorSeparator{
        display: none;
    }
`



export const SelectTexts = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding: 10px 0px;
    color: #000000;
`
export const Input = styled.input`
    border: 1px solid rgba(218, 218, 218, 1);
    width: 100%;
    outline: none;
    padding-left: 10px;
    box-sizing: border-box;
    height: 38px;
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
`

export const Block = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const SubmitBtn = styled(Button)`
    background: #009fbb !important;
    color: white !important;
    border-radius: 4px;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding: 8px 25px !important;
`
export const SubmitBtn1 = styled(Button)`
    background: #ffffff !important;
    color: rgba(11, 167, 191, 1) !important;
    border-radius: 4px;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
    font-style: normal;
    font-weight: 600;
    border: 1px solid rgba(11, 167, 191, 1) !important;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding: 8px 25px !important;
`