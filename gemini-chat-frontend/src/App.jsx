import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './components/services/api';

function App() {

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (err) {
        alert("Failed to get response!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-4">
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} />
        {loading && <h3 className='content-center'>loading...</h3>}
        <ChatResponse response={response} />
    </div>
  )
}

export default App
