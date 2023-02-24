import React, { useEffect, useState } from 'react'
import {
  getConversations,
  getSpecificConversation,
} from '../../Service/conversationsService'
import { FooterMenu } from '../FooterMenu'

export const ConversationOverview = () => {
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const ownerId = localStorage.getItem('id')
  const ownerAvatar = localStorage.getItem('avatar')
  const ownerName = localStorage.getItem('username')
  const [contactName, setContactName] = useState('')
  const [contactAvatar, setContactAvatar] = useState('')
  const [contactId, setContactId] = useState('123')

  const [isMessengerVisible, setIsMessengerVisible] = useState(true)

  useEffect(() => {
    getConversations().then((res) => {
      setConversations(res)
    })
  }, [])
  useEffect(() => {
    getSpecificConversation(contactId).then((res) => {
      setMessages(res)
    })
  }, [contactId])

  return (
    <div className=" w-full md:justify-around md:flex items-center">
      {isMessengerVisible && (
        <div className=" w-full my-16  h-screen md:w-1/4  overflow-scroll py-4 rounded-xl">
          {conversations &&
            conversations.map((specific) => {
              return (
                <div
                  className="my-8  rounded-lg"
                  onClick={() => {
                    setContactId('123')
                    setContactName(specific.contact)
                    setContactAvatar(specific.avatar)

                    isMessengerVisible
                      ? setIsMessengerVisible(false)
                      : setIsMessengerVisible(true)
                  }}
                  key={specific.id}
                >
                  <div className="flex items-center my-1  ">
                    <img
                      src={specific.avatar}
                      alt={specific.contact}
                      className="!w-8 !h-8 ml-6 rounded-full object-cover my-1"
                    />
                    <p className="text-dark-blue text-center text-sm ml-4">
                      {specific.contact}
                    </p>
                  </div>
                  <p className="text-dark-blue ml-16 text-gray-recycle text-sm italic overflow-hidden">
                    {specific.lastMessage}
                  </p>
                </div>
              )
            })}
        </div>
      )}
      {!isMessengerVisible && (
        <div className="w-full mt-12 mb-24 bg-white  h-screen md:w-3/4  overflow-scroll  ">
          <button
            onClick={() => {
              setIsMessengerVisible(true)
            }}
            className="  border-dark-blue my-8  "
          >
            <i class="fa-solid fa-chevron-left text-3xl ml-8"></i>{' '}
          </button>
          {messages &&
            messages.map((message) => {
              return message.sender == ownerId ? (
                <div
                  className="my-8 border-t-[1px] border-dark-blue rounded-lg"
                  key={message.id}
                >
                  <div className="flex items-center my-1 ">
                    <img
                      src={ownerAvatar}
                      alt={ownerName}
                      className="!w-14 !h-14 rounded-full object-cover  mx-4"
                    />
                    <p className="text-dark-blue text-center text-sm w-1/2">
                      {ownerName}
                    </p>
                  </div>
                  <p className="text-dark-blue text-center text-sm italic">
                    {message.message}
                  </p>
                </div>
              ) : (
                <div
                  className="border-t-[1px] border-dark-blue rounded-lg"
                  key={message.id}
                >
                  <div className="flex items-center my-1 ">
                    <img
                      src={contactAvatar}
                      alt={message.contact}
                      className="!w-14 !h-14 rounded-full object-cover  mx-4"
                    />
                    <p className="text-dark-blue text-center text-sm w-1/2">
                      {contactName}
                    </p>
                  </div>
                  <p className="text-dark-blue text-center text-sm italic">
                    {message.message}
                  </p>
                </div>
              )
            })}
        </div>
      )}
      <FooterMenu />
    </div>
  )
}
