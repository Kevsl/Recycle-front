import { useNavigate } from 'react-router-dom'

export const FooterMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="menu flex items-center justify-between px-5 h-16 mt-4 bottom-0 right-0 w-screen fixed bg-white md:hidden">
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        <i class="fa-solid fa-house-chimney text-reCycle-green text-2xl"></i>
      </button>
      <button
        className=""
        onClick={() => {
          navigate('/messages')
        }}
      >
        <i class="fa-regular fa-message text-reCycle-green text-2xl "></i>
      </button>
      <button
        className="bg-reCycle-green rounded-full mb-4 w-12 h-12 mt-2"
        onClick={() => {
          navigate('/publier')
        }}
      >
        <i class="fa-solid fa-plus text-white text-2xl "></i>
      </button>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        <i class="fa-solid fa-magnifying-glass text-reCycle-green text-2xl"></i>
      </button>
      <button
        onClick={() => {
          navigate('/profil')
        }}
      >
        <i className="fa-solid fa-user-pen mx-2 text-reCycle-green text-2xl"></i>
      </button>
    </div>
  )
}
