import arrowSVG from "/arrowdown.svg"
import styles from "./COMPortSelect.module.css"
import { useState } from "react"

const COMPortSelect = () => {

    const [isOpened, setIsOpened] = useState(false)

    const onClickHandler = (_ev: any) => {
        _ev.preventDefault()
        setIsOpened(!isOpened)
    }

    return (
        <div className="bg-[#151515]">
            {!isOpened ? 
            <div onClick={onClickHandler} className="absoule select-none flex align-middle justify-between w-50 py-1 px-3 border border-gray-800 cursor-pointer min-h-[39px]">
                <p className="text-white text-xl"></p>
                <img className="w-4" src={arrowSVG} />
            </div>
            : 
            <div onClick={onClickHandler} className="absoule select-none flex align-middle justify-between w-50 py-1 px-3 border border-gray-800 cursor-pointer min-h-[39px]">
                <p className="text-white text-xl"></p>
                <img className="w-4 rotate-180" src={arrowSVG} />
            </div>}
            {
            isOpened && <div className="bg-[#151515] absolute border border-gray-800 w-50 mt-0.5">
                <p className="text-center text-white">No ports found</p>
            </div>
            }
        </div>
    )
}

export default COMPortSelect