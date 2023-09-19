import "tailwindcss/tailwind.css"
import React, { FC, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import CanvasDraw from "react-canvas-draw"
import imageData from "../app/images.json"

interface EditComponentProps {
  imageUrl: string
}

const EditComponent: FC<EditComponentProps> = ({ imageUrl }) => {
  const canvasRef = useRef(null)
  const router = useRouter()
  const [editedImageData, setEditedImageData] = useState(imageData)
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const getImageDimensions = async () => {
      const imgElement = document.createElement("img")
      imgElement.src = imageUrl

      imgElement.onload = () => {
        const width = imgElement.width
        const height = imgElement.height
        setImageDimensions({ width, height })
      }
    }

    getImageDimensions()
  }, [imageDimensions, imageUrl])

  const handleSave = () => {
    // @ts-ignore
    const editedImageLink = canvasRef.current?.getDataURL()

    if (editedImageLink) {
      const imageIndex = editedImageData.images.findIndex(
        (image) => image.url === imageUrl
      )

      if (imageIndex !== -1) {
        const updatedImageData = JSON.parse(JSON.stringify(editedImageData))
        updatedImageData.images[imageIndex].edited = true
        updatedImageData.images[imageIndex].updatedimage = editedImageLink
        setEditedImageData(updatedImageData)
        localStorage.setItem(
          "editedImageData",
          JSON.stringify(updatedImageData)
        )
      }
    }

    router.push({
      pathname: "/images",
    })
  }

  let imageHeight: any
  let imageWidth: any

  if (imageDimensions.height > 0) {
    imageHeight = imageDimensions.height
    imageWidth = imageDimensions.width
  }

  return (
    <div className="h-screen max-w-[32em] flex flex-col items-center justify-center gap-4 rounded-[1em] overflow-x-hidden">
      <div className="border-white border-[1px] overflow-x-hidden">
        {
          // @ts-ignore
          <CanvasDraw
            ref={canvasRef}
            imgSrc={imageUrl}
            brushColor="#000"
            canvasHeight={imageHeight && imageHeight}
            canvasWidth={imageWidth && imageWidth}
            style={{ borderRadius: "1em" }}
          />
        }
      </div>
      <button
        className="bg-white color-black px-4 py-1 rounded-[0.5em] hover:scale-110"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  )
}

export default EditComponent
