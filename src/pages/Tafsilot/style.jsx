import { Button } from "@mui/material";
import styled from "styled-components";
import BG from '../../assets/images/imgbg.png';
import BG1 from '../../assets/images/su1.png';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const Container = styled.div`
    /* border: 3px solid yellow; */
    width: 100%;
    padding: 35px;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    padding-bottom: 1px;
    padding-right: 0px;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0.5em;
        background-color: #F5F6F8;
    }
    
    
    ::-webkit-scrollbar-thumb {
        background-color:  '#253fbc' ;
        border-radius: 0px 5px 5px 5px;
    }
    .myrestable{
        box-shadow: none !important;
        border-radius: 0 !important;
    }
    @media (max-width:1050px){
        padding: 10px;
    }
`

export const CustomWrapper = styled.div`
    width: 100%;
    max-width: 1110px;
    /* border: 1px solid blue; */
    height: 100%;
`
export const AddContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid red; */
`
export const TableDivContianer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 45px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
`

export const TableTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const MainText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 0.01em;
    color: #000000;
    @media (max-width:500px){
        font-size: 20px;
    }
`

export const StepperContainer = styled.div`
    width: 100%;
    height: 100%;
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root{
        color: rgba(11, 167, 191, 1);
    }
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active{
        color: #5187df;
    }
    background: #fff;
    padding: 40px;
    padding-top: 30px;
    box-shadow: 0px 4px 20px #281212 !important;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px #000000 !important;
    
`
export const ContentContainer = styled.div`
    width: 100%;
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before{
        background-color: none !important;
    }
    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root{
        box-shadow: none !important;
        
    }
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root{
        color: none !important;
        padding: 3px 10px;
        margin-top: 10px;
        box-shadow: none !important;
        background-color: #F1F1F1;
        border-radius: 6px;
        position: static;
    }
    div.css-1t1j96h-MuiPaper-root-MuiDialog-paper{
        background-color :rgba(11, 167, 191, 0.3) !important;
        border: 1px solid #0BA7BF !important;
        backdrop-filter: blur(15px) !important;
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 5px !important;
    }
`

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:500px){
        flex-direction: column;
    }
`

export const EachBox = styled.div`
    width: 48%;
    height: 90px;
    margin-top: 10px;
    @media (max-width:500px){
        width: 98%;

    }
    .css-1s2u09g-control{
        border: 1px solid #DADADA;
        border-radius: 0px;
        
    }
    .css-1okebmr-indicatorSeparator{
        display: none;
    }
`

export const CourseInput = styled.input`
    width: 100%;
    height: 38px;
    border: 1px solid #DADADA;
    border-radius: 0px;
    outline: none;
    padding-left: 8px;
    box-sizing: border-box;
    font-size: 16px;
    
`

export const NextButton = styled(Button)`
    background: #009fbb !important;
    color: white !important;
    border-radius: 4px;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
`

export const SelectTexts = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding: 10px 0px;
    color: #000000;
`



export const ProfileImageEdit = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 70px;
    @media (max-width:550px){
        height: auto;
        margin: 0;
    }
`

export const EditImgDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 134px;
    @media (max-width:550px){
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       height: auto;
       padding-top: 15px;
       padding-bottom: 20px;
       margin: 0;
       box-sizing: border-box;
    }
`
export const ImgPreview = styled.div`
    height: 137px;
    width: 137px;
    border-radius: 6.353383541107178px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(11, 167, 191, 1) ;
    box-sizing: border-box;
`

export const ProgresDiv = styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    background-color: white;
`;

export const VideoUploadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px 0px 0px;
    position: relative;
`;

export const MainImg = styled.img`
    height: 99px;
    width: 99px;
    object-fit: cover;
`
export const ImgLabel = styled.label`
    width:85%;
    border: 2px dashed #DADADA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
    @media (max-width:850px){
        padding-right: 10px;
        padding-left: 10px;
        width: 70%;
    }
    @media (max-width:600px){
       justify-content: center;
       width: 70%;
       align-items: center;
       margin-top: 20px;
    }
    @media (max-width:550px){
       width: 100%;
       height: 90px;
    }
    
