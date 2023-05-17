import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoApp from './ToDoApp.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
)
