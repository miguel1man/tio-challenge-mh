import React, { useRef } from "react"
import CanvasDraw from "react-canvas-draw"

const EditorPage = () => {
  const canvasRef = useRef(null)
  const handleClick = () => {
    // @ts-ignore
    const imageLink = canvasRef.current?.getDataURL()
    imageLink && console.log("Link:", imageLink)
  }

  return (
    <>
      <p>Editor</p>
      <CanvasDraw
        ref={canvasRef}
        imgSrc="https://plus.unsplash.com/premium_photo-1663054378169-8ffea2e11c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <button onClick={handleClick}>Save</button>
    </>
  )
}

export default EditorPage
