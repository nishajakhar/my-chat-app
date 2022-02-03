import { Avatar } from "@material-ui/core";
import React from "react";
import './SidebarChat.css';
const SidebarChat = () => {
        return (
                <div className="sidebarChat">
                      <Avatar src="https://avatars.dicebear.com/api/human/ghghhuftvggtf.svg"/>
                      <div className="sidebarChat__info">
                          <h2>Room Name</h2>
                          <p>Last message will be here...</p>
                      </div>
                </div>
        )
}

export default SidebarChat;
