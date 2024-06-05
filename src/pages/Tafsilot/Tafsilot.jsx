import React, { useEffect, useState } from "react";
import {
  ActionWrap,
  ActionWrapper,
  AddBtn,
  AddBtn1,
  AvatarYuklang,
  Bolimtext,
  Bolimtext1,
  BottomWrap,
  BottomWrap1,
  Btn,
  Buttons,
  Container,
  ContentContainer,
  CourseInput,
  CustomWrapper,
  DelIcon,
  DetailAc,
  DivOfVariantDiv,
  EachBox,
  EditIcon,
  EditImgDiv,
  EveryBoxInp,
  FileYuklang,
  ImgCont,
  ImgCont1,
  ImgLabel,
  ImgPreview,
  InnerContainer,
  InpLinkText,
  InputIn,
  InputLink,
  InputVar,
  InputVar1,
  InpWrapper,
  InpWrapper1,
  JustWrap,
  LeftMe,
  LeftWrap,
  LessonMinute,
  LessonWord,
  LessonWord1,
  MainHeight,
  MainImg,
  MainText,
  MarginLeft10,
  NextButton,
  NumberText,
  PlayIm,
  ProfileImageEdit,
  ProgresDiv,
  RightMe,
  RightWrap,
  SavolDiv,
  Savollartext,
  SelectContainer,
  SelectTexts,
  StepperContainer,
  SuccesContainer,
  SuccesSavedimg,
  SuccesSavedText,
  TableDivContianer,
  TableTitle,
  TestContanier,
  TestTitle,
  ThirdContainer,
  ThirdContainer1,
  VariantAddingWrapper,
  VideoCourseEx,
  VideoIcon,
  VideoUploadContainer,
  VideoYuklang,
  VidText,
  WWraper,
} from "./style";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomEditor from "./components/CustomEditor";
import { Link, useNavigate } from "react-router-dom";
import Profile_Img from "../../assets/images/profile.png";
import SavedIm from "../../assets/images/su2.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PlayFill from "../../assets/images/playfill.png";
import Select from "react-select";
import useAxios from "./../../api/useAxios";
import { BaseURL } from "../../Base/Url";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Accordion, AccordionSummary, Checkbox } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRef } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from "sweetalert2";
const options = [
  { value: 1, label: "Prezident Maktabi uchun" },
  { value: 2, label: "Abituriyent uchun" },
  { value: 3, label: "Chet tillarini o'rganuvchilar uchun" },
  { value: 4, label: "O'qituvchilar uchun" },
  { value: 5, label: "Barcha uchun" },
];