`

export const FileYuklang = styled.p`
    font-family: 'Lexend';
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    color: #808191;
    @media (max-width:600px){
       display: none;
    }
`

export const VideoYuklang = styled.label`
    background: rgba(11, 167, 191, 1);
    height: 42px;
    width: 192.9375px;
    border-radius: 2.268062114715576px;
    border: none;
    font-family: Lexend;
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AvatarYuklang = styled.p`
    background: rgba(11, 167, 191, 1);
    height: 42px;
    width: 192.9375px;
    border-radius: 2.268062114715576px;
    border: none;
    font-family: Lexend;
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
export const InpWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;

`

export const InpLinkText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`

export const InputLink = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 1px;
    border: 1px solid #DADADA;
    outline: none;
    padding-left: 8px;
    box-sizing: border-box;
    margin-top: 15px;
`
export const VideoCourseEx = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 20px;
    background: url(${BG});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`





//3-step


export const ThirdContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px 0px;
    margin-top: 60px;
`
export const ThirdContainer1 = styled.div`
    width: 100%;
    background: rgba(241, 241, 241, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px 0px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid red;
`

export const Bolimtext = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    text-align: center;
`
export const Bolimtext1 = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
`

export const AddBtn = styled(Button)`
    background: #0BA7BF !important;
    color: white !important;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
`

export const ActionWrapper = styled.div`
    width: 100%;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(196, 196, 196, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const LeftMe = styled.div`
    display: flex;
    align-items:center;
`
export const RightMe = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PlayIm = styled.img`
    transition: 0.3s linear;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`
export const VidText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    margin-left: 10px;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`





export const Wrap = styled.div`
    &:hover{
            cursor: pointer !important;
        }
`

export const Btn = styled(IconButton)`
    background-color: #E7F6F9 !important;
`

export const DelIcon = styled(DeleteOutlineOutlinedIcon)`
    color: rgba(205, 0, 0, 1) ;
`

export const EditIcon = styled(BorderColorOutlinedIcon)`
    color: #0BA7BF;;
`


export const BottomWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin:20px 0px;
    margin-top: 40px;
    color: white;
`
export const BottomWrap1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin:20px 0px;
    margin-top: 0px;
`

export const AddBtn1 = styled(Button)`
    background: #0BA7BF !important;
    color: white !important;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
`
export const AddBtnedit = styled(Button)`
    background: #8bb0ff !important;
    color: white !important;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
`
export const AddBtnred = styled(Button)`
    background: #ff6044 !important;
    color: white !important;
    text-transform: capitalize !important;
    font-family: 'Lexend' !important;
`

export const VariantAddingWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding-top: 20px;
`

export const DivOfVariantDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    min-width: 450px;
`

export const InputVar = styled.input`
    width: 90%;
    height: 28px;
    border-radius: 5px;
    border: 1px solid #DADADA;
    outline: none;
    padding-left: 8px;
    box-sizing: border-box;

`
export const InputVar1 = styled.input`
    width: 98%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #DADADA;
    outline: none;
    padding-left: 8px;
    box-sizing: border-box;

`


export const SuccesContainer = styled.div`
    width: 100%;
    height: 600px;
    @media (max-width:555px){
        height: 400px;
    }
`

export const ImgCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${BG1});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 75%;
`
export const ImgCont1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 25%;
    
`
export const SuccesSavedimg = styled.img`
    @media (max-width:555px){
        width: 50%;
    }
`

export const SuccesSavedText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
    @media (max-width:555px){
        font-size: 25px;
    }
`

export const WWraper = styled.div`
    background-color: #00ff0d;
    margin-top: 18px;
    margin-bottom: 0px;
    .css-1okebmr-indicatorSeparator{
        display: none;
        z-index: 99999999999;
    }
