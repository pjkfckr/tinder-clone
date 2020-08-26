import React, { useState } from "react";


function ChatScreen() {
    const [message, setMessage] = useState([
        {
            name: 'Park',
            image: '...',
            message: 'Whwhwhwhats up'
        }
    ])
    return (
        <div>
            <p>You matched with park on 10/11/20</p>
        </div>
    );
}

export default ChatScreen

