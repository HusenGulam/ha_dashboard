import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../api/useAxios'
import Loading from '../../components/Loading/Loading'
import { Container, CustomWrapper } from './styles'
import VideoLesson from './VideoLesson'

const CourseInfo = () => {
  const { course_id } = useParams()
  const api = useAxios()
  const [course, setCourse] = useState()
  const [isLoading, setisLoading] = useState(true);

  const get_course = async () => {
    setisLoading(true)
    let res = await api.get(`course/detail/${course_id}/`)
    if (res.data.success) {
      setCourse(res.data.data)
      setisLoading(false)
    }
  }

  useEffect(() => { get_course() }, [])
  return (
    <Container>
      <CustomWrapper>
        {isLoading ? <Loading /> :
          <VideoLesson course={course} />}
      </CustomWrapper>
    </Container>
  )
}

export default CourseInfo