`


export const LessonText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    background-color:red;
    margin-top: 10px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: .3s linear;
    &:hover{
        cursor: pointer;
        background-color:rgba(64, 69, 187, 1);
    }
`
export const VideoIcon = styled(PlayCircleOutlineIcon)`
    color: white;
    margin-right: 10px;
`
export const DetailAc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover{cursor: pointer;
    }
`
export const LessonWord = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    color: #3b3b3b ;
    &:hover{
        cursor: pointer;
        color: #5e5ef0;
    }
`
export const LessonWord1 = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;
    color: #0BA7BF;
    display: flex;
    align-items: center;
`

export const LessonMinute = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;
    color:red;
`




export const TestContanier = styled.div`
    max-width: 1066px;
    width: 100%;
    margin-top: 20px;
    height: 235px;
    box-shadow: 0px 2.14168px 8.0313px rgba(0, 0, 0, 0.25);
    border-radius: 5.3542px;
    background: linear-gradient(104.88deg,
    #2CA7DC 8.91%, #78F5FF 86.26%);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1100px){
        width: 100%;
    }
    margin-bottom: 30px;
`

export const InnerContainer = styled.div`
    max-width: 956px;
    width: 90%;
    height: 155px;
    background: #FFFFFF;
    box-shadow: 0px 5.3542px 10.7084px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    @media (max-width:1100px){
        width: 90%;
    }
    @media (max-width:770px){
        padding: 20px;
        flex-direction: column;
    }
`

export const LeftWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NumberText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 62.9184px;
    line-height: 79px;
    background: ${p => p.baseStyle == '1' ? 'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ? '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B'} ;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const TestTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 16.0156px;
    line-height: 20px;
    color: #000000;
`
export const SavolDiv = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16.0156px;
    line-height: 20px;
    background: ${p => p.baseStyle == '1' ? 'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ? '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B'} ;;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
`
export const MarginLeft10 = styled.div`
    margin-left: 10px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4.67px;
    width: 157.55px;
    height: 38.03px;
    background: ${p => p.baseStyle == '1' ? 'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ? '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B'} ;
    border-radius: 2.3345px;
    color: white;
    border: none;
    margin-left: 15px;
    margin-right: 15px;
    transition: .3s linear;
    &:hover{
        box-shadow: 0px 0px 10px #5853fa;
        cursor: pointer;
    }
    @media (max-width:444px){
        width: 87.55px;
        height: 28.03px;
    }
`

export const NatijaModal = styled.div`
    .ant-modal-body{
        padding: 0px !important;
    }
    
`


export const Savollartext = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    margin-top: 15px;
    color: #000000;
`

export const MainHeight = styled.div`
    width: 550px;
    height: 100%;
    max-height: 400px;
    min-height: 400px;
    overflow-x: hidden;
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before{
        background-color: none !important;
    }
    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root{
        box-shadow: none !important;
        
    }
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root{
        color: none !important;
        padding: 3px 10px;
        margin-top: 10px;
        box-shadow: none !important;
        background-color: #eaf8ff;
        border-radius: 6px;
        position: static;
        margin: 10px !important;
    }
    ::-webkit-scrollbar {
        width: 0.5em;
    }
    
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${p => p.Base_style == '1' ? 'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.Base_style == '2' ? '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#0BA7BF'} ;
        border-radius: 0px 5px 5px 5px;
    }
    .myrestable{
        box-shadow: none !important;
        border-radius: 0 !important;
    }
`

export const EveryBoxInp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
`
export const InputIn = styled.input`
    width: 200px;
    height: 28px;
    border-radius: 5px;
    border: 1px solid #bdecff;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: border-box;
    margin: 10px;
    background-color: ${p => p.cool ? 'green' : '#e6f8ff;'};
    color: ${p => p.cool ? 'white' : ''};
    /* background-color: #e6f8ff; */
    
`

export const JustWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    background-color: #f5f1ff;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
`

export const ActionWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 110px;
    align-items: center;
`

export const TestBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    margin-bottom: 60px;
`