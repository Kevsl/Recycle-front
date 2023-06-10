import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between w-5/6 md:w-1/2 mx-auto my-8">
      <p
        className="text-xs text-gray-recycle cursor-pointer"
        onClick={() => {
          navigate('/confidentialite')
        }}
      >
        Politique de confidentialité
      </p>
      <p
        className="text-xs text-gray-recycle cursor-pointer"
        onClick={() => {
          navigate('/mentions')
        }}
      >
        Mentions légales
      </p>
    </div>
  )
}
