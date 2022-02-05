import React, {useState} from "react";
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";


const Chat = () => {
        const [input, setInput] = useState("");
        const onSubmitHandler = (e) => {
                e.preventDefault();
                console.log("I am value....", input);
                setInput("");
        }
        return (
                <div className="chat">
                        <div className="chat__header">
                                <Avatar />
                                <div className="chat__headerInfo">
                                        <h3>Room Name</h3>
                                        <p>Last seen 12:45 PM</p>

                                </div>
                                <IconButton><SearchOutlined /></IconButton>
                                <IconButton><AttachFile /></IconButton>
                                <IconButton><MoreVertIcon /></IconButton>
                        </div>
                        <div className="chat__main">
                                <p className="chat__message chat__receiver"><span className="chat__name">Nisha Jakhar</span>Hey Guys<span className="chat__timestamp">3:45 pm</span></p>
                                <p className="chat__message chat__receiver"><span className="chat__name">Nisha Jakhar</span>Hey Guys<span className="chat__timestamp">3:45 pm</span></p>
                                <p className="chat__message"><span className="chat__name">Akshay Jakhar</span>Hola !!!!<span className="chat__timestamp">3:48 pm</span></p>


                        </div>
                        <div className="chat__footer">
                                <IconButton> <InsertEmoticonIcon /></IconButton>
                                <form className="chat__form">
                                        <input value={input} placeholder="Type a message" type="text" onChange={(e)=>{setInput(e.target.value)}}/>
                                        <button className="chat__sendButton" type="submit" onClick={onSubmitHandler}>Send</button>
                                </form>
                                <IconButton><MicIcon /></IconButton>
                        </div>
                </div>
        )
}

export default Chat;
