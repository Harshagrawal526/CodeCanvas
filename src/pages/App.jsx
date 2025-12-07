import React from 'react'
import { useState, useEffect } from 'react';
import Editor from '../components/Editor'
import useLocalStorage from '../hooks/useLocalStorage';
import img from '../assets/img.svg'
import { Link } from 'react-router-dom'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div>
      <div className='bg-orange-400/70 p-2 text-2xl font-medium flex justify-between'>
        <div className='cursor-pointer'>
          <Link className='flex' to='/'>
            <div>
              <img src={img} className='h-[30px] rounded-[1px]' alt='logo' />
            </div>

            <div className='px-2'>
              CodeCanvas
            </div>
          </Link>
        </div>

        <div className='ml-auto px-3'>
          <button className='text-black  hover:text-[#787a7c] transition-colors duration-300 cursor-pointer'>
            <Link to="/">Go To Home</Link>
          </button>
        </div>

      </div>

      <div className="h-[50vh] flex bg-[#afb7cc]">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div >
      <div className='bg-orange-400 text-center border-[#e5e7eb]  border-4 rounded-xl text-xl '>OUTPUT</div>
      <div className="h-[50vh] flex">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default App;