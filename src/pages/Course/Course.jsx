import React, { useState } from "react";
import {
    Container,
    CustomWrapper,
    ImgCont,
    ImgCont1,
    MainText,
    NextButton,
    StepperContainer,
    SuccesContainer,
    SuccesSavedimg,
    SuccesSavedText,
    TableDivContianer,
    TableTitle,
} from "./style";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import App from "./components/App";
import SavedIm from "../../assets/images/su2.png";
import Tavsif from "./Tavsif/Tavsif";
import Lesson from "./Lesson/Lesson";
import Quiz from "./Quiz/Quiz";
import Manba from "./Manba/Manba";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAxios from "../../api/useAxios";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const steps = [
    "Kurs nomi",
    "Kurs mediasi",
    "O’quv dasturi",
    "Qo`shimcha ma`lumot",
];

const CourseScreen = () => {
    const api = useAxios();
    const navigate = useNavigate();
    const { course_id } = useParams();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [course, setCourse] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const get_course = async () => {
        let res = await api.get(`/course/${course_id}/`)
        setIsLoading(true)
        // console.log(res.data);
        if (res.data.success) {
            setCourse(res.data.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        get_course()
    }, [course_id])



    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (step) => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(step);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        // setActiveStep(0);
        navigate("/dashboard/mycourses");
    };

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    <Container>
                        <CustomWrapper>
                            <TableTitle>
                                <MainText>Kursni tahrirlash</MainText>
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
                                        {activeStep === steps.length ? (
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
                                                            Dashboardga qaytish
                                                        </NextButton>
                                                    </ImgCont1>
                                                </SuccesContainer>
                                                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                                    <Box sx={{ flex: "1 1 auto" }} />
                                                </Box>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                {activeStep === 0 ? (
                                                    <Tavsif handleNext={handleNext} course={course} setCourse={setCourse} />
                                                ) : activeStep === 1 ? (
                                                    <Lesson course_id={course?.id} handleNext={handleNext} />
                                                ) : activeStep === 2 ? (
                                                    <Quiz course_id={course?.id} handleNext={handleNext} />
                                                ) : activeStep === 3 ? (
                                                    <Manba course_id={course?.id} handleNext={handleNext} step={course?.step} />
                                                ) : null}
                                            </React.Fragment>
                                        )}
                                    </Box>
                                </StepperContainer>
                            </TableDivContianer>
                                        <Outlet />
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
            }
        </>
    );
};

export default CourseScreen;