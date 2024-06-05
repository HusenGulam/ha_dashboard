import React, { useEffect, useState } from "react";
import {
  AddContainer,
  AvatarYuklang,
  Block,
  BottomContainer,
  Container,
  CustomWrapper,
  EachBox,
  EditImgDiv,
  FileYuklang,
  ImgLabel,
  ImgPreview,
  Input,
  MainImg,
  ProfileImageEdit,
  SelectContainer,
  SelectTexts,
  SubmitBtn,
  SubmitBtn1,
  TaxrirContainer,
} from "./style";
import Profile_Img from "../../assets/images/user.png";
import Select from "react-select";
import useAxios from "../../api/useAxios";
import { BaseURLMedia } from "../../Base/Url";
import PlayIcon from '@mui/icons-material/PlayCircle'
import ProgresModal from "../Course/Lesson/ProgresModal";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import ChangePassword from "./ChangePassword/ChangePassword";
import Swal from "sweetalert2";

const Taxrirlash = () => {
  const api = useAxios()
  const [imgview, setimgview] = useState("");
  const [teacher, setTeacher] = useState({})
  const [username, setUsername] = useState(null)
  const [usernameStatus, setUsernameStatus] = useState(null)
  const [img, setimg] = useState(Profile_Img);
  const [loading, setloading] = useState(false);
  const [video, setVideo] = useState(null)
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [percentage, setPercentage] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [playerOpen, setPlayerOpen] = useState(false)
  const [playerUrl, setPlayerUrl] = useState(null)


  const [passowrdModal, setPasswordModal] = useState(false)

  const ChangePasswordReq = async (data) => {
    let res = await api.put('/change-password/', data)
    if (res.data.success) {
      setPasswordModal(false)
      Swal.fire({
        title: "Parol o'zgartirildi!",
        text: `Sizning parolingiz o'zgartirildi. Iltimos parolni eslab qoling!`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
      })
    } else {
      Swal.fire({
        title: "Parolni o'zgartirishda xatolik!",
        text: `Parolni o'zgartirishda qandaydur xatolik yuz berdi. Qayta urinib ko'ring!`,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
      })
    }
  }

  const setImagePost = (data) => {
    api.post('/change-image/', data).then(res => {
      if (res.data.success) {
        localStorage.setItem('user1', JSON.stringify(res.data.data))

      }
    })
  }

  const get_teacher = async () => {
    let res = await api.get('profile')
    if (res.data.success) {
      setTeacher(res.data.data)
      if (res.data.data.image) {
        setimg(`${BaseURLMedia}${res.data.data.image}`)
        setUsername(res.data.data.username)
      }
    }
  }

  useEffect(() => { get_teacher() }, [])

  const SettingImg = (e) => {
    setimgview(e);
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setimg(URL.createObjectURL(e));
    }, 1000);
    let fData = new FormData()
    fData.append('image', e)
    setImagePost(fData)
  };

  const VideoUpload = async (e) => {
    let fData = new FormData()
    fData.append('video', e)
    setIsUploading(true)
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total)

        if (percent < 100) {
          setPercentage(percent)
        }
      }
    }
    let res = await api.post(`/change-video/`, fData, options)
    if (res.data.success) {
      setTeacher(res.data.data)
      setIsUploading(false)
    } else {
      setIsUploading(false)
    }
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTeacher((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = async () => {
    setTeacher({ ...teacher, ['username']: username })
    teacher.username = username
    let res = await api.post('/profile/', teacher)
    if (res.data.success) {
      setTeacher(res.data.data)
      localStorage.setItem('user1', JSON.stringify(res.data.data))
      Swal.fire({
        icon: 'success',
        title: 'Success...',
        text: "Ma'lumot tahrirlandi",
        confirmButtonText: 'Ok!',

      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Ma'lumotni tahrirlashda xatolik!",
        confirmButtonText: 'Ok!',

      })
    }
  }

  const ChangeUsername = (e) => {
    let value = e.target.value
    if (value !== "") {
      api.get('/check-username/', { params: { username: value } }).then(
        res => {
          if (res.data.success) {
            setUsernameStatus(true)
          } else {
            setUsernameStatus(false)
          }
        }
      )
    } else {
      setUsernameStatus(false)
    }
    setUsername(value)

  }

  const playVideo = () => {
    setPlayerOpen(true)
  }

  return (
    <Container>
      <CustomWrapper>
        <AddContainer>
          <h1>Tahrirlash</h1>
        </AddContainer>
        <TaxrirContainer>
          <ProfileImageEdit>
            <EditImgDiv>
              <ImgPreview>
                {loading ? "Loading ..." : <MainImg src={img} alt="" />}
              </ImgPreview>
              <ImgLabel htmlFor="img_upload">
                <FileYuklang>Rasm yuklang ...</FileYuklang>
                <input
                  type="file"
                  onChange={(e) => SettingImg(e.target.files[0])}
                  name=""
                  hidden
                  id="img_upload"
                />
                <AvatarYuklang>Rasmni Yuklang </AvatarYuklang>
              </ImgLabel>
            </EditImgDiv>
          </ProfileImageEdit>
          <ProfileImageEdit>
            <EditImgDiv>
              <ImgPreview style={{ cursor: 'pointer' }} onClick={() => playVideo()}>
                <PlayIcon style={{ fontSize: "100px", color: 'white' }} />
              </ImgPreview>
              <ImgLabel htmlFor="video_upload">
                <FileYuklang>{teacher?.video ? "Videoni ko'rish uchun Playni bosing!" : "Video yuklang ..."}</FileYuklang>
                <input
                  type="file"
                  onChange={(e) => VideoUpload(e.target.files[0])}
                  name=""
                  hidden
                  id="video_upload"
                />
                <AvatarYuklang>Video Yuklang </AvatarYuklang>
              </ImgLabel>
            </EditImgDiv>
          </ProfileImageEdit>
          <SelectContainer>
            <EachBox>
              <SelectTexts>Ism Familya</SelectTexts>
              <Input type={'text'} placeholder="Ism Familya" name="full_name" value={teacher.full_name} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Mutaxassislik</SelectTexts>
              <Input type={'text'} placeholder="Mutaxassislik" name="title" value={teacher.title} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Username</SelectTexts>
              <Input type={'text'} placeholder="Username" name="username" value={username} onChange={ChangeUsername} />
              {usernameStatus === true ?
                <span style={{ fontSize: "11px", color: 'green' }}>Username to'g'ri!</span> : usernameStatus === false ?
                  <span style={{ fontSize: "11px", color: 'red' }}>Bunday username mavjud!</span> : null}
            </EachBox>
            <EachBox>
              <SelectTexts>Email</SelectTexts>
              <Input type={'email'} placeholder="email" name="email" value={teacher.email} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Telegram</SelectTexts>
              <Input placeholder="@username" type={"text"} name="telegram" value={teacher.telegram} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Facebook</SelectTexts>
              <Input placeholder="Facebook" type={"text"} name="facebook" value={teacher.facebook} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Instagram</SelectTexts>
              <Input placeholder="Instagram" type={"text"} name="instagram" value={teacher.instagram} onChange={onChangeHandler} />
            </EachBox>
            <EachBox>
              <SelectTexts>Website</SelectTexts>
              <Input placeholder="website" type={"text"} name="website" value={teacher.website} onChange={onChangeHandler} />
            </EachBox>
          </SelectContainer>
          <BottomContainer>
            <Block>
              <SubmitBtn1 onClick={() => setPasswordModal(true)}>Parolni o'zgartirish</SubmitBtn1>
              <SubmitBtn1 onClick={get_teacher}>Bekor qilish</SubmitBtn1>
              <SubmitBtn onClick={onSubmitHandler} disabled={usernameStatus === false ? true : false}>Tasdiqlash</SubmitBtn>
            </Block>
          </BottomContainer>
        </TaxrirContainer>
      </CustomWrapper>
      <ProgresModal open={isUploading} percentage={percentage} />
      <ChangePassword open={passowrdModal} close={() => setPasswordModal(false)} handleSubmit={ChangePasswordReq} />
      {playerOpen ?
        <VideoPlayer open={playerOpen} url={BaseURLMedia + teacher.video} close={() => setPlayerOpen(false)} /> : null}
    </Container>
  );
};

export default Taxrirlash;
