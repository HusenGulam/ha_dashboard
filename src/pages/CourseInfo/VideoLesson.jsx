import React, { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Video from './Player';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, CreateNewPart, DetailAc, DownContainer, InnerDownWrapper, InnerMenu, LessonContainer, LessonMinute, LessonText, LessonTitle, LessonWord, LessonWord1, Links, Links2, LinksContainer, ListContainer, MenuOpenContainer, MenuTitle, MylessonsRow, MyLessonTitle, OrtgaBtn, SaveIcon, TickOutline, VideoContainer, VideoIcon, Wrapper } from './style';
import { Lessons, NavsDATA } from './data';
import { BaseURLMedia } from '../../Base/Url';


const VideoLesson = ({ course }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [show, setshow] = useState(true);
  const [selected_id, setselected_id] = useState(null)
  const [video_url, setvideo_url] = useState(null);
  const Base_style = localStorage.getItem('maktab') !== null ? localStorage.getItem('maktab') : '0';


  const OnSelect = (item, section) => {
    console.log(item);
    if (item.video_type == "Video") {
      setvideo_url(BaseURLMedia + item.video)
    } else {
      setvideo_url(item.video_link)
    }
    setselected_id(section.id)
  }
  useEffect(() => {
    setselected_id(course?.sections[0]?.id)
    if (course?.sections.length > 0) {
      if (course?.sections[0].videos.length > 0) {
        if (course?.sections[0]?.videos[0]?.video_type == 'Video') {
          setvideo_url(BaseURLMedia + course?.sections[0]?.videos[0]?.video)
        } else {
          setvideo_url(course?.sections[0]?.videos[0]?.video_link)
        }
      }
    }

  }, [course])

  return (
    <React.Fragment>
      <Container num={Base_style}>
        <LessonContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <LessonTitle>  {course?.title} </LessonTitle>
            <OrtgaBtn onClick={() => navigate(-1)}>Ortga</OrtgaBtn>
          </div>
          <Wrapper>
            <VideoContainer>
              <Video show={true} setshow={setshow} video_url={video_url} />
            </VideoContainer>
            <ListContainer Base_style={Base_style}>
              {course?.sections?.map((section, index) => (
                <Accordion key={index} style={{ backgroundColor: selected_id == section.id ? Base_style == '1' ? '#FFF6F0' : Base_style == '2' ? '#BAF6FF' : Base_style == '3' ? '#BAF6FF' : '#80DDB4' : '' }} className='myaccordion'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <LessonWord Base_style={Base_style}>{section.title.slice(0, 20)}</LessonWord>
                  </AccordionSummary>
                  {section?.videos?.map((video, key) => (
                    <DetailAc Base_style={Base_style} onClick={() => OnSelect(video, section)}>

                      <LessonWord1 Base_style={Base_style}><VideoIcon /> {video.title.slice(0, 20)}</LessonWord1>
                      <LessonMinute Base_style={Base_style} style={{ fontSize: "11px" }}>{video.time} min</LessonMinute>


                    </DetailAc>
                  ))}
                </Accordion>
              ))}
            </ListContainer>
          </Wrapper>
        </LessonContainer>
      </Container>
      <DownContainer num={Base_style}>
        <InnerDownWrapper>
          <LinksContainer>
            {
              NavsDATA?.map((item, ii) => (
                <Links key={ii} isctive={item.path === location.pathname ? 1 : 0} to={`/dashboard/courseinfo/${course?.id}/${item.path}`} state={{ course: course }}>{item.name}</Links>
              ))
            }

          </LinksContainer>
          <Outlet context={[course]} />
        </InnerDownWrapper>
      </DownContainer>
    </React.Fragment>
  );
}

export default VideoLesson;