import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const InnerContainer = styled.div`
    margin-top: 60px;
    width: calc(100% - 256px);
    @media (max-width:1050px){
        width: 100%;
    }
`