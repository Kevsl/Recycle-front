import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Triangle } from 'react-loader-spinner'
import { Header } from '../Components/Layouts/Header'
import { FooterMenu } from '../Components/FooterMenu'
import { ConversationOverview } from '../Components/Layouts/ConversationOverView'

const Messages = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <Header />
      <ConversationOverview />
      <FooterMenu />
    </div>
  )
}
export default Messages
