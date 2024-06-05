import React, { useEffect, useState } from 'react';
import { Container, DegreeImg, DegreeShow, EachBox, EachText, Fullname, ImgBlock, ImgInfoWrapper, InfoTextContainer, InnerImg, JobName, LabelStars, LastDefinition, LessonTitle, Links, LinksContainer, LitText, LitText1, MyAvatar, ProfileFirstLine, ProfileInfoWrapper, ProfileSecondLine, RightBlock, StarIcon, TavsifContianer, TextInfoWrapper, TickIcon } from './style';
import { Lorems } from '../data';
import InfoBG from '../../../assets/images/lesson/infobg.png'
import Degree from '../../../assets/images/lesson/degree.png'
import Me from '../../../assets/images/lesson/me.jpg'
import { useLocation, useOutletContext } from 'react-router-dom';
import { BaseURLMedia } from '../../../Base/Url';
import ModalVideo from './ModalVideo/ModalVideo'
const Tavsif = () => {
   const [modalVisible, setmodalVisible] = useState(false);
   const [video_url, setvideo_url] = useState(null);
   const [course] = useOutletContext()

   const OpenVideoModal = (item) => {
      setmodalVisible(true)
      setvideo_url(BaseURLMedia + item.video)
   }

   return (
      <React.Fragment>
         <ModalVideo video_url={video_url} modalVisible={modalVisible} setmodalVisible={setmodalVisible} />
         <Container>
            <LessonTitle>{course?.title}</LessonTitle>
            <TavsifContianer>
               <ImgInfoWrapper>
                  <ImgBlock>
                     <InnerImg src={`${BaseURLMedia}${course?.image}`} />
                     <InfoTextContainer>
                        <LitText>{course?.lessons_count} dars</LitText>
                        <LitText>{course?.tests} Topshirig</LitText>
                        <LitText>{course?.total_time}</LitText>
                     </InfoTextContainer>
                  </ImgBlock>
               </ImgInfoWrapper>
               <TextInfoWrapper>
                  {course?.short_description}
               </TextInfoWrapper>
               <ProfileInfoWrapper>
                  <ProfileFirstLine>
                     <EachBox>
                        <DegreeImg src={Degree} />
                        <EachText>{course?.level}</EachText>
                     </EachBox>
                     <EachBox>
                        <DegreeShow>{course?.students}</DegreeShow>
                        <EachText>O'quvchilar</EachText>
                     </EachBox>
                     <EachBox>
                        <DegreeShow>{course?.tests}</DegreeShow>
                        <EachText>Testlar</EachText>
                     </EachBox>
                  </ProfileFirstLine>
                  <ProfileSecondLine>
                     <MyAvatar src={BaseURLMedia + course?.image} />
                     <RightBlock>
                        <Fullname>{course?.teacher?.full_name}</Fullname>
                        <JobName></JobName>
                        <LabelStars onClick={() => OpenVideoModal(course?.teacher)}><StarIcon />{course?.teacher?.title}</LabelStars>
                     </RightBlock>
                  </ProfileSecondLine>
               </ProfileInfoWrapper>
            </TavsifContianer>
            <LastDefinition>
               <p dangerouslySetInnerHTML={{ __html: course?.description }}></p>
            </LastDefinition>
         </Container>
      </React.Fragment>
   );
}

export default Tavsif;