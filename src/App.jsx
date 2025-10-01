import './App.css'
import { Avatar } from "./components/Avatar/Avatar"
import "./styles/settings.css" // ! Global variables DO NOT DELETE 
import Logo from "./assets/react.svg"



function App() {
  return (
    <div className="main">
      <Avatar src={Logo} alt="React Logo" r="50%" w="100px" h="100px" />
    </div>
  )
}

export default App
