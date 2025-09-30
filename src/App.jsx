import { Card } from "./components/Card/Card"
import './App.css'
import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"
import { useState } from "react"


function App() {
  const [password, setPassword] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
    if (password === "password") {
    alert("Password Deleted Successfully!");
    } else {
      alert("Incorrect Password. Please try again.");
    }
    setPassword("");
  }
  return (
    <div className="main">
      <Card variant="shadow">
        <div className="card-header">Password Delete</div>
        <p>Please enter <span style={{ color: "#ff0000" }}>"password"</span> to delete!</p>
        <Input placeholder="Enter your password" className="card-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="danger" className="card-button" onClick={handleDelete}>Delete</Button>
        <div className="card-footer">Last Password update: Today</div>
      </Card>
    </div>
  )
}

export default App
