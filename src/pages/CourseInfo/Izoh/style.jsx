import styled from "styled-components";
import {
    Button
  } from 'antd';
export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
`

export const InputContainer = styled.div`
    height: 80px;
    width: 876px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DBDBDB;
    @media (max-width:900px){
        width: 100%;
    }
`
export const Btn = styled(Button)`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: #1A66FF !important;
    width: 55px !important;
    height: 54px !important;
    border-top-right-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
`

export const ChatContainer = styled.div`
    width: 876px;
    margin-top: 30px;
    @media (max-width:900px){
        width: 100%;
    }
`
export const ChatBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top:15px;
    padding-bottom: 15px;
    flex-direction: ${p=>p.ismine ? 'row-reverse' : 'row'};

`

export const ChatText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    font-style: italic;
    line-height: 24px;
    margin-left: ${p=>p.ismine ? '0px' : '0px'};
    color: #000000;
`

export const ReplyText = styled.span`
    color: #2b80ff;
    display: flex;
    align-items: center;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

export const NameReply = styled.div`
    display: flex;
    align-items: center;
`

export const RepliedView = styled.div`
    display: flex;
`

export const RepliedTitle = styled.div`
    color: #7a7aff;
    font-weight: 400;
    font-style: normal;
`

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    max-width: 876px;

`
export const InnerPaginationWrap = styled.div`
    width: auto;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4.558139324188232px 11.39534854888916px 0px #00000033;
    border-radius: 5px;
`

export const PaginationInputWrap = styled.div`
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
    @media (max-width:600px ){
        display: none;
    }
`

export const PaginationInput = styled.input`
    border: 2.28px solid #03F5FF;
    outline :none;
    width: 47px;
    height: 26px;
    background: none;
`

export const PaginationTextButton = styled.button`
    font-family: 'Lexend';
    font-size: 21px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    background: none;
    border: none;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
        color: #23D5F3;
    }
`

export const ReplyImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    margin: 4px;
    margin-top: 2px;
`

export const DisFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: black;
`
export const JustDiv = styled.div`
    height: auto;
`

export const Thatpersonname = styled.div`
    color: #5858ff;
    font-size: 10px;
    line-height: 15px;
`
export const Thatpersonpost = styled.div`
    font-style: italic;
    font-size: 11px;
    line-height: 15px;

`