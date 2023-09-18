import "tailwindcss/tailwind.css"
import React, { useRef } from "react"
import CanvasDraw from "react-canvas-draw"

interface EditorPageProps {
  imageUrl: string
}

const EditorPage: React.FC<EditorPageProps> = ({ imageUrl }) => {
  const canvasRef = useRef(null)
  const handleClick = () => {
    // @ts-ignore
    const imageLink = canvasRef.current?.getDataURL()
    imageLink && console.log("Link:", imageLink)
  }

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-4">
      {
        // @ts-ignore
        <CanvasDraw ref={canvasRef} imgSrc={imageUrl} brushColor="#000" />
      }
      <button className="bg-white color-black p-4" onClick={handleClick}>
        Save
      </button>
    </div>
  )
}

export default EditorPage
