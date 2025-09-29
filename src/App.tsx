import { useState } from 'react'
import reloadSVG from "/reload.svg"
import COMPortSelect from './components/COMPortSelect'
import SendFile from './components/SendFile'
import TerminalWindow from './components/TerminalWindow'


function App() {
  const [terminalText, setTerminaText] = useState([])

  window.ipcRenderer.on("terminal-text", (event: any, args: String) => {
    setTerminaText([...terminalText, args])
  })

  return (
    <div className='px-2.5 py-1.5'>
      <section className='flex'>
        <COMPortSelect />
        <button className='ml-2 w-24 border bg-[#151515] border-gray-800 text-white cursor-pointer'>Connect</button>
        <button className='ml-2 w-11 border bg-[#151515] border-gray-800 flex justify-center cursor-pointer items-center'>
          <img className='w-5 items-center' src={reloadSVG} />
        </button>
      </section>
      <TerminalWindow text={terminalText} />
      <section className='mt-5'>
        <SendFile />
      </section>
      <p className='text-[10px] absolute bottom-1.5 text-white'>0 device's found.</p>
    </div>
  )
}

export default App
