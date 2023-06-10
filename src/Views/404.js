import bg from '../Assets/images/404.jpg'
import { useNavigate } from 'react-router-dom'
const FOF = () => {
  const navigate = useNavigate()
  return (
    <div className="relative flex items-center justify-center">
      <img src={bg} alt="4O4" className="w-screen h-screen " />
      <button
        className="h-26 text-white p-4 bg-green-recycle z-10 fixed rounded-lg"
        onClick={() => navigate('/')}
      >
        Toutes les routes mènent à ReCycle
      </button>
    </div>
  )
}
export default FOF
