import React, { useState , useEffect } from 'react'
import Header from "./Header"
import BasicTabs from './BasicTabs'
import { useDispatch } from 'react-redux'
import { fetchUser, openModal } from '../slices/userSlice'
import Users from './Users'
import ModalBtn from './ModalBtn'
import Modal from './Modal'
import { useSelector } from 'react-redux'
import AddUser from './AddUser'
export default function Home() {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const modalValue = useSelector(openModal)

  useEffect (() => {
    dispatch(fetchUser(`${value + 1}`))
   }, [value])
  
 
  return (
    <div >
      <Header/>
      <BasicTabs value={value} setValue={setValue}/>
      <Users />
      <AddUser/>
      <ModalBtn/>
      {modalValue ? <Modal/> : null}
    </div>
  )
}
