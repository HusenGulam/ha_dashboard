import styled from "styled-components";


export const Container  = styled.div`
    width: 100%;
    height: auto;
    margin-top: 60px;
`

export const TestContanier = styled.div`
    width: 1066px;
    height: 235px;
    box-shadow: 0px 2.14168px 8.0313px rgba(0, 0, 0, 0.25);
    border-radius: 5.3542px;
    background: linear-gradient(104.88deg,
    #2CA7DC 8.91%, #78F5FF 86.26%);
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
    @media (max-width:1100px){
        width: 100%;
    }
`

export const InnerContainer  = styled.div`
    width: 1006px;
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
    background: ${p=>p.baseStyle == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ?  '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B' } ;
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
    background: ${p=>p.baseStyle == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ?  '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B' } ;;
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
    background: ${p=>p.baseStyle == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.baseStyle == '2' ?  '#0BA7BF' : p.baseStyle == '3' ? '#0BA7BF' : '#1D794B' } ;
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