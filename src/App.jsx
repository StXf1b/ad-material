import { Card } from "./components/Card/Card"
import './App.css'
import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"

function App() {


  return (
    <div className="main">
      <Card variant="shadow">
        <div className="card-header">User Profile</div>
        <p>Hello! This is a basic card with some content.</p>
        <Input placeholder="Enter your name" className="card-input" />
        <Button variant="primary" className="card-button">Submit</Button>
        <div className="card-footer">Last updated: Today</div>
      </Card>
    </div>
  )
}

export default App
