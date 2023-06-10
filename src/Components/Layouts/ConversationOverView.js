import React, { useEffect, useState, useRef } from 'react'
import {
  getMyConversations,
  getSpecificConversation,
  sendFirstMessage,
  sendMessage,
} from '../../Service/conversationsService'
import { FooterMenu } from './FooterMenu'
import { useNavigate } from 'react-router-dom'
import { dateTranslator } from '../../Utils/tools'
import { useLocation } from 'react-router-dom'
import { Triangle } from 'react-loader-spinner'

export const ConversationOverview = () => {
  const navigate = useNavigate()
  const [conversations, setConversations] = useState({})
  const [messages, setMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const ownerId = Number(localStorage.getItem('id'))
  const [recipientId, setRecipientId] = useState('')
  const [conversationId, setConversationId] = useState('')
  const [isMessagesVisible, setIsMessagesVisible] = useState(false)
  const [isConvLoading, setIsConvLoading] = useState(false)
  const [isMsgLoading, setIsMsgLoading] = useState(false)
  const { state } = useLocation()
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setIsConvLoading(true)
    getMyConversations(ownerId).then((res) => {
      setConversations(res.conversations)
      setIsConvLoading(false)
    })
  }, [])

  useEffect(() => {
    if (conversationId) {
      fetchSingleConversation()
      setIsMsgLoading(false)
    }
  }, [conversationId])

  function fetchSingleConversation() {
    setIsMsgLoading(true)

    getSpecificConversation(conversationId).then((res) => {
      setMessages(res)
      if (conversationId) {
        setRecipientId(res.messagesList[0].recipient)
      } else if (conversationId.length > 0 && res.messagesList) {
        setRecipientId(res.messagesList[0].sender)
      }
    })
  }

  useEffect(() => {
    const intervalId = setInterval(setConversationId(conversationId), 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  function handleRefreshPage() {
    if (conversationId) {
      setIsMsgLoading(true)

      fetchSingleConversation()
      setCurrentMessage('')

      setIsMsgLoading(false)
    }
  }

  function handleNewConversation(id, firstMessage) {
    if (id && firstMessage) {
      sendFirstMessage(id, firstMessage)
    }
  }

  function handleNewMessage(
    fkConversation,
    fkUserSender,
    fkUserRecipient,
    content
  ) {
    if (fkConversation && content && fkUserSender && fkUserRecipient) {
      sendMessage(fkConversation, fkUserSender, fkUserRecipient, content)
      handleRefreshPage()
      setCurrentMessage('')
    }
  }
  useEffect(() => {
    if (state.newMessage) {
      setIsMessagesVisible(true)
    }
  }, [])
  function handleSubmit() {
    if (state.newMessage === true) {
      handleNewConversation(state.id, currentMessage)
      state.newMessage = false
      navigate('/profil', {
        state: {
          newMessage: false,
        },
      })
      setCurrentMessage('')
    } else {
      handleNewMessage(conversationId, ownerId, recipientId, currentMessage)

      handleRefreshPage()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="relative -pt-4">
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
          className={`w-full  md:w-1/3  overflow-scroll text-ellipsis md:border-r-2 border-gray-light h-55`}
        >
          <div
            className={` ${
              isMessagesVisible && !state.newMessage && 'invisible md:visible'
            } h-55 md:h-80`}
          >
            {isConvLoading ? (
              <div className="flex items-center justify-center w-full mt-48">
                <Triangle
                  color="#91C788"
                  aria-label="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                  width="80"
                  height="80"
                />
              </div>
            ) : conversations ? (
              Object.keys(conversations).map((conversation) => {
                return (
                  <div
                    className={` pb-4  border-b-2  border-gray-light cursor-pointer ${
                      state.newMessage && 'invisible md:visible'
                    }  ${
                      conversationId ==
                        conversations[conversation].conversationId &&
                      'bg-gray-light'
                    } `}
                    onClick={() => {
                      setIsMsgLoading(true)

                      setConversationId(
                        conversations[conversation].conversationId
                      )
                      setIsMessagesVisible(true)
                    }}
                    key={conversations[conversation].conversationId}
                  >
                    <div className="flex items-center my-px  ">
                      <img
                        src={conversations[conversation].listingCoverImage}
                        alt={conversations[conversation].fkListingTitle}
                        className="!w-8 !h-8 ml-6 rounded-full object-cover my-1"
                      />
                      <p className="text-dark-blue text-center text-sm ml-4">
                        {conversations[conversation].fkListingTitle}
                      </p>
                    </div>
                    <p className=" ml-16 text-gray-recycle text-sm italic overflow-hidden text-ellipsis truncate">
                      {conversations[conversation].latestMessageContent}
                    </p>
                    <p className=" ml-16 text-gray-recycle text-sm italic overflow-hidden text-ellipsis truncate">
                      {dateTranslator(
                        conversations[conversation].latestMessageCreatedAt.date
                      )}
                    </p>
                  </div>
                )
              })
            ) : (
              <p
                className={`text-center   ${
                  state.newMessage ? 'invisible' : 'mt-32'
                }`}
              >
                Pas de conversations actuellement.
              </p>
            )}
            {state.id && state.newMessage === true && (
              <div
                className={` pb-4  border-b-2  border-gray-light cursor-pointer  ${
                  conversationId == state.id && 'bg-gray-light'
                } `}
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
            )}
          </div>
        </div>
        <div
          className={`w-full pb-24 bg-white  md:w-2/3  overflow-scroll md:h-80 pt-8 border-l-2 border-gray-light ${
            !isMessagesVisible && 'invisible  md:visible'
          }`}
        >
          {isMsgLoading ? (
            <div className="flex items-center justify-center w-full mt-32 h-64 bg-red overflow-scroll">
              <Triangle
                color="#91C788"
                aria-label="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                width="80"
                height="80"
              />
            </div>
          ) : messages.messagesList && !isMsgLoading ? (
            messages.messagesList.map((message) => {
              return message.sender == ownerId ? (
                <div className="my-8 rounded-lg" key={message.id}>
                  <div className="flex items-center justify-end my-1 "></div>
                  <p className="flex items-center justify-end my-4">
                    <span className="text-white -mt-2 py-2 text-sm italic text-end rounded-lg px-4 bg-green-recycle -mb-2 mx-4 ">
                      {message.content}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="rounded-lg" key={message.id}>
                  <div className="flex items-center my-1 "></div>
                  <p className="flex items-center justify-start my-4">
                    <span className="text-dark-blue -mt-2 py-2 text-sm italic text-start rounded-lg px-4 bg-gray-light -mb-2 mx-4 mr-32">
                      {message.content}
                    </span>
                  </p>
                </div>
              )
            })
          ) : (
            !state.newMessage && (
              <p className="text-center mt-12 text-gray-recycle">
                Pas de messages
              </p>
            )
          )}
          <div className="flex items-center justify-between md:absolute md:bottom-0 md:w-2/3 w-full  ">
            <input
              type="text"
              value={currentMessage}
              className=" border border-solid border-gray-light w-full rounded-xl mx-4 h-12 px-4"
              onChange={(e) => {
                setCurrentMessage(e.target.value)
              }}
              onKeyDown={handleKeyDown}
              id="textInput"
            />
            <span>
              <p className="relative">
                <i
                  className="fa-solid fa-paper-plane w-6 h-6 text-dark-blue absolute -bottom-4 right-8 "
                  onClick={() => {
                    handleSubmit()
                  }}
                ></i>
              </p>
            </span>
          </div>
          <div ref={messagesEndRef} />
        </div>
        <FooterMenu />
      </div>
    </div>
  )
}
