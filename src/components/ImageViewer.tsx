import { FC, useState, useEffect } from "react"
import { useRouter } from "next/router"
import imageData from "../app/images.json"
import Modal from "./Modal"

interface ImageViewerProps {
  imageUrl: string
}

const ImageViewer: FC<ImageViewerProps> = ({ imageUrl }) => {
  const router = useRouter()
  const buttonStyle = "bg-white text-black px-4 py-1 mx-2 rounded-[0.5em]"

  const [isOpen, setIsOpen] = useState(false)

  const handleRequest = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const [initialEditedImageData, setInitialEditedImageData] =
    useState<any>(imageData)

  let savedEditedImageData: any
  useEffect(() => {
    if (typeof window !== "undefined") {
      savedEditedImageData = localStorage.getItem("editedImageData")
      if (savedEditedImageData) {
        setInitialEditedImageData(JSON.parse(savedEditedImageData))
      }
    }
  }, [])

  const handleEdit = () => {
    router.push({
      pathname: "/editor",
      query: { imageUrl },
    })
  }

  const imageIndex = initialEditedImageData.images.findIndex(
    (image: any) => image.url === imageUrl
  )
  const originalUrl = initialEditedImageData.images[imageIndex].url
  const isEditedImage = initialEditedImageData.images[imageIndex].edited
  const updatedUrl = initialEditedImageData.images[imageIndex].updatedimage

  return (
    <section className="flex flex-col items-center gap-4">
      <div
        className="border-white border-[1px] rounded-[1em]"
        style={{ backgroundImage: `url(${originalUrl})` }}
      >
        <img
          src={isEditedImage ? updatedUrl : imageUrl}
          alt="Edited Image"
          className="object-contain w-full h-full rounded-[1em]"
        />
      </div>
      <div>
        <button className={buttonStyle} onClick={handleEdit}>
          Edit
        </button>
        <button className={buttonStyle} onClick={handleRequest}>
          Request edit
        </button>
      </div>
      <Modal
        id={imageUrl}
        isOpen={isOpen}
        onClose={closeModal}
        onSave={() => {
          console.log("saved")
        }}
        updatedImage={updatedUrl}
      />
    </section>
  )
}

export default ImageViewer
