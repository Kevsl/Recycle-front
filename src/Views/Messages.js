import React from 'react'
import { Header } from '../Components/Layouts/Header'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import { ConversationOverview } from '../Components/Layouts/ConversationOverView'

const Messages = () => {
  return (
    <div>
      <Header />
      <h1 className="h-24"> Mes messages</h1>
      <ConversationOverview />
      <FooterMenu />
    </div>
  )
}
export default Messages
