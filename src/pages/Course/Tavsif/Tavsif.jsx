import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { AvatarYuklang, Container, ContentContainer, CourseInput, CustomWrapper, EachBox, EditImgDiv, FileYuklang, ImgLabel, ImgPreview, MainImg, MainText, NextButton, ProfileImageEdit, SelectContainer, SelectTexts, StepperContainer, TableDivContianer, TableTitle } from '../style';
import Profile_Img from "../../../assets/images/profile.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Select from "react-select";
import CkeditorComponent from '../../Tafsilot/components/Ckeditor/Ckeditor';
import { ToastContainer, toast } from 'react-toastify';
import useAxios from '../../../api/useAxios';
import { BaseURLMedia } from '../../../Base/Url';
import Loading from '../../../components/Loading/Loading';

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


export default function Tavsif(props) {
    const api = useAxios()
    const navigate = useNavigate();
    const [isChanged, setIsChanged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
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

    const handleNext = () => {
        props.handleNext(1)
    }
    const [course_type, setcourse_type] = useState(props?.course?.course_type);

    const get_category = async () => {
        let res = await api.get('/category/',{params:{type:course_type}})
        if (res.data.success) {
            let arr = [];
            res.data.data.filter((e) => {
                arr.push({ value: e.id, label: e.name });
            });
            setcategoryOptions(arr);
        }
    }



    const [render, setrender] = useState(false);
    const [img, setimg] = useState(props?.course?.image ? BaseURLMedia + props?.course?.image : Profile_Img);
    const [loading, setloading] = useState(false);
    const [desc, setDesc] = useState(props?.course?.description)
    const [languageOption, setlanguageOption] = useState([]);
    const [languageValue, setlanguageValue] = useState(props?.course?.language);

    const [categoryOptions, setcategoryOptions] = useState([]);
    const [categoryValue, setcategoryValue] = useState(props?.course?.category);

    const [levelValue, setlevelValue] = useState(props?.course?.level);


    //input value
    const [titleValue, settitleValue] = useState(props?.course?.title);
    const [shortDescription, setshortDescription] = useState(props?.course?.short_description);
    const [imgview, setimgview] = useState(null);

    useEffect(() => {
        get_category()
        get_langauge()
    }, [setcourse_type,course_type]);

    const setValue = () => {
        setimg(props?.course?.image ? BaseURLMedia + props?.course?.image : Profile_Img);
        setDesc(props?.course?.description)
        setlanguageValue(props?.course?.language);
        setcategoryValue(props?.course?.category);
        setlevelValue(props?.course?.level);
        setcourse_type(props?.course?.course_type);
        settitleValue(props?.course?.title);
        setshortDescription(props?.course?.short_description);
        setIsChanged(false)
    }

    useEffect(() => {
        setValue()
        const intervalId = setInterval(() => {
            setIsLoading(false)
        }, 200);

        return () => clearInterval(intervalId);
    }, [props?.course])

    const SettingImg = (e) => {
        setIsChanged(true)
        setimgview(e);
        setloading(true);
        setTimeout(() => {
            setloading(false);
            setimg(URL.createObjectURL(e));
        }, 1000);
    };

    const ChangeDesc = (value) => {
        setDesc(value)
        setIsChanged(true)
    }

    const addCourse = async () => {
        if (titleValue === null || shortDescription === null || languageValue === null || categoryValue === null || levelValue === null || props?.course?.image === null || course_type === null) {
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
            let res = await api.put(`/course/${props?.course?.id}/`, formData)
            if (res.data.success) {
                props?.setCourse(res.data.data)
                setIsChanged(false)
            }
        }
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <React.Fragment>
                    <ContentContainer>
                        <SelectContainer>
                            <EachBox>
                                <SelectTexts>Kurs nomi</SelectTexts>
                                <CourseInput
                                    placeholder="Nomi"
                                    value={titleValue}
                                    onChange={(e) => {
                                        settitleValue(e.target.value)
                                        setIsChanged(true)
                                    }}
                                />
                            </EachBox>
                            <EachBox>
                                <SelectTexts>Qisqacha ta'rif</SelectTexts>
                                <CourseInput
                                    placeholder="Qisqacha ta'rif"
                                    value={shortDescription}
                                    onChange={(e) => {
                                        setshortDescription(e.target.value)
                                        setIsChanged(true)
                                    }
                                    }
                                />
                            </EachBox>
                            <EachBox>
                                <SelectTexts>Kurs tili</SelectTexts>
                                <Select
                                    placeholder="Kurs tili"
                                    options={languageOption}
                                    value={
                                        languageOption.filter(option =>
                                            option.value == languageValue)
                                    }
                                    onChange={(e) => {
                                        setlanguageValue(e.value)
                                        setIsChanged(true)
                                    }}
                                />
                            </EachBox>
                            <EachBox>
                                <SelectTexts>Kurs kimlar uchun</SelectTexts>
                                <Select
                                    value={
                                        options.filter(option =>
                                            option.value == course_type)
                                    }
                                    options={options}
                                    placeholder="Kurs kimlar uchun"
                                    onChange={(e) => {
                                        setcourse_type(e.value)
                                        setIsChanged(true)
                                    }}
                                />
                            </EachBox>
                            <EachBox>
                                <SelectTexts>Murakkablik darajasi</SelectTexts>
                                <Select
                                    options={LEVELS}
                                    value={
                                        LEVELS.filter(option =>
                                            option.value == levelValue)
                                    }
                                    onChange={(e) => {
                                        setlevelValue(e.value)
                                        setIsChanged(true)
                                    }}
                                    placeholder="Murakkablik darajasi"
                                />
                            </EachBox>
                            <EachBox>
                                <SelectTexts>Kategoriyasi</SelectTexts>
                                <Select
                                    value={
                                        categoryOptions.filter(option =>
                                            option.value == categoryValue)
                                    }
                                    options={categoryOptions}
                                    onChange={(e) => {
                                        setcategoryValue(e.value)
                                        setIsChanged(true)
                                    }}
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
                        <SelectTexts style={{ marginLeft: 3 }}>
                            Ta'rif
                        </SelectTexts>
                        <CkeditorComponent desc={desc} setDesc={ChangeDesc} />
                    </ContentContainer>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', pt: 2 }}>
                        {isChanged ?
                            <NextButton variant="contained" onClick={addCourse}>
                                Tahrirlash
                            </NextButton>
                            : <NextButton variant="contained" onClick={handleNext}>
                                Keyingisi
                            </NextButton>}
                    </Box>
                </React.Fragment>}
        </>

    );
}
