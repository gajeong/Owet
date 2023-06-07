import React from 'react'
import Button from '../ui/Button'

export default function OAuthLogin() {
  return (
    <div className='w-fit'>
      <Button
        text='구글로 로그인'
        outline='brown4'
        color='white'
        width='w-60'
        textColor='slate-500'
      ></Button>
    </div>
  )
}
