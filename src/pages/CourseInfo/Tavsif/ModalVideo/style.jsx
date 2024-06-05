import styled from 'styled-components';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


export const Container = styled.div`
    width: 100%; 
    height: 500px;
    overflow: hidden;
    background-color: #000;
    padding-top: 0px;
    margin-top: 0px;
   
`

export const CancelIcon = styled(CloseRoundedIcon)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #f1dede;
    font-size: 30px !important;
    transition: 0.3s linear;
    &:hover{
        cursor: pointer;
    }
`

export const Title = styled.h1`
    padding: 10px;
    color: white;
`