import React, { useContext } from 'react'
import { Avatar, CapIcon, Container, DashBoardIcon, EditIcon, EmailDiv, Fullname, IconImg, InfoWrapper, InsideContainer, LogoContainer, LogoImg, LogOutWrapper, MenuConatiner, NavsContainer, NavsRow, NavsWord, ProfileContainer, VideoIcon } from './style';
import {Link, useNavigate} from 'react-router-dom';
import Profile_Img from '../../assets/images/profile_photo.png'
import Logo_Img from '../../assets/icons/logo.png'
import Toggle_Img from '../../assets/icons/toggle.png'
import AuthContext from '../../context/AuthContext';
import { BaseURLMedia } from '../../Base/Url';


const SideBar = ({SidebarRef}) => {
  const {logOutUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const MyData = localStorage.getItem('user1') !==null ? JSON.parse(localStorage.getItem('user1')) : {};

  

  return (
    <Container SidebarRef={SidebarRef} >
      <InsideContainer>
        <LogoContainer>
            <LogoImg onClick={()=>navigate('/dashboard')} src={Logo_Img} />
        </LogoContainer>
        <ProfileContainer>
          <Avatar src={BaseURLMedia+MyData?.image} />
          <InfoWrapper>
              <Fullname>{MyData?.full_name}</Fullname>
              <EmailDiv>{MyData?.username}</EmailDiv>
          </InfoWrapper>
        </ProfileContainer>
        <NavsContainer>
          <MenuConatiner>
            <NavsRow to='/dashboard/'>
                <DashBoardIcon />
                <NavsWord>Dashboard</NavsWord>
            </NavsRow>
            <NavsRow to='/dashboard/mycourses'>
                <VideoIcon />
                <NavsWord>Mening kurslarim</NavsWord>
            </NavsRow>
            <NavsRow to='/dashboard/students'>
                <CapIcon />
                <NavsWord>Oquvchilar</NavsWord>
            </NavsRow>
            <NavsRow to='/dashboard/edit'>
                <EditIcon />
                <NavsWord>Tahrirlash</NavsWord>
            </NavsRow>
          </MenuConatiner>
          <LogOutWrapper>
                <NavsRow to='#' onClick={logOutUser}>
                  <IconImg src={Toggle_Img} />
                  <NavsWord>Chiqish</NavsWord>
              </NavsRow>
          </LogOutWrapper>
        </NavsContainer>
      </InsideContainer>
    </Container>
  )
}

export default SideBar