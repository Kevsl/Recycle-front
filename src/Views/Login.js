import logo from '../Assets/images/logo.png'
import { checkEmail, checkPassword } from '../Utils/Regex'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFunction } from '../Service/authService'
import { Triangle } from 'react-loader-spinner'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailOk, setEmailOk] = useState(false)
  const [passOK, setPassOk] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleEmail(value) {
    checkEmail(value) === true ? setEmailOk(true) : setEmailOk(false)
  }
  function handlePassword(value) {
    checkPassword(value) === true ? setPassOk(true) : setPassOk(false)
  }
  function handleLogin() {
    setIsLoading(true)
    try {
      loginFunction(email, password).then((res) => {
        setIsLoading(false)
        switch (res) {
          case 200:
            navigate('/')
            break
          case 500:
            setErrorMessage('Problème avec le serveur')
            break
          case 'connexion':
            setErrorMessage('Problème avec votre connexion')
            break
          case 401:
            setErrorMessage('Problème avec vos identifiants')
            break
          default:
            console.log(res)
        }
      })
    } catch (e) {
      console.log(e)
    }

    // loginFunction(email, password)
    //   .then((res) => {
    //     console.log(res)
    //     switch (res) {
    //       case 200:
    //         navigate('/')
    //         break
    //       case 500:
    //         setErrorMessage('Problème avec le serveur')
    //         break
    //       case 'connexion':
    //         setErrorMessage('Problème avec votre connexion')
    //         break
    //       case 401:
    //         setErrorMessage('Problème avec vos identifiants')
    //         break
    //       default:
    //         console.log(res)
    //     }
    //     setIsLoading(false)
    //   })
    //   .catch((error) => console.log(error))
  }

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-Baloo">
        <div className="w-full max-w-md space-y-8">
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
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => {
                  handlePassword(e.target.value)
                  setPassword(e.target.value)
                }}
              />
            </div>
            {password.length > 0 && passOK === false && (
              <p className="text-xs text-red-recycle">
                Le mot de passe doit avoir 1 majuscule,1minuscule,1 caractère
                spécial, 8 caractères minimum
              </p>
            )}
          </div>
          {errorMessage.length > 0 && (
            <p className="text-red-recycle text-sm my-4 text-center">
              {errorMessage}
            </p>
          )}
          <div className="w-full flex items-center justify-center flex-col">
            {isLoading === true ? (
              <Triangle
                height="80"
                width="80"
                color="#91C788"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <button
                className="bg-green-recycle text-white rounded-xl px-6 w-48 mx-auto mt-2"
                onClick={() => handleLogin()}
              >
                Se connecter
              </button>
            )}

            <p className="mt-2">où</p>
            <button
              className="text-green-recycle bg-white rounded-xl px-6 w-48 mx-auto border border-green-recycle mt-2"
              onClick={() => {
                navigate('/inscription')
              }}
            >
              Créer un compte
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <p>Forgot your password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
