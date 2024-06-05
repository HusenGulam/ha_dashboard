import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import useAxios from '../../../api/useAxios'
import { BaseURLMedia } from '../../../Base/Url'
import { ContentContainer, FileContainer, FileLink, RightMe, ThirdContainer } from '../../Course/style'

const Manba = () => {
  const api = useAxios()
  const [files, setFiles] = useState([])
  const [course] = useOutletContext()
  const get_files = async () => {
    let res = await api.get(`/attachment/`, { params: { course: course.id } })
    if (res.data.success) {
      setFiles(res.data.data)
    }
  }
  useEffect(() => { get_files() }, [course])
  return (
    <ContentContainer style={{ marginTop: "20px" }}>
      {files?.map((item, index) => (
        <FileContainer>
          <FileLink href={BaseURLMedia + item?.file} target="_blank" download={true}>{index + 1}) {item?.title}</FileLink>
        </FileContainer>
      ))}
    </ContentContainer>
  )
}

export default Manba