import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)

  return (
    <div className="flex flex-row items-center justify-between w-90  mt-4 mx-5 font-Baloo md:justify-around sm:justify-around ">
      <p className="text-reCycle-green text-3xl font-Baloo">Recycle</p>
      <ul className="flex items-center w-2/3  ml-auto justify-around hidden md:flex ">
        <li className="rounded-lg text-dark-blue">Accueil</li>
        <li className="rounded-lg text-dark-blue">Annonces</li>
        <li className="rounded-lg text-dark-blue">Profil</li>
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

      {isBurgerMenuVisible ? (
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
      ) : (
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
