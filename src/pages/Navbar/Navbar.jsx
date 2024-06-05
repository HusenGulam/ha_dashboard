import React, { useRef } from 'react'
import { Avatar, Btn, Container, LogoWrapper, MenuIcons, NotificationImg, RightWrapper, XIcons } from './style'

import Me from '../../assets/icons/profile_photo.png';
import Notification from '../../assets/icons/notifications.png';
import { BaseURLMedia } from '../../Base/Url';

const Navbar = ({SidebarRef,setSidebarRef}) => {
  
  const MyData = localStorage.getItem('user1') !==null ? JSON.parse(localStorage.getItem('user1')) : {};


  function ToggleMenu() {
    if(SidebarRef=='0px !important'){
      setSidebarRef('-100% !important')
    }else{
      setSidebarRef('0px !important')
    }
  }

  return (
    <Container>
        <LogoWrapper>
            <h2>Dashboard</h2>
        </LogoWrapper>
        <RightWrapper>
            <NotificationImg src={Notification} />
            <Avatar  src={`${BaseURLMedia}${MyData.image}`} />
            <Btn onClick={ToggleMenu}>
              
              {
                SidebarRef === '0px !important' ? <XIcons /> : <MenuIcons />
              }
            </Btn>
        </RightWrapper>
    </Container>
  )
}

export default Navbar