const optionsVideoTypes = [
  { value: "Youtube", label: "Youtube Link" },
  { value: "Video", label: "Video" },
  { value: "Vimeo", label: "Vimeo" },
];
const Tafsilot = () => {
  const api = useAxios();
  const [render, setrender] = useState(false);
  const [img, setimg] = useState(Profile_Img);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const steps = [
    "Kurs nomi",
    "Kurs mediasi",
    "O’quv dasturi",
    "Qo`shimcha ma`lumot",
  ];
  const Base_style =
    localStorage.getItem("maktab") !== null
      ? localStorage.getItem("maktab")
      : "0";

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitleVal("");
    setorderValue("");
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose13 = () => {
    setModal3Visible(false);
  };

  const [activeStep, setActiveStep] = React.useState(
    localStorage.getItem("active_step") !== null
      ? localStorage.getItem("active_step") * 1
      : 0
  );
  const [skipped, setSkipped] = React.useState(new Set());

  //options
  const [leveloptions, setleveloptions] = useState([]);
  const [levelValue, setlevelValue] = useState(null);

  //create quiz states
  const [levelValue1, setlevelValue1] = useState(null);
  const [quiztitle, setquiztitle] = useState("");
  const [quizdescription, setquizdescription] = useState("");
  const [quiztime, setquiztime] = useState("");
  const [quizorder, setquizorder] = useState("");
  const [passed_percent, setpassed_percent] = useState("");

  const [languageOption, setlanguageOption] = useState([]);
  const [languageValue, setlanguageValue] = useState(null);

  const [categoryOptions, setcategoryOptions] = useState([]);
  const [categoryValue, setcategoryValue] = useState(null);

  const [course_type, setcourse_type] = useState(null);

  //input value
  const [titleValue, settitleValue] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [Description, setDescription] = useState("");
  const [imgview, setimgview] = useState(null);



  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // const isStepOptional = (step) => {
  //   return step === 1;
  // };
  let course_id =
    localStorage.getItem("course_id") !== null
      ? localStorage.getItem("course_id")
      : -1;

  useEffect(() => {
    course_id =
      localStorage.getItem("course_id") !== null
        ? localStorage.getItem("course_id")
        : -1;
  }, [render, setrender]);

  function Step1CreateCourse() {
    let formData = new FormData();
    formData.append("title", titleValue);
    formData.append("short_description", shortDescription);
    formData.append("description", Description);
    formData.append("language", languageValue);
    formData.append("category", categoryValue);
    formData.append("level", levelValue);
    formData.append("image", imgview);
    formData.append("course_type", course_type);

    api.post(BaseURL + "/course/", formData).then((res) => {
      console.log(res);
      localStorage.setItem("course_id", res.data.data.id);
      localStorage.setItem("active_step", activeStep + 1);
      course_id = res.data.data.id;
      setrender(!render);
      let data = new FormData()
      data.append('step', activeStep + 1)
      api.post(`/course-step/${course_id}/`, data).then((res) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("res active ", res);
      });
    });
  }

  //section modal states
  const [titleVal, setTitleVal] = useState("");

  const [orderValue, setorderValue] = useState("");

  //sections data states
  const [CourseSectionsData, setCourseSectionsData] = useState([]);

  //questionsState
  const [questionsDATA, setquestionsDATA] = useState([]);

  //test data states
  const [CoursetestData, setCoursetestData] = useState([]);

  //lesson states
  const [lessontitle, setlessontitle] = useState("");
  const [sectionIDValue, setsectionIDValue] = useState(null);
  const [VideoTypesValue, setVideoTypesValue] = useState("Youtube");
  const [lessonvideolink, setlessonvideolink] = useState("");
  const [lessonsummary, setlessonsummary] = useState("");
  const [lessontime, setlessontime] = useState("");
  const [lessonorder, setlessonorder] = useState("");
  const [lessonVideo, setLessonVideo] = useState(null)

  //modals state
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  ///addding queestions
  const [quzi_Idforquery, setquz_iIdforquery] = useState(null);
  const [questionQuery, setquestionQuery] = useState("");
  const [OptionA, setOptionA] = useState("");
  const [OptionB, setOptionB] = useState("");
  const [OptionC, setOptionC] = useState("");
  const [OptionD, setOptionD] = useState("");
  const [checkCode, setCheckCode] = useState(null);
  const [true_answer, settrue_answer] = useState("");
  const [questionOrder, setquestionOrder] = useState(null);
  const [chooseTrueState, setchooseTrueState] = useState("");

  //attachment state
  const [attachTitle, setattachTitle] = useState("");
  const [attachFile, setattachFile] = useState(null);
  const [attachOrder, setattachOrder] = useState(null);
  const [allattachments, setallattachments] = useState([]);

  const [percentage, setPercentage] = useState(0)
  const [isUploading, setIsUploading] = useState(false)


  useEffect(() => {
    api.get(BaseURL + `/attachment/?course=${course_id}`).then((res) => {
      console.log("test", res.data.data);
      setallattachments(res.data.data);
    });
  }, [setrender, render]);

  const CreateAttachments = () => {
    let formData = new FormData();
    formData.append("course", course_id);
    formData.append("title", attachTitle);
    formData.append("file", attachFile);
    formData.append("order", attachOrder);
    api.post(`/attachment/`, formData).then((res) => {
      console.log(res);
      if (res) {
        setrender(!render);
        setattachTitle("");
        setattachFile("");
        setattachOrder("");
        setModal4Visible(false);
      }
    });
  };

  //ref
  const opA = useRef();
  const opB = useRef();
  const opC = useRef();
  const opD = useRef();

  const ChooseTRUE = (e, which) => {
    console.log(e, which);
    if (e) {
      setchooseTrueState(which);
      if (which === "A") {
        settrue_answer(OptionA);
      } else if (which === "B") {
        settrue_answer(OptionB);
      } else if (which === "C") {
        settrue_answer(OptionC);
      } else if (which === "D") {
        settrue_answer(OptionD);
      }
    }
  };
  const ChooseTRUE1 = () => {
    if (chooseTrueState === "A") {
      settrue_answer(OptionA);
    } else if (chooseTrueState === "B") {
      settrue_answer(OptionB);
    } else if (chooseTrueState === "C") {
      settrue_answer(OptionC);
    } else if (chooseTrueState === "D") {
      settrue_answer(OptionD);
    }
  };

  const ChangeChekCode = (code) => {
    if (code == checkCode) {
      setCheckCode(null);
    } else setCheckCode(code);
  };

  //add question function
  const AddQuestionToQuiz = () => {
    let formData = new FormData();
    formData.append("quiz", quzi_Idforquery);
    formData.append("query", questionQuery);
    formData.append("optionA", OptionA);
    formData.append("optionB", OptionB);
    formData.append("optionC", OptionC);
    formData.append("optionD", OptionD);
    formData.append("correct_answer", true_answer);
    formData.append("order", questionOrder);
    console.log("====================================");
    console.log({ tru: true_answer, quzi: quzi_Idforquery });
    console.log("====================================");
    api.post("/question/", formData).then((res) => {
      if (res) {
        console.log(res);
        setrender(!render);
        setquz_iIdforquery(null);
        setquestionQuery("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setquestionOrder("");
        setCheckCode(null);
        setModal2Visible(false);
      }
    });
  };

  ///show questions
  const OpenShowQuestionModal = (item) => {
    setModal3Visible(true);
    console.log("questionsdata", item.questions);
    setquestionsDATA(item.questions);
  };

  const handleClickOpen1 = (id) => {
    setsectionIDValue(id);
    setOpen1(true);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      Step1CreateCourse();
    } else if (activeStep === 1) {
      localStorage.setItem("active_step", activeStep + 1);
      let data = new FormData()
      data.append('step', activeStep + 1)
      api.post(`/course-step/${course_id}/`, data).then((res) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("====================================");
        console.log("res active ", res);
        console.log("====================================");
      });
    } else if (activeStep === 2) {
      let data = new FormData()
      data.append('step', activeStep + 1)
      localStorage.setItem("active_step", activeStep + 1);
      api.post(`/course-step/${course_id}/`, data).then((res) => {
        console.log("res active ", res);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      });
    } else if (activeStep === 3) {
      let data = new FormData()
      data.append('step', activeStep + 1)
      //joylash
      localStorage.setItem("active_step", activeStep + 1);
      api.post(`/course-step/${course_id}/`, data).then((res) => {
        console.log("res active ", res);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // setActiveStep(0);
    let data = new FormData()
    data.append('step', activeStep + 1)
    //joylash
    localStorage.setItem("active_step", activeStep + 1);
    api.post(`/course-step/${course_id}/`, data).then((res) => {
      console.log("res active ", res);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    });
    navigate("/dashboard/mycourses");
    localStorage.setItem("active_step", 0);
  };

  const SettingImg = (e) => {
    setimgview(e);
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setimg(URL.createObjectURL(e));
    }, 1000);
  };

  //lifecycles here...

  useEffect(() => {
    api.get(BaseURL + "/level/").then((res) => {
      // console.log(res.data.data);
      let arr = [];
      res.data.data.filter((e) => {
        arr.push({ value: e.id, label: e.name });
      });
      setleveloptions(arr);
    });
    api.get(BaseURL + "/language/").then((res) => {
      // console.log(res.data.data);
      let arr = [];
      res.data.data.filter((e) => {
        arr.push({ value: e.id, label: e.name });
      });
      setlanguageOption(arr);
    });
    api.get(BaseURL + "/category/").then((res) => {
      // console.log(res.data.data);
      let arr = [];
      res.data.data.filter((e) => {
        arr.push({ value: e.id, label: e.name });
      });
      setcategoryOptions(arr);
    });
    api.get(BaseURL + "/course/5").then((res) => {
      console.log("sss", res.data.data);
      // let arr = [];
      // res.data.data.filter((e) => {
      //   arr.push({ value: e.id, label: e.nam e });
      // });
      // setcategoryOptions(arr);
    });
  }, []);

  useEffect(() => {
    api.get(BaseURL + `/section/?course=${course_id}`).then((res) => {
      // console.log("sss",res.data);
      setCourseSectionsData(res.data.data);
    });
    console.log("active_step", activeStep);
  }, [setrender, render]);

  useEffect(() => {
    api.get(BaseURL + `/quiz/?course=${course_id}`).then((res) => {
      console.log("test", res.data.data);
      setCoursetestData(res.data.data);
    });
  }, [setrender, render]);

  const CreateQuizHere = () => {
    let formData = new FormData();
    formData.append("title", quiztitle);
    formData.append("description", quizdescription);
    formData.append("course", course_id);
    console.log(course_id);
    formData.append("level", levelValue1);
    formData.append("time", quiztime);
    formData.append("order", quizorder);
    formData.append("passed_percent", passed_percent);

    try {
      api.post(BaseURL + "/quiz/", formData).then((res) => {
        console.log(res);
        if (res.data.success) {
          setquiztitle("");
          setquizdescription("");
          setlevelValue1(null);
          setquiztime("");
          setquizorder("");
          setpassed_percent("");
          setrender(!render);
          setModal1Visible(false);
        }
      });
    } catch (err) { }
  };

  //add test variant
  const AddTestvarient = (id) => {
    setModal2Visible(true);
    setquz_iIdforquery(id);
  };

  const closeAddLesson = () => {
    setLessonVideo(null)
    setlessonvideolink(null)
    setlessontitle(null)
    setVideoTypesValue("Youtube")
    setlessonorder(null)
    setlessonsummary(null)
    setlessontime(null)
    setsectionIDValue(null)
    setOpen1(false)
  }
  //add lesson
  const AddLesson = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("title", lessontitle);
    formData.append("section", sectionIDValue);
    formData.append("video_type", VideoTypesValue);
    formData.append("video_link", lessonvideolink);
    formData.append("video", lessonVideo);
    formData.append("summary", lessonsummary);
    formData.append("time", lessontime);
    formData.append("order", lessonorder);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setPercentage(percent)
        }
      }
    }
    try {
      setIsUploading(true)
      api.post(BaseURL + "/lesson/", formData, options).then((res) => {
        setIsUploading(false)
        console.log(res);
        setrender(!render);
        closeAddLesson()


      });
    } catch (error) {
      setIsUploading(false)
      console.log(error);
    }
  };

  //modals section
  const AddSection = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("title", titleVal);
    console.log("====================================");
    console.log("course_id", course_id);
    console.log("====================================");
    formData.append("course", course_id);
    formData.append("order", orderValue);

    api.post("/section/", formData).then((res) => {
      console.log(res);
      if (res) {
        setTitleVal("");
        setorderValue("");
        setOpen(false);
        setrender(!render);
      }
    });
  };

  const DeleteOneSectionLesson = (item) => {
    Swal.fire({
      title: 'Ishonchingiz komilmi?',
      text: `siz ${item.title}ni o'chirmoqchisiz!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ha',
      cancelButtonText: "Yo'q"
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await api.delete(`/lesson/${item.id}/`)
        if (res.data.success === true) {
          Swal.fire(
            "O'chirildi",
            "Diller o'chirildi.",
            'success'
          )
          setrender(!render);
        } else {
          Swal.fire(
            'Xatolik!',
            "O'chirishda qandaydur xatolik mavjud!",
            'error'
          )
        }

      }
    })

  };

  const DeleteOneAttachLesson = (item) => {
    Swal.fire({
      title: 'Ishonchingiz komilmi?',
      text: `siz ${item.name}ni o'chirmoqchisiz!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ha',
      cancelButtonText: "Yo'q"
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await api.delete(`/attachment/${item.id}/`)
        if (res.data.success === true) {
          Swal.fire(
            "O'chirildi",
            "Diller o'chirildi.",
            'success'
          )
          setrender(!render);
        } else {
          Swal.fire(
            'Xatolik!',
            "O'chirishda qandaydur xatolik mavjud!",
            'error'
          )
        }

      }
    })
  };



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
                style={{
                  display: activeStep === steps.length ? "none" : "flex",
                }}
                activeStep={activeStep}
                alternativeLabel
              >
                {steps.map((label, index) => {
                  const stepProps = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label}>
                      <StepLabel>
                        <div>{label}</div>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep == steps.length ? (
                <React.Fragment>
                  <SuccesContainer>
                    <ImgCont>
                      <SuccesSavedimg src={SavedIm} />
                    </ImgCont>
                    <ImgCont1>
                      <SuccesSavedText>
                        Kursingiz muvaffaqiyatli yuklandi
                      </SuccesSavedText>
                      <NextButton onClick={handleReset}>
                        Tasdiqlash
                      </NextButton>
                    </ImgCont1>
                  </SuccesContainer>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep == 0 ? (
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
                          <SelectTexts>Kategoriyasi</SelectTexts>
                          <Select
                            options={categoryOptions}
                            onChange={(e) => setcategoryValue(e.value)}
                            placeholder="Category"
                          />
                        </EachBox>
                        <EachBox>
                          <SelectTexts>Murakkablik darajasi</SelectTexts>
                          <Select
                            options={leveloptions}
                            onChange={(e) => setlevelValue(e.value)}
                            placeholder="Murakkablik darajasi"
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
                        <CustomEditor
                          Description={Description}
                          setDescription={setDescription}
                        />
                      </>
                    </ContentContainer>
                  ) : activeStep == 1 ? (
                    <ContentContainer>
                      <Dialog style={{ zIndex: 9999999999999999 }} open={open}>
                        <form onSubmit={AddSection}>
                          <DialogTitle>Bo'lim qo'shish</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Bu yerda kurs uchun bo'limlar qo'shiladi . Misol
                              uchun Html uchun "Responsive" , "Animation" ...
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Bo'lim nomi"
                              type="text"
                              fullWidth
                              size="small"
                              variant="outlined"
                              style={{ marginTop: 20 }}
                              value={titleVal}
                              onChange={(e) => setTitleVal(e.target.value)}
                              required
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Tartibi"
                              type="number"
                              size="small"
                              fullWidth
                              style={{ marginTop: 20 }}
                              variant="outlined"
                              value={orderValue}
                              required

                              onChange={(e) => setorderValue(e.target.value)}
                            />
                          </DialogContent>
                          <DialogActions
                            style={{ paddingRight: 25, paddingBottom: 15 }}
                          >
                            <Button variant="contained" type="button" onClick={handleClose}>
                              Bekor qilish
                            </Button>
                            <Button variant="contained" type="submit">
                              Qo'shish
                            </Button>
                          </DialogActions>
                        </form>
                      </Dialog>
                      <ThirdContainer>
                        <Bolimtext>Bo’limlar</Bolimtext>
                        <AddBtn
                          onClick={handleClickOpen}
                          startIcon={<ControlPointIcon />}
                        >
                          Bo’lim qo’shish{" "}
                        </AddBtn>
                      </ThirdContainer>
                      {CourseSectionsData?.map((item, index) => (
                        <Accordion key={index} className="myaccordion">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <LessonWord>{item.title}</LessonWord>
                          </AccordionSummary>
                          {item.lessons?.map((p) => (
                            <ActionWrapper>
                              <LeftMe>
                                <PlayIm src={PlayFill} />
                                <VidText>{p.title}</VidText>
                              </LeftMe>
                              <RightMe style={{ justifyContent: "flex-end" }}>
                                {/* <Btn
                                  LinkComponent={Link}
                                  to="/dashboard/editcourse"
                                >
                                  <EditIcon />
                                </Btn> */}
                                <Btn
                                  onClick={() => DeleteOneSectionLesson(p)}
                                >
                                  <DelIcon />
                                </Btn>
                              </RightMe>
                            </ActionWrapper>
                          ))}
                          <BottomWrap>
                            <AddBtn1 onClick={() => handleClickOpen1(item.id)}>
                              Video qo’shish{" "}
                            </AddBtn1>
                          </BottomWrap>
                        </Accordion>
                      ))}
                      <Dialog style={{ zIndex: 9999999999999999, minWidth: "300px" }} open={open1}>
                        <form onSubmit={AddLesson}>
                          <DialogTitle>
                            Dars qo'shish
                          </DialogTitle>
                          {isUploading ?
                            <CircularProgressbar value={percentage} text={`${percentage}%`} /> :
                            <DialogContent>
                              <DialogContentText>
                                Bu yerda kurs bo'limlari uchun darslar
                                qo'shiladi
                              </DialogContentText>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Dars nomi"
                                type="text"
                                fullWidth
                                size="small"
                                variant="outlined"
                                style={{ marginTop: 20 }}
                                value={lessontitle}
                                onChange={(e) => setlessontitle(e.target.value)}
                                required
                              />
                              <WWraper>
                                <Select
                                  placeholder="Video turi"
                                  options={optionsVideoTypes}
                                  onChange={(e) => setVideoTypesValue(e.value)}
                                  required
                                />
                              </WWraper>
                              {VideoTypesValue === 'Video' ?
                                <VideoUploadContainer >
                                  <FileYuklang style={{ fontSize: '15px' }}>{lessonVideo ? lessonVideo.name : "Video yuklang ..."}</FileYuklang>
                                  <input
                                    type="file"
                                    onChange={(e) => setLessonVideo(e.target.files[0])}
                                    name=""
                                    hidden
                                    id="video_upload"
                                    required
                                  />
                                  <VideoYuklang htmlFor="video_upload">Video Yuklang </VideoYuklang>
                                </VideoUploadContainer> :
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="Video linki"
                                  type="text"
                                  size="small"
                                  fullWidth
                                  style={{ marginTop: 20, zIndex: 0 }}
                                  variant="outlined"
                                  value={lessonvideolink}
                                  onChange={(e) => setlessonvideolink(e.target.value)}
                                  required
                                />

                              }
                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Video ta'rifi"
                                type="text"
                                fullWidth
                                size="small"
                                style={{ marginTop: 20, zIndex: 0 }}
                                variant="outlined"
                                value={lessonsummary}
                                onChange={(e) => setlessonsummary(e.target.value)}
                                required
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Video davomiyligi (minutda)"
                                type="number"
                                size="small"
                                fullWidth
                                style={{ marginTop: 20, zIndex: 0 }}
                                variant="outlined"
                                value={lessontime}
                                onChange={(e) => setlessontime(e.target.value)}
                                required
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Video tartib raqami"
                                type="number"
                                size="small"
                                fullWidth
                                style={{ marginTop: 20, zIndex: 0 }}
                                variant="outlined"
                                value={lessonorder}
                                onChange={(e) => setlessonorder(e.target.value)}
                                required
                              />
                            </DialogContent>
                          }{isUploading ? null :
                            <DialogActions
                              style={{ paddingRight: 25, paddingBottom: 15 }}
                            >

                              <Button variant="contained" type="button" onClick={closeAddLesson}>
                                Bekor qilish
                              </Button>
                              <Button variant="contained" type="submit">
                                Qo'shish
                              </Button>
                            </DialogActions>
                          }
                        </form>
                      </Dialog>



                    </ContentContainer>
                  ) : activeStep == 2 ? (
                    <ContentContainer>
                      {/* <ThirdContainer>
                        <InpWrapper style={{ width: "100%" }}>
                          <InpLinkText>Teg qo'shish</InpLinkText>
                          <InputLink placeholder="#teg" />
                        </InpWrapper>
                      </ThirdContainer>
                      <BottomWrap1>
                        <AddBtn1>Teg qo’shish </AddBtn1>
                      </BottomWrap1> */}
                      <ThirdContainer>
                        <Bolimtext>Barcha testlar</Bolimtext>
                        <AddBtn
                          onClick={() => setModal1Visible(true)}
                          startIcon={<ControlPointIcon />}
                        >
                          Test qo’shish{" "}
                        </AddBtn>
                      </ThirdContainer>
                      {CoursetestData?.map((item, index) => (
                        <TestContanier>
                          <InnerContainer>
                            <LeftWrap>
                              <NumberText baseStyle={Base_style}>
                                {item.questions?.length}
                              </NumberText>
                              <MarginLeft10>
                                <TestTitle>{item.title}</TestTitle>
                                <SavolDiv baseStyle={Base_style}>
                                  O'tish foizi: {item.passed_percent}%
                                </SavolDiv>
                                <SavolDiv baseStyle={Base_style}>
                                  Vaqt: {item.time}minut
                                </SavolDiv>
                              </MarginLeft10>
                            </LeftWrap>
                            <RightWrap>
                              <Buttons
                                onClick={() => OpenShowQuestionModal(item)}
                                baseStyle={Base_style}
                              >
                                Savollar
                              </Buttons>
                              <Buttons
                                baseStyle={Base_style}
                                onClick={() => AddTestvarient(item.id)}
                              >
                                Savol qo'shish
                              </Buttons>
                            </RightWrap>
                          </InnerContainer>
                        </TestContanier>
                      ))}
                      <Dialog
                        style={{ zIndex: 9999999999999999 }}
                        open={modal1Visible}
                      >
                        <DialogTitle
                          style={{ fontFamily: "Lexend", fontSize: 25 }}
                          component="h1"
                        >
                          Test yaratish
                        </DialogTitle>
                        <DialogContent>
                          <div>
                            Bu yerda kurs bo'limlari uchun testlar yaratiladi
                          </div>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Test nomi"
                            type="email"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={quiztitle}
                            onChange={(e) => setquiztitle(e.target.value)}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Tarif"
                            type="email"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={quizdescription}
                            onChange={(e) => setquizdescription(e.target.value)}
                          />
                          <WWraper>
                            <Select
                              placeholder="Test darajasi"
                              options={leveloptions}
                              onChange={(e) => setlevelValue1(e.value)}
                            />
                          </WWraper>

                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Test ishlash muddati"
                            type="email"
                            fullWidth
                            size="small"
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={quiztime}
                            onChange={(e) => setquiztime(e.target.value)}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Test joylashuvi"
                            type="email"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={quizorder}
                            onChange={(e) => setquizorder(e.target.value)}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Testdan o'tish foizi"
                            type="email"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={passed_percent}
                            onChange={(e) => setpassed_percent(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions
                          style={{ paddingRight: 25, paddingBottom: 15 }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => setModal1Visible(false)}
                          >
                            Bekor qilish
                          </Button>
                          <Button variant="contained" onClick={CreateQuizHere}>
                            Test yaratish
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <div className="mymodal">
                        <Dialog
                          style={{ zIndex: 9999999999999999 }}
                          open={modal2Visible}
                        >
                          <Savollartext>Savolni kiriting</Savollartext>
                          <DialogContent>
                            <DialogContentText>
                              <DivOfVariantDiv>
                                <InputVar1
                                  value={questionQuery}
                                  onChange={(e) =>
                                    setquestionQuery(e.target.value)
                                  }
                                  placeholder="Savolni kiriting"
                                />
                              </DivOfVariantDiv>
                            </DialogContentText>
                            <VariantAddingWrapper>
                              <Bolimtext>Variant qo'shish</Bolimtext>
                              <DivOfVariantDiv>
                                <InputVar
                                  placeholder="A"
                                  value={OptionA}
                                  onChange={(e) => {
                                    ChooseTRUE1(e.target.value, "A");
                                    setOptionA(e.target.value);
                                    ChooseTRUE1(e.target.value, "A");
                                  }}
                                />
                                <Checkbox
                                  ref={opA}
                                  name="mea"
                                  checked={checkCode == 1 ? true : false}
                                  onChange={(e) => {
                                    ChooseTRUE(e.target.checked, "A");
                                    ChangeChekCode(1);
                                  }}
                                />
                              </DivOfVariantDiv>
                              <DivOfVariantDiv>
                                <InputVar
                                  placeholder="B"
                                  value={OptionB}
                                  onChange={(e) => {
                                    ChooseTRUE1(e.target.value, "B");
                                    setOptionB(e.target.value);
                                    ChooseTRUE1(e.target.value, "B");
                                  }}
                                />
                                <Checkbox
                                  ref={opB}
                                  name="meb"
                                  checked={checkCode == 2 ? true : false}
                                  onChange={(e) => {
                                    ChooseTRUE(e.target.checked, "B");
                                    ChangeChekCode(2);
                                  }}
                                />
                              </DivOfVariantDiv>
                              <DivOfVariantDiv>
                                <InputVar
                                  placeholder="C"
                                  value={OptionC}
                                  onChange={(e) => {
                                    ChooseTRUE1(e.target.value, "C");
                                    setOptionC(e.target.value);
                                    ChooseTRUE1(e.target.value, "C");
                                  }}
                                />
                                <Checkbox
                                  ref={opC}
                                  name="mec"
                                  checked={checkCode == 3 ? true : false}
                                  onChange={(e) => {
                                    ChooseTRUE(e.target.checked, "C");
                                    ChangeChekCode(3);
                                  }}
                                />
                              </DivOfVariantDiv>
                              <DivOfVariantDiv>
                                <InputVar
                                  placeholder="D"
                                  value={OptionD}
                                  onChange={(e) => {
                                    ChooseTRUE1(e.target.value, "D");
                                    setOptionD(e.target.value);
                                    ChooseTRUE1(e.target.value, "D");
                                  }}
                                />
                                <Checkbox
                                  ref={opD}
                                  name="med"
                                  checked={checkCode == 4 ? true : false}
                                  onChange={(e) => {
                                    ChooseTRUE(e.target.checked, "D");
                                    ChangeChekCode(4);
                                  }}
                                />
                              </DivOfVariantDiv>
                              <DivOfVariantDiv>
                                <InputVar1
                                  value={questionOrder}
                                  onChange={(e) =>
                                    setquestionOrder(e.target.value)
                                  }
                                  placeholder="Savol Tartibi"
                                />
                              </DivOfVariantDiv>
                            </VariantAddingWrapper>
                          </DialogContent>
                          <DialogActions
                            style={{
                              paddingBottom: 35,
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() => setModal2Visible(false)}
                            >
                              Bekor qilish
                            </Button>
                            <Button
                              variant="contained"
                              onClick={AddQuestionToQuiz}
                            >
                              Qo'shish
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      <Dialog
                        style={{ zIndex: 9999999999999999 }}
                        open={modal3Visible}
                      >
                        <DialogTitle
                          style={{ fontFamily: "Lexend", paddingLeft: 33 }}
                        >
                          Savollar
                        </DialogTitle>
                        <DialogContent>
                          <MainHeight>
                            {questionsDATA?.map((item, index) => (
                              <Accordion key={index} className="myaccordion">
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <LessonWord>{item.query}</LessonWord>
                                </AccordionSummary>
                                <EveryBoxInp>
                                  <InputIn
                                    cool={item.correct_answer === item.optionA}
                                    placeholder="A"
                                    value={"A. " + item.optionA}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionB}
                                    placeholder="B"
                                    value={"B. " + item.optionB}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionC}
                                    placeholder="C"
                                    value={"C. " + item.optionC}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionD}
                                    placeholder="D"
                                    value={"D. " + item.optionD}
                                    disabled
                                  />
                                </EveryBoxInp>

                                {/* <BottomWrap style={{paddingLeft:13}}>
                                    <AddBtn1 >
                                      Saqlash{" "}
                                    </AddBtn1>
                                  </BottomWrap> */}
                              </Accordion>
                            ))}
                          </MainHeight>
                        </DialogContent>
                        <DialogActions
                          style={{ paddingRight: 25, paddingBottom: 15 }}
                        >
                          <Button variant="outlined" onClick={handleClose13}>
                            Bekor qilish
                          </Button>
                          <Button variant="contained" onClick={handleClose13}>
                            Yopish
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </ContentContainer>
                  ) : activeStep == 3 ? (
                    <ContentContainer>
                      <ThirdContainer>
                        <Bolimtext>Barcha manbalar</Bolimtext>
                        <AddBtn
                          onClick={() => setModal4Visible(true)}
                          startIcon={<ControlPointIcon />}
                        >
                          Manba yaratish{" "}
                        </AddBtn>
                      </ThirdContainer>
                      <div>
                        {allattachments?.map((item, index) => (
                          <div key={index} className="myaccordion">
                            <div
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <JustWrap>
                                <LessonWord
                                  onClick={() =>
                                    window.open(
                                      "http://school.hokimakademiyasi.uz" +
                                      item.file
                                    )
                                  }
                                >
                                  {item.title}
                                </LessonWord>
                                <ActionWrap
                                  style={{ justifyContent: "flex-end" }}
                                >
                                  {/* <Btn
                                          LinkComponent={Link}
                                          to="/dashboard/editcourse"
                                        >
                                          <EditIcon />
                                        </Btn> */}
                                  <Btn
                                    onClick={() =>
                                      DeleteOneAttachLesson(item.id)
                                    }
                                  >
                                    <DelIcon />
                                  </Btn>
                                </ActionWrap>
                              </JustWrap>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Dialog
                        style={{ zIndex: 9999999999999999 }}
                        open={modal4Visible}
                      >
                        <DialogTitle
                          style={{ fontFamily: "Lexend", fontSize: 25 }}
                          component="h1"
                        >
                          Manba yaratish
                        </DialogTitle>
                        <DialogContent>
                          <div>
                            Bu yerda kurs bo'limlari uchun manbalar yaratiladi
                          </div>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Manba nomi"
                            type="email"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={attachTitle}
                            onChange={(e) => setattachTitle(e.target.value)}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="file"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            onChange={(e) => setattachFile(e.target.files[0])}
                          />

                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Manba tartibi"
                            type="email"
                            fullWidth
                            size="small"
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={attachOrder}
                            onChange={(e) => setattachOrder(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions
                          style={{ paddingRight: 25, paddingBottom: 15 }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => setModal4Visible(false)}
                          >
                            Bekor qilish
                          </Button>
                          <Button
                            variant="contained"
                            onClick={CreateAttachments}
                          >
                            Manba yaratish
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </ContentContainer>
                  ) : null}
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <NextButton
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Ortga
                    </NextButton>
                    <Box sx={{ flex: "1 1 auto" }} />

                    <NextButton variant="contained" onClick={handleNext}>
                      {activeStep == steps.length - 1 ? "Joylash" : "Keyingi"}
                    </NextButton>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </StepperContainer>
        </TableDivContianer>
      </CustomWrapper>
    </Container>
  );
};

export default Tafsilot;
