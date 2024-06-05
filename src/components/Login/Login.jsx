import React, { useState } from 'react'
import { Container, Enter, Input, LoginBox, LoginContainer, RightContainer, Row, Texts, Title, Wrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Navigate } from "react-router-dom";
const Login = () => {
  const [userName, setuserName] = useState('');
  const [Password, setPassword] = useState('');
  const [kirish, setkirish] = useState('Kirish');
  const { loginUser, user } = useContext(AuthContext)

  function Submit() {
    setkirish('Kirilmoqda...')
    setTimeout(() => {
      setkirish('Kirish')
    }, 2000);
    loginUser(userName, Password)
  }

  return (
    <>
      {!user ?
        <Container>
          <Wrapper>
            <LoginContainer>
              <LoginBox>
                <Title>Kirish</Title>
                <Row>
                  <Texts>User name</Texts>
                  <Input value={userName} onChange={(e) => setuserName(e.target.value)} placeholder='Login' />
                </Row>
                <Row>
                  <Texts>Paassword</Texts>
                  <Input value={Password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='Password' />
                </Row>
                <Row>
                  <Enter onClick={() => Submit()}>{kirish}</Enter>
                </Row>
              </LoginBox>
            </LoginContainer>
            <RightContainer>

            </RightContainer>
          </Wrapper>
        </Container> : <Navigate to="/dashboard" />}</>
  )
}

export default Login