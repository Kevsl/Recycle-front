import React, { useEffect, useState } from 'react'
import {
  getConversations,
  getMyConversations,
  getSpecificConversation,
} from '../../Service/conversationsService'
import { FooterMenu } from '../FooterMenu'
import { useNavigate } from 'react-router-dom'

export const ConversationOverview = () => {
  const navigate = useNavigate()
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
    getMyConversations(ownerId).then((res) => {
      setConversations(res)
    })
  }, [])

  useEffect(() => {
    getSpecificConversation(contactId).then((res) => {
      setMessages(res)
    })
  }, [contactId])

  return (
    <div className="relative">
      <i
        onClick={() => {
          navigate(-1)
        }}
        className="fa-solid fa-chevron-left text-3xl absolute -top-4 left-8 text-gray-recycle md:hidden"
      ></i>
      <h1 className="text-gray-recycle text-center border-b-2 border-solid border-gray-light pb-4">
        Mes messages
      </h1>
      <div className=" w-full md:justify-around md:mt-4:flex items-start">
        <div className=" w-full h-screen md:w-1/4  overflow-scroll text-ellipsis border-r-2 border-gray-light">
          {conversations &&
            conversations.map((specific) => {
              return (
                <div
                  className="my-2  pb-2   border-b-2  border-gray-light "
                  onClick={() => {
                    setContactId('1O')
                    setContactName(specific.profile)
                    setContactAvatar(specific.avatar)
                  }}
                  key={specific.id}
                >
                  <div className="flex items-center my-1  ">
                    <img
                      src={specific.avatar}
                      alt={specific.profile}
                      className="!w-8 !h-8 ml-6 rounded-full object-cover my-1"
                    />
                    <p className="text-dark-blue text-center text-sm ml-4">
                      {specific.user}
                    </p>
                  </div>
                  <p className=" ml-16 text-gray-recycle text-sm italic overflow-hidden text-ellipsis truncate">
                    {specific.listing}
                  </p>
                </div>
              )
            })}
        </div>
        <div className="w-full mb-24 bg-white  h-screen md:w-3/4  overflow-scroll  ">
          {messages && messages.length > 0 ? (
            messages.map((message) => {
              return message.sender === ownerId ? (
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
            })
          ) : (
            <p className="text-center mt-12 text-gray-recycle"></p>
          )}
        </div>
        <FooterMenu />
      </div>
    </div>
  )
}
