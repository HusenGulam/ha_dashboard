import styled from 'styled-components';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


export const Container = styled.div`
    width: 100%;
    background-color: ${p=>p.Base_style == '1' ?  '#EE6C34' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794E' }  ;
    min-height: 500px;
    position: relative;
    height: auto;
    padding-top: 60px;
    overflow: scroll;
    padding-left: 8px;
    height: 600px;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 0.5em;
        background-color: #BDC0FF;
    }
    
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${p=>p.Base_style == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B' } ;
        border-radius: 0px 5px 5px 5px;
    }
    .myrestable{
        box-shadow: none !important;
        border-radius: 0 !important;
    }
`

export const CancelIcon = styled(CloseRoundedIcon)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 30px !important;
    transition: 0.3s linear;
    &:hover{
        cursor: pointer;
    }
`