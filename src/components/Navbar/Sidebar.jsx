import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function Sidebar({ isOpen, handleOpen }) {
  const {
    isLoading,
    error,
    data: menus,
  } = useQuery(
    ['sidebar'],
    async () =>
      axios.get('data/sidebar-menu.json').then((res) => res.data.data),
    { staleTime: 1000 * 60 * 100 }
  )

  return (
    <>
      <section className={` ${styles.playfair} z-50 `}>
        {isLoading && <p>loading</p>}
        {error && <p>error</p>}

        <nav
          id='nav'
          className={`fixed position top-0 min-h-screen w-64 bg-brown1 z-30 p-4 animate__animated ${
            isOpen ? ' animate__fadeInLeft' : 'animate__fadeOutLeft'
          }`}
        >
          {menus?.map((parent) => (
            <ol
              key={parent.id}
              className={`text-xl text-brown5 font-bold mb-2 ${
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
        </nav>
      </section>
      {/* 닫게 해줄 아웃 컨테이너 */}
      {isOpen && (
        <div
          className='bg-gray-950 fixed w-full min-h-screen top-0 opacity-60 z-10'
          onClick={() => handleOpen()}
        ></div>
      )}
    </>
  )
}