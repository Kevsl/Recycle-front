import logo from '../Assets/images/logo.png'
import { getAllAvatars, register } from '../Service/authService'
import { checkEmail, checkPassword, checkString } from '../Utils/Regex'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Triangle } from 'react-loader-spinner'

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailOk, setEmailOk] = useState(false)
  const [passOK, setPassOk] = useState(false)
  const [confirmpassOK, setConfirmPassOk] = useState(false)
  const [similarPasswords, setSimilarPasswords] = useState(false)
  const [avatars, setAvatars] = useState([])
  const [avatarChosen, setAvatarChosen] = useState(1)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getAllAvatars().then((res) => {
      setAvatars(res)
    })
  }, [])

  function handleEmail(value) {
    checkEmail(value) === true ? setEmailOk(true) : setEmailOk(false)
  }
  function handlePassword(value) {
    checkPassword(value) === true ? setPassOk(true) : setPassOk(false)
  }
  function handleConfirm(value) {
    checkPassword(value) === true
      ? setConfirmPassOk(true)
      : setConfirmPassOk(false)
  }

  function handleSimilarPasswords(password, value) {
    password === value ? setSimilarPasswords(true) : setSimilarPasswords(false)
  }

  function handleRegister() {
    if (
      passOK &&
      emailOk &&
      similarPasswords &&
      confirmpassOK &&
      checkString(pseudo)
    ) {
      try {
        register(email, password, pseudo, avatarChosen).then((res) => {
          if (res.status === 200) {
            navigate('/')
          }
          if (res.response.status) {
            switch (res.response.status) {
              case 200:
                navigate('/')
                break
              case 500:
                setErrorMessage('Problème avec le serveur')

                break
              case 400:
                setErrorMessage('Problème avec votre connexion')

                break
              case 401:
                setErrorMessage('Problème avec vos identifiants')
                break
              default:
            }
          } else {
            setErrorMessage(
              'Problème interne veuillez nous excuser pour la gêne occasionée'
            )
          }
        })
      } catch (e) {}
    }
  }

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-Baloo">
        <div className="w-full max-w-md space-y-4">
          <div>
            <img className="mx-auto h-32 w-auto" src={logo} alt="Recycle" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Recycle
            </h2>
          </div>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              {email.length > 0 && emailOk === false && (
                <p className="text-xs text-red-recycle">
                  Le format de l’email est incorrect
                </p>
              )}
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => {
                  handleEmail(e.target.value)
                  setEmail(e.target.value)
                }}
              />
              <input
                id="pseudo"
                name="pseudo"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none border-b-0  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Pseudonyme"
                value={pseudo}
                onChange={(e) => {
                  setPseudo(e.target.value)
                }}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-none border-b-0  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => {
                  handlePassword(e.target.value)
                  setPassword(e.target.value)
                }}
              />
            </div>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirmer votre mot de passe"
              value={confirmPassword}
              onChange={(e) => {
                handleConfirm(e.target.value)
                handleSimilarPasswords(password, e.target.value)
                setConfirmPassword(e.target.value)
              }}
            />
          </div>

          {password.length > 0 && passOK === false && (
            <p className="text-xs text-red-recycle">
              Le mot de passe doit avoir 1 majuscule,1minuscule,1 caractère
              spécial, 8 caractères minimum
            </p>
          )}
          {confirmPassword.length > 0 && confirmpassOK === false && (
            <p className="text-xs text-red-recycle">
              La confirmation du mot de passe doit avoir 1
              majuscule,1minuscule,1 caractère spécial, 8 caractères minimum
            </p>
          )}
          {!similarPasswords && confirmPassword.length > 0 && (
            <p className="text-xs text-red-recycle">
              Le mot de passe et sa confirmation doivent être identiques
            </p>
          )}
          <div className="w-full flex items-center  flex-col my-4 border border-solid border-gray-light rounded-lg">
            <h2 className="my-2">Choisissez un avatar</h2>
            <div className="flex items-center justify-center flex-wrap">
              {avatars.length > 0 ? (
                avatars.map((avatar) => {
                  return (
                    <button
                      key={avatar.id}
                      onClick={() => {
                        setAvatarChosen(avatar.id)
                      }}
                      className="w-20 h-20 flex justify-center items-center rounded-full mx-1 my-1 hover:h-16 hover:w-16 hover:bg-green-recycle focus:h-16 focus:w-16 focus:bg-green-recycle"
                      ariaLabel="Choisir un avatar pour votre profil"
                    >
                      <img
                        src={avatar.image}
                        alt="avatar"
                        className="w-14 h-14 rounded-full"
                      />
                    </button>
                  )
                })
              ) : (
                <Triangle
                  color="#91C788"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                  width="80"
                  height="80"
                />
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center flex-col my-4">
            <button
              className="bg-green-recycle text-white rounded-xl px-6 w-48 mx-auto mt-2"
              onClick={() => {
                handleRegister()
              }}
              ariaLabel="S'inscrire"
            >
              S'inscrire
            </button>
            <p className="mt-2">où</p>
            <button
              className="text-green-recycle bg-white rounded-xl px-6 w-48 mx-auto border border-green-recycle mt-2"
              onClick={() => {
                navigate('/connexion')
              }}
              ariaLabel="Se connecter"
            >
              Se connecter
            </button>
            {errorMessage.length > 0 && (
              <p className="text-red-recycle text-sm my-4 text-center">
                {errorMessage}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                for="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <p className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password? Inscription
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}
export default Register
