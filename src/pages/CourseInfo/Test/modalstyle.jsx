import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* height: 500px; */
`

export const ProgressWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    @media (max-width:450px){
        flex-direction: column;
        height: 70px;
    }

`

export const TestTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 23.3407px;
    margin-top: 10px;
    line-height: 34px;
    text-align: center;
    color: #000000;
`

export const TextBox = styled.div`
    height: 358.3822021484375px;
    width: 100%;
    max-width: 400px;
    border-radius: 10.51567268371582px;
    box-shadow: 0px 15.773509979248047px 31.547019958496094px 0px #02B6EB1A;
    background: #EAF2F9;
    margin-top: 10px;
    padding: 30px;
    box-sizing: border-box;
`
export const Centering = styled.div`
    display: flex;
    justify-content: center;
`
export const Centering1 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const NextButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5.16px;
    width: 174.26px;
    height: 42.06px;
    background: ${p=>p.Base_style == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B' };
    border-radius: 2.58209px;
    color: white;
    border: none;
    transition: .3s linear;
    &:hover{
        cursor: pointer;
        background: ${p=>p.Base_style == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #f77525 100%)' : p.Base_style == '2' ?  '#1bcce7' : p.Base_style == '3' ? '#0BA7BF' : '#37a36d' };
        
    }
`

export const QuestionText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 16.9282px;
    line-height: 24px;
    margin: auto;
    color: #000000;
`

export const AnswerBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`

export const AnswerDiv = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 13px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    outline: ${p=>p.isSelected};
    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px #ceeeff;
    }
`

export const Circle = styled.div`
    margin: 14px;
    width: 25px;
    background: ${p=>p.isSelected !== '' ? p.Base_style == '1' ?  'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B' : ''};
    height: 25px;
    border-radius: 100%;
    border: 1px solid ${p=> p.Base_style == '1' ?  '#F27221' : p.Base_style == '2' ?  '#0BA7BF' : p.Base_style == '3' ? '#0BA7BF' : '#1D794B'};
`
export const AnsText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 16.9282px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    width: 70%;
`


export const ResultBox = styled.div`
    height: 354.3822021484375px;
    width: 100%;
    max-width: 400px;
    border-radius: 10.51567268371582px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0px 15px 30px 0px rgba(39, 46, 199, 0.25);
    background: #EAF2F9;
`

export const PercentBox = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Dumaloq = styled.div`
    height: 193px;
    width: 193px;
    border-radius: 100%;
    box-shadow: 0px -13.310345649719238px 13.310345649719238px 0px #3137C291 inset;
    box-shadow: 0px 13.310345649719238px 19.965518951416016px 0px #474DD8 inset;
    background: linear-gradient(224.4deg, #565DFF 15.89%, #161DB4 82.1%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DumaloqText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    color: #FFFFFF;
`

export const DumaloqTitle = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 90px;
    color: #FFFFFF;
`

export const PercentText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 40px;
    color: #000000;
    margin-top: 10px;
`

export const AnswerScores = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
`

export const ScoreShowText = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color:${p=>p.isThat == '#2930C4' ? '#fff' : '#2930C4'};
    width: 33.33333%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p=>p.isThat == '#2930C4' ? '#2930C4' : '#fff'};
    @media (max-width:450px){
        font-size: 10px;
    }
`