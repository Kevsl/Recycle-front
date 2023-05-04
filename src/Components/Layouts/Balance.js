import { getBalance } from '../../Service/balanceService'
import React, { useState, useEffect } from 'react'

export const Balance = () => {
  const [amount, setAmount] = useState()

  useEffect(() => {
    getBalance().then((res) => {
      res.map((response) => {
        return setAmount(response.balance)
      })
    })
  }, [])

  return (
    <div className="bg-green-recycle mt-16 mb-4 h-20 w-42 rounded-xl flex flex-col items-center justify-center md:mx-4">
      <p className="text-white text-center">Mon solde</p>
      <p className="text-white text-center">
        <span className="text-yellow">{amount}</span> Palmiers
      </p>
    </div>
  )
}
