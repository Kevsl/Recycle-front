/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import cleaningMachine from '../../Assets/images/cleaningMachine.jpg'
import clothes from '../../Assets/images/clothes.jpg'
import childs from '../../Assets/images/child.jpg'
import furnishing from '../../Assets/images/furnishing.jpg'
import electronic from '../../Assets/images/electronic.jpg'
import hobbies from '../../Assets/images/hobbies.jpg'
import gardening from '../../Assets/images/gardening.jpg'
import petToy from '../../Assets/images/petToy.jpg'
import { data } from 'autoprefixer'

export const Ads = ({ title }) => {
  const offers = [
    { id: 1, name: 'Machine à laver', image: cleaningMachine },
    { id: 2, name: 'Vêtements', image: clothes },
    { id: 3, name: 'Jouet', image: childs },
    { id: 4, name: 'Meuble', image: furnishing },
    { id: 5, name: 'Walkman', image: electronic },
    { id: 6, name: 'Rollers', image: hobbies },
    { id: 7, name: 'Arrosoir', image: gardening },
    { id: 8, name: 'Nonos', image: petToy },
  ]
  const asks = [
    { id: 1, name: 'Nonos', image: petToy },
    { id: 2, name: 'Arrosoir', image: gardening },

    { id: 3, name: 'Rollers', image: hobbies },

    { id: 4, name: 'Walkman', image: electronic },

    { id: 5, name: 'Canapé', image: furnishing },

    { id: 6, name: 'Jouet', image: childs },

    { id: 7, name: 'Vêtements', image: clothes },

    { id: 8, name: 'Machine à laver', image: cleaningMachine },
  ]

  const [isOffers, setIsOffers] = useState(true)

  const [datas, setDatas] = useState([])

  useEffect(() => {
    isOffers ? setDatas(offers) : setDatas(asks)
  }, [isOffers])

  return (
    <div className="font-Baloo block mb-12 Ads">
      <div className="w-90 mx-5  mt-16">
        <h2 className="text-dark-blue ml-4 md:ml-12 ">{title}</h2>
        <div className="flex items-center justify-between mt-12 md:w-1/3 md:ml-12 mx-5">
          <button
            className={
              isOffers
                ? 'bg-reCycle-green text-white border border-white  w-32  rounded-xl  md:my-8'
                : 'bg-white text-reCycle-green border border-reCycle-green  w-32  rounded-xl  md:my-8'
            }
            onClick={() => {
              setIsOffers(true)
            }}
          >
            Offres
          </button>
          <button
            className={
              isOffers
                ? 'bg-white text-reCycle-green border border-reCycle-green  w-32  rounded-xl  md:my-8'
                : 'bg-reCycle-green text-white border border-white  w-32  rounded-xl  md:my-8'
            }
            onClick={() => {
              setIsOffers(false)
            }}
          >
            Demandes
          </button>
        </div>
        <div className="flex items-center flex-wrap  ">
          {datas.map((data) => {
            return (
              <div
                key={data.id}
                className="md:w-1/5 w-2/5 mx-5 h-24  my-8 md:h-32 rounded-xl relative  "
              >
                <img
                  className="w-full object-cover h-full rounded-xl z-20"
                  src={data.image}
                  alt={data.name}
                />
                <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-sm rounded-b-xl">
                  {data.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
