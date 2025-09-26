import { useRef } from "react"
import fileSVG from "/file.svg"

const SendFile = () => {
    const dialogRef = useRef(null)

    const onClickHandler = (_ev: any) => {
        dialogRef.current?.click()
    }
    const fileChangeHandler = (_ev: any) => {
        console.log(_ev.target.files[0].path)
    }

    return (
        <div onClick={onClickHandler} className='flex flex-col items-center w-20 cursor-pointer'>
            <img src={fileSVG} className='w-15' />
            <h1 className='text-white text-xl'>Send file</h1>
            <input type="file" onChange={fileChangeHandler} ref={dialogRef} className="hidden" />
            
        </div>
    )
}

export default SendFile