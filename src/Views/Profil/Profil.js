import { Categories } from '../../Components/Layouts/Categories'
import { Header } from '../../Components/Layouts/Header'
import { Ads } from '../../Components/Layouts/Ads'
import { useNavigate } from 'react-router-dom'

const Profil = () => {
  const navigate = useNavigate()

  const bananas = 8
  return (
    <div className="font-Baloo">
      <Header />

      <div className="my-8 flex items-center justify-center md:justify-between">
        <div className="w-full flex items-center justify-around hidden md:flex ">
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center"
            onClick={() => {
              console.log('oups la messagerie n existe pas encore.')
            }}
          >
            <i className="fa-solid fa-message mx-2"></i>
            Messagerie
          </button>
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center bg-pink-reCycle text-white"
            onClick={() => {
              console.log('oups la messagerie n existe pas encore.')
            }}
          >
            <i className="fa-solid fa-plus mx-2"></i>
            Publier
          </button>
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center"
            onClick={() => {
              console.log('oups la messagerie n existe pas encore.')
            }}
          >
            <i className="fa-solid fa-user-pen mx-2"></i> Editer mon profil
          </button>
        </div>
        <div className="bg-reCycle-green md:w-2/6 md:ml-auto md:mr-8 h-14 w-48 rounded-xl flex flex-col items-center justify-center opacity-70">
          <p className="text-white text-center">Mon solde</p>
          <p className="text-white text-center">
            <span className="text-yellow">{bananas}</span> bananas
          </p>
        </div>
      </div>
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      <Ads title="Mes annonces" />
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
    </div>
  )
}
export default Profil
