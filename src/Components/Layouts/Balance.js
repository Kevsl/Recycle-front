import { getBalance } from '../../Service/balanceService'
import React, { useState, useEffect } from 'react'

export const Balance = () => {
  const [amount, setAmount] = useState()

  useEffect(() => {
    getBalance().then((res) => {
      res.map((response) => {
        setAmount(response.balance)
      })
    })
  }, [])

  return (
    <div className="bg-green-recycle md:mt-12 md:w-48 md:ml-auto md:mr-8 h-10 w-48 rounded-xl flex flex-col items-center justify-center opacity-70">
      <p className="text-white text-center">Mon solde</p>
      <p className="text-white text-center">
        <span className="text-yellow">{amount}</span> Palmiers
      </p>
    </div>
  )
}
