import React, { useContext, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { LuShoppingCart, LuSearch } from 'react-icons/lu'
import { AiOutlineUser } from 'react-icons/ai'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

export default function HorizontalBar() {
  const [isOpen, setIsOpen] = useState('none')
  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleMyPage = () => {
    if (user) navigate('/mypage')
    else navigate('/login')
  }
  return (
    <>
      <header className='flex items-center justify-between p-4'>
        <div className='w-28 flex-none'>
          <HiBars3
            className='cursor-pointer'
            onClick={() => setIsOpen('open')}
          />
        </div>
        <Logo
          width='64'
          className='cursor-pointer'
          onClick={() => navigate('/')}
        />
        <div className='flex flex-none grid-cols-3 gap-4 w-28 justify-end'>
          <AiOutlineUser
            className='cursor-pointer'
            onClick={handleMyPage}
          />
          <LuShoppingCart className='cursor-pointer' />
          <LuSearch className='cursor-pointer' />
        </div>
      </header>

      <Sidebar
        isOpen={isOpen}
        handleOpen={() => setIsOpen('close')}
      />
    </>
  )
}
