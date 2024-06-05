import styled from "styled-components";
import bg from '../../assets/images/right.png';
import bg1 from '../../assets/images/login.png';


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E1339;
    height: 100vh;
`

export const Wrapper = styled.div`
    max-width: 1500px;
    width: 98%;
    height: 100%;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width:1200px){
       justify-content: center;
    }
`

export const LoginContainer = styled.div`
    width: 50%;
    height: 90%;
    background: url(${bg1});
    background-color: #0E1339;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1000px){
        width: 100%;
    }
    @media (max-width:530px){
        background: none;
        align-items:flex-start;
    }
`
export const RightContainer = styled.div`
    width: 50%;
    height: 90%;
    background: url(${bg});
    background-color: #0E1339;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    @media (max-width:1000px){
        display: none;
    }
`

export const LoginBox = styled.div`
    width: 80%;
    height: 500px;
    margin-left: 10px;
    padding-top: 20px;
    @media (max-width:1200px){
        height: 400px;
        width: 70%;
    }
`

export const Title = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:1200px){
        font-size: 40px;
    }
`

export const Row = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Texts = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    /* identical to box height */
    width: 355px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width:555px){
        width: 300px;
        font-size: 17px;
    }
`

export const Input = styled.input`
    height: 56.23078918457031px;
    width: 355px;
    border-radius: 10px;
    border: 2px solid rgba(11, 167, 191, 1);
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    @media (max-width:555px){
        width: 300px;
    }
`

export const Enter = styled.button`
    background: rgba(11, 167, 191, 1);
    height: 56.23078918457031px;
    width: 355px;
    box-shadow: 0px 10px 20px rgba(11, 167, 191, 0.2);
    border-radius: 10px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    border: none;
    font-size: 25px;
    line-height: 34px;
    text-align: center;
    opacity: 1;
    color: #FFFFFF;
    @media (max-width:555px){
        width: 300px;
    }
    transition: 0.3s linear;

    &:hover{
        background: #0acae7;
        
    }
`