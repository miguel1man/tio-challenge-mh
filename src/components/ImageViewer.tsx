// components/ImageViewer.tsx
import { FC, useState } from "react"
import { useRouter } from "next/router"

interface ImageViewerProps {
  imageUrl: string
}

const ImageViewer: FC<ImageViewerProps> = ({ imageUrl }) => {
  const [editedImage, setEditedImage] = useState<string | null>(null)
  const router = useRouter()

  const handleEdit = () => {
    router.push({
      pathname: "/editor",
      query: { imageUrl },
    })
  }

  return (
    <main className="flex flex-col items-center gap-4">
      <img
        src={editedImage || imageUrl}
        alt="Edited Image"
        className="object-contain w-full h-full"
      />
      <button className="bg-white text-black p-4" onClick={handleEdit}>
        Edit
      </button>
    </main>
  )
}

export default ImageViewer
