import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/main.css'
import { RecruitApp } from './components/RecruitApp'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecruitApp />
    </StrictMode>,
)
