const TerminalWindow = (props: any) => {
  return (
    <section className='w-full my-2 h-[320px] border border-gray-800 bg-[#151515]'>
        {
            props.text.map((line: String) => {
                return <p className='text-white'><span className='text-[#9a9a9a] text-[15px]'>16:41:43</span> {line}</p>
            })
        }
    </section>
  )
}

export default TerminalWindow