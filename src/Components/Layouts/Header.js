import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const [isConnected, setIsConnected] = useState(false)

  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('isConnected')
    if (token === 'true') {
      setIsConnected(true)
    }
  })

  function handleLogout() {
    localStorage.setItem('isConnected', false)
    setIsConnected(false)
  }

  return (
    <div className="flex flex-row items-center justify-between w-90  mt-4 mx-5 font-Baloo ">
      <p
        className="text-reCycle-green text-3xl font-Baloo cursor-pointer mt-2 md:mt-px"
        onClick={() => {
          navigate('/')
        }}
      >
        Recycle
      </p>
      {!isConnected ? (
        <ul className="flex items-center md:w-2/6  md:ml-auto justify-center hidden md:flex ">
          <li
            className="border-reCycle-green border-reCycle-green border text-reCycle-green rounded-xl px-6 cursor-pointer"
            onClick={() => {
              navigate('/connexion')
            }}
          >
            Connexion
          </li>
          <li
            className=" bg-reCycle-green text-white border-white rounded-xl px-6 cursor-pointer"
            onClick={() => {
              navigate('/inscription')
            }}
          >
            S'inscrire
          </li>
        </ul>
      ) : (
        <div className="flex items-center justify-center w-1/2 md:flex mt-1">
          <button
            className=""
            onClick={() => {
              navigate('/profil')
            }}
          >
            <i class="fa-regular fa-user text-dark-blue w-6 h-6 text-2xl mx-4"></i>
          </button>
          <button
            className="mr-8"
            onClick={() => {
              handleLogout()
            }}
          >
            <i class="fa-solid fa-right-from-bracket text-dark-blue w-6 h-6 text-2xl mx-4"></i>{' '}
          </button>
        </div>
      )}
      {isBurgerMenuVisible && !isConnected && (
        <div className="relative">
          <div className="w-screen bg-black-opacity-90 h-screen fixed left-0 top-0 z-20 flex flex-col justify-center ">
            <p
              className="block absolute right-6 z-0 top-6  "
              onClick={() => {
                isBurgerMenuVisible
                  ? setIsBurgerMenuVisible(false)
                  : setIsBurgerMenuVisible(true)
              }}
            >
              <i class="fa-solid fa-xmark z-0 text-white w-12 h-12 text-2xl"></i>
            </p>
            <button
              className="rounded-lg border-reCycle-green border-solid border text-reCycle-green bg-white rounded-xl px-6 w-1/2 mx-auto"
              onClick={() => {
                navigate('/connexion')
              }}
            >
              Connexion
            </button>
            <button
              className="bg-reCycle-green text-white rounded-xl px-6 w-1/2 mx-auto mt-6 cursor-pointer"
              onClick={() => {
                navigate('/inscription')
              }}
            >
              S inscrire
            </button>
          </div>
        </div>
      )}
      {!isBurgerMenuVisible && !isConnected && (
        <p
          className=" absolute top-8 right-14 md:hidden sm:hidden  "
          onClick={() => {
            isBurgerMenuVisible
              ? setIsBurgerMenuVisible(false)
              : setIsBurgerMenuVisible(true)
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </p>
      )}
    </div>
  )
}
