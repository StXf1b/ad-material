import './App.css'
import "./styles/settings.css" // ! Global variables DO NOT DELETE
import { Modal } from "./components/Modal/Modal" 
import { useState } from 'react';
import {Button} from "./components/Button/Button"
import { RiErrorWarningFill } from "react-icons/ri";
import { MdInfo } from "react-icons/md";
import { Loader, LoaderBouncing } from "./components/Loader/Loader";
import { Tooltip } from "./components/Tooltip/Tooltip"


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="main">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={open}
        icon={<MdInfo size={24} color="#007bff" />}
        onClose={() => setOpen(false)}
        title={"Please confirm your action!"}
        footer={
          <>
            <Button onClick={() => {setOpen(false); console.log("Confirmed");}}>Confirm</Button>
            <Button variant='danger' style={{ marginLeft: '8px' }} onClick={() => {setOpen(false); console.log("Cancelled");}}>Cancel</Button>
          </>
        }>
        <p>Are you sure you want to proceed?</p>
        <p>This action cannot be undone.</p>
      </Modal>
      <Tooltip text="This is a tooltip!" position="top">
        <Button>Hover me (top)</Button>
      </Tooltip>
    </div>
  )
}

export default App
