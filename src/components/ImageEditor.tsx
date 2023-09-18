import "tailwindcss/tailwind.css"
import React, { useRef, useState } from "react"
import CanvasDraw from "react-canvas-draw"
import imageData from "../app/images.json"

interface EditComponentProps {
  imageUrl: string
}

const EditComponent: React.FC<EditComponentProps> = ({ imageUrl }) => {
  const canvasRef = useRef(null)
  const [editedImageData, setEditedImageData] = useState(imageData)

  const handleSave = () => {
    // @ts-ignore
    const editedImageLink = canvasRef.current?.getDataURL()

    if (editedImageLink) {
      const imageIndex = editedImageData.images.findIndex(
        (image) => image.url === imageUrl
      )

      if (imageIndex !== -1) {
        // Crear una copia profunda del estado
        const updatedImageData = JSON.parse(JSON.stringify(editedImageData))

        // Actualizar el campo "editedimage" en el elemento correspondiente
        updatedImageData.images[imageIndex].editedimage = editedImageLink

        // Actualizar el estado con la nueva información
        setEditedImageData(updatedImageData)
        console.log("Updated Image Data:", updatedImageData)
      }
    }
  }

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-4">
      {
        // @ts-ignore
        <CanvasDraw ref={canvasRef} imgSrc={imageUrl} brushColor="#000" />
      }
      <button className="bg-white color-black p-4" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}

export default EditComponent
