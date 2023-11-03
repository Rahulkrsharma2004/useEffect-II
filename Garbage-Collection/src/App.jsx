// src/App.jsx
import { useState } from "react"
import "./App.css"
import Timer from "./components/Timer"

function App() {
  const [hide, setHide] = useState(true);

  return (
    <>
      {hide ? <Timer /> : null}
      <button onClick={() => setHide(!hide)}>
        {hide ? 'Hide Timer' : 'Show Timer'}
      </button>

    </>
  )
}

export default App