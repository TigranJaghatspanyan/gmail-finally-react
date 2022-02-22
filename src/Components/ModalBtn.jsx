import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useDispatch } from 'react-redux';
import { setModal } from '../slices/userSlice';
import "./home.scss"
export default function ModalBtn() {
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(setModal(true))
    }
  return (
    <div className='divBtn'>
        <button onClick={openModal} className="btnModal">
            <PersonAddAltIcon></PersonAddAltIcon>
        </button>
    </div>
  )
}
