import { useState } from "react";

const ChatInput = () => {
    const [question, setQuestion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/qna/");
            const data = res.json();
        } catch (err) {
            console.err(err)
        }
    }

    return (
        <div className="container my-4">
            <div onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Ask a question</label>
                    <input type="text"
                        className="form-control"
                        id="question"
                        placeholder="Enter your question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </div>
        </div>
    )
}

export default ChatInput;