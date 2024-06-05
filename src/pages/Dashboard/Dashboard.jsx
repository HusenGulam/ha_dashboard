import React, { useState } from 'react'
import { AllStatusContianer, Container, CustomWrapper, EachBlock, NumberWrapper, SmallWord, StatusImg, TableDivContianer, TableTitle, TableWrapper, TextContainer } from './style'
import PlayIcon from '../../assets/icons/Play.png';
import UnionIcon from '../../assets/icons/Union.png';
import VectorIcon from '../../assets/icons/Vector.png';
import BasicTable from './Table/Table'
import useAxios from '../../api/useAxios';
import { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { CircularProgress } from '@mui/material';


const Dashboard = () => {
    const api = useAxios()
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true);

    const get_data = async () => {
        let res = await api.get('/dashboard/')
        if (res.data.success) {
            setData(res.data.data)
            setisLoading(false)
        } else {

        }
    }

    useEffect(() => {
        get_data()
    }, [])

    return (
        <Container>
            <CustomWrapper>
                <AllStatusContianer>
                    <EachBlock num={1}>
                        <StatusImg src={PlayIcon} />
                        <TextContainer>
                            <NumberWrapper>{isLoading ? <CircularProgress size={15} color="success" /> : data.course_count}</NumberWrapper>
                            <SmallWord>Kurslar</SmallWord>
                        </TextContainer>
                    </EachBlock>
                    <EachBlock num={2}>
                        <StatusImg src={UnionIcon} />
                        <TextContainer>
                            <NumberWrapper>{isLoading ? <CircularProgress size={15} color="secondary" /> :data.student_count}</NumberWrapper>
                            <SmallWord>O’quvchilar</SmallWord>
                        </TextContainer>
                    </EachBlock>
                    <EachBlock num={3}>
                        <StatusImg src={VectorIcon} />
                        <TextContainer>
                            <NumberWrapper>{isLoading ? <CircularProgress size={15} color="success" /> : 0}</NumberWrapper>
                            <SmallWord>Top Kurslar</SmallWord>
                        </TextContainer>
                    </EachBlock>
                </AllStatusContianer>
                <TableDivContianer>
                    <TableTitle>Faol oquvchilar</TableTitle>
                    {isLoading ? <Loading /> :
                        <TableWrapper>
                        <BasicTable data={data.students} />
                    </TableWrapper>}
                </TableDivContianer>
            </CustomWrapper>
        </Container>
    )
}

export default Dashboard