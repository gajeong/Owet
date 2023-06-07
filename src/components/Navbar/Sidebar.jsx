import React, { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { logout } from '../../api/firebase'
import { useAuthContext } from '../../context/AuthContext'
export default function Sidebar({ isOpen, handleOpen }) {
  const {
    isLoading,
    error,
    data: menus,
  } = useQuery(
    ['sidebar'],
    async () =>
      axios
        .get('data/sidebar-menu.json')
        .then((res) => res.data.data),
    { staleTime: 1000 * 60 * 100 }
  )

  const { user } = useAuthContext()

  return (
    <>
      <section className=' z-50 '>
        {isLoading && <p>loading</p>}
        {error && <p>error</p>}

        <nav
          id='nav'
          className={`fixed flex-col position top-0 min-h-screen w-64 bg-brown1 z-30 p-4 animate__animated ${
            isOpen === 'open'
              ? ' animate__fadeInLeft'
              : isOpen === 'close'
              ? 'animate__fadeOutLeft'
              : 'hidden'
          }`}
        >
          {menus?.map((parent) => (
            <ol
              key={parent.id}
              className={`playfair text-xl text-brown5 font-bold mb-2 ${
                parent.cursor ? 'cursor-pointer' : ''
              }`}
            >
              {parent.title}
              {parent.items?.map((menu) => (
                <li
                  className='py-1 flex items-center text-lg font-normal ml-4 hover:underline underline-offset-4 decoration-brown4 cursor-pointer hover:animate-pulse'
                  key={menu.id}
                >
                  <dd className='w-1 h-1 bg-brown4 mr-2'></dd>
                  <span>{menu.title}</span>
                </li>
              ))}
            </ol>
          ))}
          {user && (
            <div className='fixed bottom-2 text-xs '>
              <p className='p-1 cursor-pointer'>장바구니</p>
              <p className='p-1 cursor-pointer'>
                마이페이지
              </p>
              <p
                className='p-1 cursor-pointer'
                onClick={logout}
              >
                로그아웃
              </p>
            </div>
          )}
        </nav>
      </section>
      {/* 닫게 해줄 아웃 컨테이너 */}
      {isOpen === 'open' && (
        <div
          className='bg-gray-950 fixed w-full min-h-screen top-0 opacity-60 z-10'
          onClick={() => handleOpen()}
        ></div>
      )}
    </>
  )
}
