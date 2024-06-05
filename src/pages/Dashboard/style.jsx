import styled from "styled-components";


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

export const AllStatusContianer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:600px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`
export const EachBlock = styled.div`
    height: 92px;
    width: 296px;
    border-radius: 5px;
    background: ${p=>p.num===1 ? '#D9EED8' : p.num ===2 ? '#E0D5EF' : '#F5F0DA'};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width:1250px){
        width: 32%;
    }
    @media (max-width:600px){
        width: 98%;
        margin-top: 15px;

    }
    transition: 0.5s linear;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);

    }
    &:active{
        background-color: #4ebffc;
    }
`

export const StatusImg = styled.img`
    width: 52px;
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const NumberWrapper  = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 32.6667px;
    line-height: 41px;
    letter-spacing: 0.01em;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const SmallWord = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
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
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 0.01em;
    color: #000000;
`
export const TableWrapper = styled.div`
    width: 100%;
    margin-top: 9px;
    .MuiTableCell-body{
        border-bottom: 1px solid #EBEFF2 !important;
        font-family: 'Lexend' !important;
        color: #707683 !important;
    }
    .MuiTableCell-head{
        border-bottom: 1px solid #EBEFF2 !important;
        font-family: 'Lexend' !important;
        color: #9AA6B7 !important;
    }
    
`