import './App.css';
import io from 'socket.io-client'
import nanoid from 'nanoid'
import {useState,useEffect} from 'react'

const socket = io.connect('http://localhost:5000') 

function App() {

  const [message, setMessage] = useState("")
  const[chat,setChat] = useState([])

  const sendChat = (e)=>{
    e.preventDefault()
    socket.emit("chat",{message})
    setMessage('')
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Chat App</h1>
          <form onSubmit={sendChat}>
            <input type="text" name='chat' placeholder='send text' value={message} onChange={(e)=>{
                setMessage(e.target.value)
            }}
            />
            <button type='submit'>send</button>
          </form>
      </header>
    </div>
  );
}

export default App;
