// components/ImageViewer.tsx
import { FC, useState } from "react"

interface ImageViewerProps {
  imageUrl: string
}

const ImageViewer: FC<ImageViewerProps> = ({ imageUrl }) => {
  const [editing, setEditing] = useState(false)
  const [editedImage, setEditedImage] = useState<string | null>(null)

  const handleEditClick = () => {
    // Implement your image editing logic here
    // Set the edited image URL in the state
    setEditing(true)
  }

  const handleSaveClick = () => {
    // Save the edited image URL
    // Implement your logic to save the edited image
    setEditing(false)
  }

  return (
    <div className="w-full h-full">
      {editing ? (
        <div>
          {/* Display the edited image or editing tools */}
          <img
            src={editedImage || imageUrl}
            alt="Edited Image"
            className="object-contain w-full h-full"
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          {/* Display the original image */}
          <img
            src={imageUrl}
            alt="Original Image"
            className="object-contain w-full h-full"
          />
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default ImageViewer
