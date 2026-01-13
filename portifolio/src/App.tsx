import { Header } from './sections/Header'
import { About } from './sections/About'
import { useEffect } from 'react'
import './App.css'
import { Experience } from './sections/Experience'
import { Project } from './sections/Project'
import { Contact } from './sections/Contact'

function App() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <body className='app'>
        <Header></Header>

        <About></About>

        <Experience></Experience>

        <Project></Project>
        
        <Contact></Contact>
      </body>
    </>
  )
}

export default App
