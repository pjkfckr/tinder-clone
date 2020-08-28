import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Park',
            image: '...',
            message: 'Whwhwhwhats up'
        },
        {
            name: "Park",
            image: '...',
            message: 'good?'
        },
        {
            name: "Yennie",
            image: '..',
            message: 'fine'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                You Matched With park
            </p>
            {message.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}
            <div className="chatScreen__inputField">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="메세지를 입력해주세요."
                        type="text"
                    />
                    <button
                        onClick={handleSend}
                        type="submit"
                        className="chatScreen__inputButton">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen

