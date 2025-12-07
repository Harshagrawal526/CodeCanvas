import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/codemirror.css'
import Index from './Index'

createRoot(document.getElementById('root')).render(
    <Index />,
)
