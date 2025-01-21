import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'

function App() {

  return (
    <div className='App'>
      <header className='bg-primary text-white text-white text-center py-4'>
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput />
        <ChatResponse />
    </div>
  )
}

export default App
