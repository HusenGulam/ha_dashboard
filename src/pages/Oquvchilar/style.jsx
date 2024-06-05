import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import { Button } from "@mui/material";

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

export const AddButton = styled(NavLink)`
    box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24);
    background: #0BA7BF;
    border-radius: 4px;
    height: 42px;
    width: 160px;
    border: none;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    outline: none;
    transition: 0.5s linear;
    &:hover{
        background: #13c6e1;
        cursor: pointer;
    }
`

export const TableDivContianer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 45px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
`

export const TableTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const MainText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 0.01em;
    color: #000000;
    @media (max-width:500px){
        font-size: 20px;
    }
`
export const TableWrapper = styled.div`
    width: 100%;
    margin-top: 9px;
    .MuiTableCell-body{
        border-bottom: 1px solid #EBEFF2 !important;
        font-family: 'Lexend' !important;
        color: #707683 !important;
    }
    .MuiTableCell-head{
        border-bottom: 1px solid #EBEFF2 !important;
        font-family: 'Lexend' !important;
        color: #9AA6B7 !important;
    }
    
`