import React, { useState } from "react"
import imageData from "../app/images.json"

interface ModalProps {
  id: string
  isOpen: boolean
  onClose: () => void
  onSave: (text: string) => void
  updatedImage: string
}

const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  onSave,
  updatedImage,
}) => {
  const [text, setText] = useState("")
  const imageIndex = imageData.images.findIndex((image) => image.url === id)

  const handleSave = () => {
    onSave(text)

    if (imageIndex !== -1) {
      const updatedImageData = JSON.parse(JSON.stringify(imageData))
      updatedImageData.images[imageIndex].request = text

      const selectedImage = {
        originalImage: id,
        request: text,
        erasedPixels: updatedImage,
      }

      localStorage.setItem("editedImageData", JSON.stringify(updatedImageData))
      const jsonData = JSON.stringify(selectedImage, null, 2)
      const blob = new Blob([jsonData], { type: "application/json" })
      const url = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = "requestEdit.json"
      document.body.appendChild(a)
      a.click()

      URL.revokeObjectURL(url)
      document.body.removeChild(a)
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-30"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="p-4">
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Write your request..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="mt-4 flex justify-end">
            <button
              className="mr-2 px-4 py-2 bg-primary text-dark rounded hover:bg-dark hover:text-primary"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-dark rounded hover:bg-dark hover:text-primary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
