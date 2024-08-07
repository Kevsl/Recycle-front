import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export const FooterMenu = () => {
  const navigate = useNavigate()
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setIsConnected(true)
    }
  }, [setIsConnected])

  return (
    isConnected === true && (
      <div className="menu flex items-center justify-between px-5 h-16 mt-4 right-0 w-screen fixed bottom-0 left-0 bg-white md:hidden">
        <button
          onClick={() => {
            navigate('/')
          }}
        >
          <i className="fa-solid fa-house-chimney text-green-recycle text-2xl"></i>
        </button>
        <button
          className=""
          onClick={() => {
            navigate('/messages')
          }}
        >
          <i className="fa-regular fa-message text-green-recycle text-2xl "></i>
        </button>
        <button
          className="bg-green-recycle rounded-full mb-4 w-12 h-12 mt-2"
          onClick={() => {
            navigate('/creation')
          }}
        >
          <i className="fa-solid fa-plus text-white text-2xl "></i>
        </button>
        <button
          onClick={() => {
            navigate('/recherche')
          }}
        >
          <i className="fa-solid fa-magnifying-glass text-green-recycle text-2xl"></i>
        </button>
        <button
          onClick={() => {
            navigate('/profil')
          }}
        >
          <i className="fa-solid fa-user-pen mx-2 text-green-recycle text-2xl"></i>
        </button>
      </div>
    )
  )
}
