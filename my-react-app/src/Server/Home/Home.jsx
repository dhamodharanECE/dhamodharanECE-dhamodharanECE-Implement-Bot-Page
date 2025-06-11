import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import BotInputChat from '../BotInputChat/BotInputChat';
import data from '../../Clint/FetchData.json';
import Navbar from '../Navbar/Navbar';
import InputChat from '../InputChat/InputChat';
import BotInput from '../BotInput/BotInput';
import Feedback from '../Feedback/Feedback';
import { useContext } from 'react';
import { ThemeLight } from '../Theme/ThemeLight';





export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const listRef = useRef(null)
    const [chatId, setChatId] = useState(1)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [scrollToBottom, setScrollToBottom] = useState(false)
    const { chat, setChat } = useOutletContext();
    const { mode } = useContext(ThemeLight)

    // GENERATING AI RESPONSE
    const generateResponse = (input) => {

        const response = data.find(item => input.toLowerCase() == item.question.toLowerCase())

        let answer = "Sorry, Did not understand your query!"

        if (response != undefined) {
            answer = response.response
        }

        setChat(prev => ([...prev,
        {
            type: 'Human',
            text: input,
            time: new Date(),
            id: chatId
        },
        {
            type: 'AI',
            text: answer,
            time: new Date(),
            id: chatId + 1
        }
        ]))

        setChatId(prev => prev + 2)

    }

    //AUTOSCROLL TO LAST ELEMENT
    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView()
    }, [scrollToBottom])

    return (
        <Stack
            height={'70vh'}
            justifyContent={'space-between'}
            sx={{
                '@media (max-width:767px)': {
                    background: mode == 'light' ? 'linear-gradient(#F9FAFA 60%, #EDE4FF)' : ''
                }
            }}
        >

            <Navbar />

            {chat.length == 0 && <InputChat generateResponse={generateResponse} />}

            {chat.length > 0 && (
                <Stack
                    height={1}
                    flexGrow={0}
                    p={{ xs: 2, md: 3 }}
                    spacing={{ xs: 2, md: 3 }}
                    sx={{
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '10px',
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                            borderRadius: '8px'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(151, 133, 186,0.4)',
                            borderRadius: '8px'
                        }
                    }}
                    ref={listRef}
                >
                    {chat.map((item, index) => (
                        <BotInputChat
                            details={item}
                            key={index}
                            updateChat={setChat}
                            setSelectedChatId={setSelectedChatId}
                            showFeedbackModal={() => setShowModal(true)}
                        />
                    ))}
                </Stack>
            )}

            <BotInput generateResponse={generateResponse} setScroll={setScrollToBottom} chat={chat} clearChat={() => setChat([])} />

            <Feedback open={showModal} updateChat={setChat} chatId={selectedChatId} handleClose={() => setShowModal(false)} />
        </Stack>
    )

}