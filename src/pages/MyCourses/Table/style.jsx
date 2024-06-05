import styled from 'styled-components'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { IconButton } from '@mui/material';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`

export const Wrap = styled.div`
    &:hover{
            cursor: pointer !important;
        }
    .hoverme{
        width: 90px;
        height: 50px;
        object-fit: cover;
    }
`

export const Btn = styled(IconButton)`
    
`

export const DelIcon = styled(DeleteOutlineOutlinedIcon)`
    color: rgba(205, 0, 0, 1) ;
`

export const EditIcon = styled(BorderColorOutlinedIcon)`
    color: #0BA7BF;;
`