import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const [isConnected, setIsConnected] = useState(false)
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setIsConnected(true)
    }
  }, [])

  function handleLogout() {
    localStorage.clear()
    setIsConnected(false)
    navigate('/connexion')
  }

  return (
    <div className="flex flex-row items-center fixed top-0 left-0  bg-white justify-between w-full  py-4 px-5 font-Baloo z-50 mb-6 ">
      <h1
        className="text-green-recycle text-3xl font-Baloo cursor-pointer mt-2 md:mt-px"
        onClick={() => {
          navigate('/')
        }}
      >
        Recycle
      </h1>
      {!isConnected ? (
        <ul className="flex items-center md:w-2/6  md:ml-auto justify-center hidden md:flex  ">
          <li
            className="border-green-recycle border text-green-recycle rounded-xl px-6 cursor-pointer"
            onClick={() => {
              navigate('/connexion')
            }}
          >
            Connexion
          </li>
          <li
            className=" bg-green-recycle text-white border-white rounded-xl px-6 cursor-pointer ml-4"
            onClick={() => {
              navigate('/inscription')
            }}
          >
            S'inscrire
          </li>
        </ul>
      ) : (
        <div className="flex items-center justify-center 1/6 md:flex mt-1">
          <button
            className=""
            onClick={() => {
              navigate('/profil')
            }}
            aria-label="Navigation vers la page profil"
          >
            <i className="fa-regular fa-user text-dark-blue w-6 h-6 text-2xl mx-4"></i>
          </button>
          <button
            className=""
            onClick={() => {
              handleLogout()
            }}
            aria-label="Se déconnecter de l'application"
          >
            <i className="fa-solid fa-right-from-bracket text-dark-blue w-6 h-6 text-2xl mx-4"></i>{' '}
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
              aria-label="Menu de connexion"
            >
              <i className="fa-solid fa-xmark z-0 text-white w-12 h-12 text-2xl"></i>
            </p>
            <button
              className="rounded-lg border-green-recycle border-solid border text-green-recycle bg-white px-6 w-1/2 mx-auto my-2"
              onClick={() => {
                navigate('/connexion')
              }}
              aria-label="Navigation vers la page de connexion"
            >
              Connexion
            </button>
            <button
              className="bg-green-recycle text-white rounded-lg px-6 w-1/2 mx-auto ^ cursor-pointer"
              onClick={() => {
                navigate('/inscription')
              }}
              aria-label="Navigation vers la page d'inscription"
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
