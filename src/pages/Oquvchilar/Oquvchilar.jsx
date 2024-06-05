import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useAxios from '../../api/useAxios'
import { AddContainer, Container, CustomWrapper, MainText, TableDivContianer, TableWrapper } from './style'
import BasicTable from './Table/Table'
import Loading from '../../components/Loading/Loading'

const Oquvchilar = () => {
    const api = useAxios()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [course, setCourse] = useState('')
    const [page, setPage] = useState('')
    const [isLoading, setisLoading] = useState(true);

    const get_data = async () => {
        let params = {
            search: search,
            course: course,
            page: page
        }
        let res = await api.get('/my-students/', { params: params })
        if (res.data.success) {
            console.log(res.data);
            setData(res.data.data)
            setisLoading(false)
        } else {

        }
    }

    useEffect(() => {
        get_data()
    }, [search, course, page])
    return (
        <Container>
            <CustomWrapper>
                <AddContainer>
                    <MainText>O'quvchilar</MainText>
                </AddContainer>
                <TableDivContianer>
                    <TableWrapper>
                        {isLoading ? <Loading /> : <BasicTable data={data} />}
                    </TableWrapper>
                </TableDivContianer>
            </CustomWrapper>
        </Container>
    )
}

export default Oquvchilar