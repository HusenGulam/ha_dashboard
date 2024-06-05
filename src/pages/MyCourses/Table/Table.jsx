import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableDATA } from './data';
import { Btn, DelIcon, EditIcon, Wrap, Wrapper } from './style';
import { useNavigate, Link } from 'react-router-dom';
import useAxios from '../../../api/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';
import { BaseURLMedia } from '../../../Base/Url';
import Loading from '../../../components/Loading/Loading';


export default function BasicTable() {
  const navigate = useNavigate()
  const api = useAxios()
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState('')
  const [isLoading, setisLoading] = useState(true);


  const get_data = async () => {
    let params = {
      search: search,
      level: level,
      category: category,
      status: status,
      page: page
    }
    let res = await api.get('/my-courses/', { params: params })
    if (res.data.success) {
      setData(res.data.data)
      setisLoading(false)
    } else {

    }
  }

  useEffect(() => {
    get_data()
  }, [search, level, category, status, page])

  const ToInfo = (id) => {
    navigate(`/dashboard/courseinfo/${id}`)
  }

  const ToEditCourse = (id) => {

    api.get(`/my-courses/${id.id}/`).then((res) => {
      if (res) {
        navigate(`/dashboard/editcourse/${id.id}`, { state: res.data.data })
        localStorage.setItem('course_id', id.id)
        localStorage.setItem("active_step_edit", 0);
      }
    })

  }



  return (
    <> {isLoading ? <Loading /> : <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nomi</TableCell>
            <TableCell align="left">Kategoriya</TableCell>
            <TableCell align="left">Darslar<br />soni</TableCell>
            <TableCell align="left">Darajasi</TableCell>
            <TableCell align="left">Kim uchun</TableCell>
            <TableCell align="left">Holat</TableCell>
            <TableCell align="left">Sana</TableCell>
            <TableCell align="center">...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.result?.map((row, i) => (
            <TableRow
              key={i}
              style={{ borderColor: 'red' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderColor: 'blue' }}
            >
              <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center', height: 72 }} onClick={() => ToInfo(row.id)}>
                <Wrap><img className='hoverme' src={`${BaseURLMedia}${row.image}`} alt="" /></Wrap>
                <Wrap><p style={{ marginLeft: 10 }}>{row.title}</p></Wrap>
              </TableCell>
              <TableCell align="left" style={{ height: 70 }}>{row.category}</TableCell>
              <TableCell align="left" style={{ height: 70 }}>{row.lessons_count}</TableCell>
              <TableCell align="left" style={{ height: 70 }}>{row.level}</TableCell>
              <TableCell align="left" style={{ height: 70 }}><span style={{ color: '#fca103' }}>{row.course_type.slice(0, 20)}</span></TableCell>
              <TableCell align="left" style={{ height: 70 }}>{row.step}</TableCell>
              <TableCell align="left" style={{ height: 70, fontSize: 11 }}>{row.date_added}</TableCell>
              <TableCell align="center" style={{ display: "flex", justifyContent: 'end', height: 49 }}>
                <Wrapper>
                  <Btn onClick={() => ToEditCourse(row)} ><EditIcon /></Btn>
                  <Btn><DelIcon /></Btn>
                </Wrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>} </>
  );
}
