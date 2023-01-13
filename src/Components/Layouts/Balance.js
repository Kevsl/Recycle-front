import { getBalance } from '../../Service/balanceService'
import React, { useState, useEffect } from 'react'

export const Balance = () => {
  const [amount, setAmount] = useState()
  useEffect(() => {
    getBalance().then((res) => {
      setAmount(res.amount)
    })
  }, [])
  return (
    <div className="bg-reCycle-green md:w-2/6 md:ml-auto md:mr-8 h-14 w-48 rounded-xl flex flex-col items-center justify-center opacity-70">
      <p className="text-white text-center">Mon solde</p>
      <p className="text-white text-center">
        <span className="text-yellow">{amount}</span> Palmiers
      </p>
    </div>
  )
}
