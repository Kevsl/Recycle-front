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

export const Categories = () => {
  const categories = [
    { id: 1, name: 'Electroménager', image: cleaningMachine },
    { id: 2, name: 'Textiles', image: clothes },
    { id: 3, name: 'Puériculture', image: childs },
    { id: 4, name: 'Maison', image: furnishing },
    { id: 5, name: 'Electronique', image: electronic },
    { id: 6, name: 'Loisirs', image: hobbies },
    { id: 7, name: 'Jardin', image: gardening },
    { id: 8, name: 'Animaux', image: petToy },
  ]

  return (
    <div className="font-Baloo block mb-12  categories">
      <div className="w-90 mx-5  mt-16">
        <h2 className="text-dark-blue ml-4 md:ml-12 ">Toutes les catégories</h2>
        <div className="flex items-center flex-wrap block ">
          {categories.map((categorie) => {
            return (
              <div
                key={categorie.id}
                className="md:w-1/5 w-2/5 mx-5 h-24  my-8 md:h-32 rounded-xl relative  "
              >
                <img
                  className="w-full object-cover h-full rounded-xl z-20"
                  src={categorie.image}
                  alt={categorie.name}
                />
                <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs md:text-sm rounded-b-xl">
                  {categorie.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
