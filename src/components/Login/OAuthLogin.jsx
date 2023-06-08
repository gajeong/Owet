import React from 'react'
import Button from '../ui/Button'
import { login } from '../../api/firebase'
import { useNavigate } from 'react-router-dom'

export default function OAuthLogin() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }
  return (
    <div className='w-fit'>
      <Button
        text='구글로 로그인'
        outline='brown4'
        color='white'
        width='w-60'
        textColor='slate-500'
        onClick={() => login(handleLogin)}
      ></Button>
    </div>
  )
}
