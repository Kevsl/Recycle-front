/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Triangle } from 'react-loader-spinner'
import { getListings } from '../../Service/listingService'

export const Ads = ({ title }) => {
  const [datas, setDatas] = useState([])
  const [isOffers, setIsOffers] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    isOffers
      ? getListings().then((res) => {
          setDatas(res)
          setIsLoading(false)
        })
      : getListings().then((res) => {
          setDatas(res)
          setIsLoading(false)
        })
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
          {isLoading === true ? (
            <div className="w-1/2 mx-auto flex items-center justify-center">
              <Triangle
                color="#91C788"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                width="80"
                height="80"
              />
            </div>
          ) : (
            datas.map((data) => {
              return (
                <div
                  key={data.id}
                  className="md:w-1/5 w-2/5 mx-5 h-24  my-8 md:h-32 rounded-xl relative  "
                >
                  <img
                    className="w-full object-cover h-full rounded-xl z-20"
                    src={data.listingImage}
                    alt={data.name}
                  />
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-sm rounded-b-xl">
                    {data.title}
                  </p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
