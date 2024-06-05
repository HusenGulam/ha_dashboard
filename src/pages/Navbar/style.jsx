import { IconButton } from "@mui/material";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export const Container = styled.div`
    height: 60px;
    width: 100%;
    position: absolute;
    background-color: white;
    left: 0px;
    top: 0px;
    z-index: 10;
    border-radius: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrapper = styled.div`
    padding: 5px;
    h2{
        color: #1788f9;
    }
`
export const RightWrapper = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1050px){
        width: 200px;
    }
`

export const Avatar = styled.img`
    height: 39px;
    width: 39px;
    border-radius: 100px;
    transition: 0.3s linear;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

`

export const NotificationImg = styled.img`
     transition: 0.3s linear;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const Btn = styled(IconButton)`
    display: none !important;
    @media (max-width:1050px){
        display: flex !important;
    }
`

export const MenuIcons = styled(MenuIcon)`
    color: #1788f9;
`
export const XIcons = styled(CloseIcon)`
    color: #1788f9;
`