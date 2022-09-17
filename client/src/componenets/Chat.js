import { useState } from 'react'
import Header from "./header"
import Footer from "./Footer"

/*
const buttonHere = document.getElementsByClassName("s-button");
const message = document.getElementsByClassName("user-input");
const bodyOfMessage = document.getElementsByClassName("prev-messages");
buttonHere.addEventListener(() => {
        let cardElement = document.createElement("div");
        cardElement.innerHTML = `<div classMessage="message-text"> ${message.text}</div>`
        bodyOfMessage.appendChild(cardElement);
})
*/

const Chat = () => {

    return (
        <div className='chat-container raise-box'>
            <Header />
            <div className="prev-messages"></div>
            <div className='input'>
                <form>
                    <input type="text" className="user-input" placeholder="message..."></input>
                    <button className="s-button">Submit</button>
                </form>
                <Footer />
            </div>
        </div>
    )
}

export default Chat;
