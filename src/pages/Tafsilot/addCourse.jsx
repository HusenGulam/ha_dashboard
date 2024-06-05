import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import useAxios from '../../api/useAxios';
import App from './components/CustomEditor';
import { AvatarYuklang, Container, ContentContainer, CourseInput, CustomWrapper, EachBox, EditImgDiv, FileYuklang, ImgLabel, ImgPreview, MainImg, MainText, NextButton, ProfileImageEdit, SelectContainer, SelectTexts, StepperContainer, TableDivContianer, TableTitle } from './style';
import Profile_Img from "../../assets/images/profile.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Select from "react-select";
import CkeditorComponent from './components/Ckeditor/Ckeditor';
import { ToastContainer, toast } from 'react-toastify';
import CustomEditor from './components/CustomEditor';

const steps = [
  "Kurs nomi",
  "Kurs mediasi",
  "O’quv dasturi",
  "Qo`shimcha ma`lumot",
];

const options = [
  { value: 1, label: "Prezident Maktabi uchun" },
  { value: 2, label: "Abituriyent uchun" },
  { value: 3, label: "Chet tillarini o'rganuvchilar uchun" },
  { value: 4, label: "O'qituvchilar uchun" },
  { value: 5, label: "Barcha uchun" },
];

const LEVELS = [
  { value: 1, label: "Boshlang'ich" },
  { value: 2, label: "O'rta" },
  { value: 3, label: "Murakkab" },
]

export default function AddCourse() {
  const api = useAxios()
  const navigate = useNavigate();

  const get_langauge = async () => {
    let res = await api.get('/language/')
    if (res.data.success) {
      let arr = [];
      res.data.data.filter((e) => {
        arr.push({ value: e.id, label: e.name });
      });
      setlanguageOption(arr);
    }
  }

  const get_category = async () => {
    let res = await api.get(`/category/`,{params:{type:course_type}})
    if (res.data.success) {
      // console.log(res.data)
      let arr = [];
      res.data.data?.filter((e) => {
        arr.push({ value: e.id, label: e.name });
      });
      setcategoryOptions(arr);
    }
  }



  const [render, setrender] = useState(false);
  const [img, setimg] = useState(Profile_Img);
  const [loading, setloading] = useState(false);
  const [desc, setDesc] = useState("")
  const [languageOption, setlanguageOption] = useState([]);
  const [languageValue, setlanguageValue] = useState(null);

  const [categoryOptions, setcategoryOptions] = useState([]);
  const [categoryValue, setcategoryValue] = useState(null);

  const [levelValue, setlevelValue] = useState(null);

  const [course_type, setcourse_type] = useState(null);

  //input value
  const [titleValue, settitleValue] = useState(null);
  const [shortDescription, setshortDescription] = useState(null);
  const [imgview, setimgview] = useState(null);

  useEffect(() => {
    get_category()
    get_langauge()
  }, [setcourse_type,course_type]);

  const SettingImg = (e) => {
    setimgview(e);
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setimg(URL.createObjectURL(e));
    }, 1000);
  };

  const addCourse = async () => {
    if (titleValue === null || shortDescription === null || languageValue === null || categoryValue === null || levelValue === null || imgview === null || course_type === null) {
      toast.error("Maydonlardan biri to'ldirilmadi!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let formData = new FormData();
      formData.append("title", titleValue);
      formData.append("short_description", shortDescription);
      formData.append("description", desc);
      formData.append("language", languageValue);
      formData.append("category", categoryValue);
      formData.append("level", levelValue);
      formData.append("image", imgview);
      formData.append("course_type", course_type);
      let res = await api.post('/course/', formData)
      if (res.data.success) {
        navigate(`/dashboard/editcourse/${res.data.data.id}`)
      }
    }
  }


  return (
    <Container>
      <CustomWrapper>
        <TableTitle>
          <MainText>Kurs tafsilotlari</MainText>
        </TableTitle>
        <TableDivContianer>
          <StepperContainer>
            <Box sx={{ width: "100%" }}>
              <Stepper
                activeStep={null}
                alternativeLabel
              >
                {steps.map((label, index) => {
                  const stepProps = {};

                  return (
                    <Step key={label}>
                      <StepLabel>
                        <div>{label}</div>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <React.Fragment>
                <ContentContainer>
                  <SelectContainer>
                    <EachBox>
                      <SelectTexts>Kurs nomi</SelectTexts>
                      <CourseInput
                        placeholder="Nomi"
                        value={titleValue}
                        onChange={(e) => settitleValue(e.target.value)}
                      />
                    </EachBox>
                    <EachBox>
                      <SelectTexts>Qisqacha ta'rif</SelectTexts>
                      <CourseInput
                        placeholder="Qisqacha ta'rif"
                        value={shortDescription}
                        onChange={(e) =>
                          setshortDescription(e.target.value)
                        }
                      />
                    </EachBox>
                    <EachBox>
                      <SelectTexts>Kurs tili</SelectTexts>
                      <Select
                        placeholder="Kurs tili"
                        options={languageOption}
                        onChange={(e) => setlanguageValue(e.value)}
                      />
                    </EachBox>
                    
                    <EachBox>
                      <SelectTexts>Kurs kimlar uchun</SelectTexts>
                      <Select
                        options={options}
                        placeholder="Kurs kimlar uchun"
                        onChange={(e) => setcourse_type(e.value)}
                      />
                    </EachBox>
                    <EachBox>
                      <SelectTexts>Murakkablik darajasi</SelectTexts>
                      <Select
                        options={LEVELS}
                        onChange={(e) => setlevelValue(e.value)}
                        placeholder="Murakkablik darajasi"
                      />
                    </EachBox>
                    <EachBox>
                      <SelectTexts>Kategoriyasi</SelectTexts>
                      <Select
                        options={categoryOptions}
                        onChange={(e) => setcategoryValue(e.value)}
                        placeholder="Category"
                      />
                    </EachBox>
                  </SelectContainer>
                  <ProfileImageEdit>
                    <EditImgDiv>
                      <ImgPreview>
                        {loading ? (
                          "Loading ..."
                        ) : (
                          <MainImg src={img} alt="" />
                        )}
                      </ImgPreview>
                      <ImgLabel htmlFor="img_upload">
                        <FileYuklang>Kurs rasmni yuklang ...</FileYuklang>
                        <input
                          type="file"
                          onChange={(e) => SettingImg(e.target.files[0])}
                          name=""
                          hidden
                          id="img_upload"
                        />
                        <AvatarYuklang>Rasm Yuklang </AvatarYuklang>
                      </ImgLabel>
                    </EditImgDiv>
                  </ProfileImageEdit>
                  <>
                    <SelectTexts style={{ marginLeft: 3 }}>
                      Ta'rif
                    </SelectTexts>
                    <CkeditorComponent desc={desc} setDesc={setDesc} />
                  </>
                </ContentContainer>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <NextButton
                    color="inherit"
                    type='button'
                    sx={{ mr: 1 }}
                  >
                    Tozalash
                  </NextButton>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <NextButton variant="contained" onClick={addCourse}>
                    Yaratish
                  </NextButton>
                </Box>
              </React.Fragment>
            </Box>
          </StepperContainer>
        </TableDivContianer>
      </CustomWrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
