import facebook from '../../Assets/images/facebook.png'
import twitter from '../../Assets/images/twitter.png'
import instagram from '../../Assets/images/instagram.png'
import linkedIn from '../../Assets/images/linkedin.png'

export const SocialNetworks = () => {
  let socialNetworksIcons = [
    { id: 1, name: 'instagram', image: instagram },
    { id: 2, name: 'facebook', image: facebook },
    { id: 3, name: 'twitter', image: twitter },
    { id: 4, name: 'linkedin', image: linkedIn },
  ]
  return (
    <div>
      <p className="text-center mt-8">Suivez nous sur :</p>
      <div className="my-8 flex items-center justify-around w-2/3 md:w-1/3 mx-auto">
        {socialNetworksIcons.map((icon) => {
          return (
            <img
              src={icon.image}
              alt={icon.name}
              className="w-12 h-12"
              key={icon.id}
            />
          )
        })}
      </div>
    </div>
  )
}
