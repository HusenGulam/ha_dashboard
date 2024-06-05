import styled from "styled-components";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { NavLink } from 'react-router-dom'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

export const Container = styled.div`
    width: 256px;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 9999999;
    box-shadow: 6px 0px 18px 0px #0000000F;
    background-color: #ffffff;
    transition: 0.5s linear;
    @media (max-width:1050px){
        left: -100%;
    }
    left: ${props => props.SidebarRef};
`
export const InsideContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const ProfileContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 20px;
`
export const LogoContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
`
export const LogoImg = styled.img`
    &:hover{
        cursor: pointer;
    }
`
export const IconImg = styled.img`
    
`
export const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    object-fit: cover;
    transition: 0.3s linear;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const InfoWrapper = styled.div`
    margin-left: 12px;
`

export const Fullname = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #192A3E;
`

export const EmailDiv = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #90A0B7;
`

export const NavsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding:15px;
    padding-bottom: 50px;
`

export const MenuConatiner = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const DashBoardIcon = styled(DashboardOutlinedIcon)`
    color: #334D6E;
    font-size: 20px !important;
`

export const VideoIcon = styled(VideoLibraryOutlinedIcon)`
    color: #334D6E;
    font-size: 20px !important;
`
export const CapIcon = styled(SchoolRoundedIcon)`
    color: #334D6E;
    font-size: 20px !important;
`
export const EditIcon = styled(DriveFileRenameOutlineRoundedIcon)`
    color: #334D6E;
    font-size: 20px !important;
`

export const NavsWord = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #334D6E;
    margin-left: 10px;
    padding: 7px;
    transition: .3s linear;
    &:hover{
        color: #0BA7BF;;
    }
`
export const NavsRow = styled(NavLink)`
        display: flex;
        align-items: center;
        margin-top: 13px;
        text-decoration: none;
        &:hover{
            color: #6bbf0b !important; 
        }
    
`

export const LogOutWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 50px;
    
`