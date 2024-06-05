import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar';
import { Outlet} from 'react-router-dom'
import { Container, InnerContainer } from './style';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const HomePage = () => {
  const [SidebarRef, setSidebarRef] = useState('0px !important')
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(windowDimensions.width>1050){
      setSidebarRef('0px !important')
    }else if(windowDimensions.width<=1050){
      setSidebarRef('-100% !important')
    }
  }, [windowDimensions])
  


  return (
    <React.Fragment>
        <SideBar SidebarRef={SidebarRef}  />
        <Navbar SidebarRef={SidebarRef} setSidebarRef={setSidebarRef} />
        <Container>
          <InnerContainer> 
              <Outlet />
          </InnerContainer>
        </Container>
    </React.Fragment>
  )
}

export default HomePage