import React from "react";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Park"
                message="Whats up!"
                timestamp="40 seconds ago"
                profilePic="https://cdn.pixabay.com/photo/2016/05/26/12/24/person-1417046_960_720.png 1x, https://cdn.pixabay.com/photo/2016/05/26/12/24/person-1417046_1280.png 1.778x"
            />
            <Chat
                name="yennie"
                message="Whats up!"
                timestamp="10 seconds ago"
                profilePic="..."
            />
            <Chat
                name="sangyeong"
                message="Whats up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Daehwi"
                message="Hey, whats doing now!"
                timestamp="25 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Park"
                message="Whats up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
        </div>
    );
}

export default Chats;

