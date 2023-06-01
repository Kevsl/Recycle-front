import React, { useEffect, useState } from 'react'
import {
  getConversations,
  getMyConversations,
  getSpecificConversation,
} from '../../Service/conversationsService'
import { FooterMenu } from '../FooterMenu'
import { useNavigate } from 'react-router-dom'
import { dateTranslator } from '../../Utils/tools'
import { useLocation } from 'react-router-dom'

export const ConversationOverview = () => {
  const navigate = useNavigate()
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const ownerId = localStorage.getItem('id')
  const ownerAvatar = localStorage.getItem('avatar')
  const ownerName = localStorage.getItem('username')
  const [contactName, setContactName] = useState('')
  const [contactAvatar, setContactAvatar] = useState('')
  const [conversationId, setConversationId] = useState('')
  const [isMessagesVisible, setIsMessagesVisible] = useState(false)
  const { state } = useLocation()

  useEffect(() => {
    getMyConversations(ownerId).then((res) => {
      setConversations(res.conversations)
    })
  }, [])

  useEffect(() => {
    getSpecificConversation(conversationId).then((res) => {
      setMessages(res)
    })
  }, [conversationId])

  return (
    <div className="relative">
      <i
        onClick={() => {
          setIsMessagesVisible(false)
        }}
        className="fa-solid fa-chevron-left text-3xl absolute -top-4 left-8 text-gray-recycle "
      ></i>
      <h1 className="text-gray-recycle text-center border-b-2 border-solid border-gray-light pb-4">
        Mes messages
      </h1>
      <div className=" w-fullmd:mt-4: md:flex md:items-start md:justify-start">
        <div
          className={`w-full  md:w-1/3  overflow-scroll text-ellipsis md:border-r-2 border-gray-light`}
        >
          <div className={` ${isMessagesVisible && 'invisible md:visible'}`}>
            {conversations.length > 0 &&
              conversations.map((specific) => {
                return (
                  <div
                    className={` pb-4  border-b-2  border-gray-light ${
                      conversationId === specific.conversationId &&
                      'bg-gray-light'
                    } `}
                    onClick={() => {
                      setConversationId(specific.conversationId)
                      setIsMessagesVisible(true)
                    }}
                    key={specific.conversationId}
                  >
                    <div className="flex items-center my-px  ">
                      <img
                        src={specific.listingCoverImage}
                        alt={specific.fkListingTitle}
                        className="!w-8 !h-8 ml-6 rounded-full object-cover my-1"
                      />
                      <p className="text-dark-blue text-center text-sm ml-4">
                        {specific.fkListingTitle}
                      </p>
                    </div>
                    <p className=" ml-16 text-gray-recycle text-sm italic overflow-hidden text-ellipsis truncate">
                      {specific.latestMessageContent}
                    </p>
                    <p className=" ml-16 text-gray-recycle text-sm italic overflow-hidden text-ellipsis truncate">
                      {dateTranslator(specific.latestMessageCreatedAt.date)}
                    </p>
                  </div>
                )
              })}
            <div
              className={`py-2  pb-2   border-b-2  border-gray-light ${
                conversationId === state.id && 'bg-gray-light'
              } `}
              onClick={() => {
                setConversationId(state.id)
                setIsMessagesVisible(true)
              }}
            >
              <div className="flex items-center my-px  ">
                <img
                  src={state.image}
                  alt={state.title}
                  className="!w-8 !h-8 ml-6 rounded-full object-cover my-1"
                />
                <p className="text-dark-blue text-center text-sm ml-4">
                  {state.title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pb-24 bg-white  md:w-2/3  overflow-scroll pt-8 border-l-2 border-gray-light ${
            !isMessagesVisible && 'invisible  md:visible'
          }`}
        >
          {messages.messagesList && messages.messagesList.length > 0 ? (
            messages.messagesList.map((message) => {
              return message.sender == ownerId ? (
                <div className="my-8 rounded-lg" key={message.id}>
                  <div className="flex items-center justify-end my-1 ">
                    {/* <img
                      src={ownerAvatar}
                      alt={ownerName}
                      className="!w-14 !h-14 rounded-full object-cover  mx-4"
                    /> */}
                  </div>
                  <p className="flex items-center justify-end my-4">
                    <span className="text-white -mt-2 py-2 text-sm italic text-end rounded-lg px-4 bg-green-recycle -mb-2 mx-4 ">
                      {message.content}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="rounded-lg" key={message.id}>
                  <div className="flex items-center my-1 ">
                    {/* <img
                      src={contactAvatar}
                      alt={message.contact}
                      className="!w-14 !h-14 rounded-full object-cover  mx-4"
                    /> */}
                  </div>
                  <p className="flex items-center justify-start my-4">
                    <span className="text-dark-blue -mt-2 py-2 text-sm italic text-start rounded-lg px-4 bg-gray-light -mb-2 mx-4 mr-32">
                      {message.content}
                    </span>
                  </p>
                </div>
              )
            })
          ) : (
            <p className="text-center mt-12 text-gray-recycle"></p>
          )}
          <div className="flex items-center justify-between md:absolute md:bottom-0 md:w-2/3 w-full  ">
            <input
              type="text"
              className=" border border-solid border-gray-light w-full rounded-xl mx-4 h-12 px-4"
            />
            <span>
              <p className="relative">
                <i className="fa-solid fa-paper-plane w-6 h-6 text-dark-blue absolute -bottom-4 right-8 "></i>
              </p>
            </span>
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  )
}
