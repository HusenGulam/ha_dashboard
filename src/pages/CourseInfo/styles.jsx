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

