import React from 'react'
import { Header } from '../Components/Layouts/Header'
import { FooterMenu } from '../Components/FooterMenu'
import { ConversationOverview } from '../Components/Layouts/ConversationOverView'

const Messages = () => {
  return (
    <div>
      <Header />
      <ConversationOverview />
      <FooterMenu />
    </div>
  )
}
export default Messages
