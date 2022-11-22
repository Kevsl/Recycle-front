import React, { useState, useEffect } from 'react'

export const Header = () => {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)

  return (
    <div className="flex flex-row items-center justify-between w-90  mt-4 mx-5 font-Baloo md:justify-around sm:justify-around ">
      <p className="text-reCycle-green text-3xl font-Baloo">Recycle</p>
      <ul className="flex items-center w-2/3  ml-auto justify-around hidden md:flex ">
        <li className="rounded-lg text-dark-blue">Accueil</li>
        <li className="rounded-lg text-dark-blue">Annonces</li>
        <li className="rounded-lg text-dark-blue">Profil</li>
        <li className="rounded-lg border-reCycle-green border-solid border text-reCycle-green rounded-xl px-6">
          Connexion
        </li>
        <li className=" bg-reCycle-green text-white rounded-xl px-6">
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
                console.log('ok')
              }}
            >
              Connexion
            </button>
            <button
              className="bg-reCycle-green text-white rounded-xl px-6 w-1/2 mx-auto mt-6"
              onClick={() => {
                console.log('ok')
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
