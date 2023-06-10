import React, { useState, useEffect } from 'react'
import { getCategories } from '../../Service/categoriesService'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    getCategories().then((res) => {
      setIsLoading(false)
      setCategories(res)
    })
  }, [])

  return (
    <div className="font-Baloo block mb-12  categories">
      <div className="w-90 mx-5  mt-16">
        <h2 className="text-dark-blue text-center my-4">
          Toutes les catégories
        </h2>
        <div className="flex items-center flex-wrap justify-evenly">
          {isLoading === true ? (
            <div className="w-1/2 mx-auto flex items-center justify-evenly">
              <Triangle
                color="#91C788"
                aria-label="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                width="80"
                height="80"
              />
            </div>
          ) : (
            categories.map((categorie) => {
              return (
                <div
                  key={categorie.id}
                  className="w-40 sm:w-1/3 sm:mx-5 mx- my-8  rounded-xl relative cursor-pointer "
                  onClick={() =>
                    navigate(`/categorie/${categorie.id}`, {
                      state: { category: categorie.category },
                    })
                  }
                >
                  <img
                    className="w-full object-cover md:h-full max-h-24 md:max-h-32 rounded-xl z-20"
                    src={categorie.image}
                    alt={categorie.category}
                  />
                  <p className="absolute bottom-0  bg-black-opacity-50 w-full text-center text-white text-xs md:text-sm rounded-b-xl">
                    {categorie.category}
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
