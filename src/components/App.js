import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
const App = () => {
        return (
                <div className="app">
                        <h1>Whatsapp Clone</h1>
                        <div className="app__body">
                                <Sidebar />
                                <Chat />
                        </div>
                </div>
        )
}

export default App;
