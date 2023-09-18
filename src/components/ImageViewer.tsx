import { FC, useState } from "react"
import { useRouter } from "next/router"
import imageData from "../app/images.json"

interface ImageViewerProps {
  imageUrl: string
}

const ImageViewer: FC<ImageViewerProps> = ({ imageUrl }) => {
  // TODO: Replace setEditedImage with new generated image url
  const [editedImage, setEditedImage] = useState<string>("")
  const router = useRouter()
  const buttonStyle = "bg-white text-black px-4 py-1 mx-2"

  const handleEdit = () => {
    router.push({
      pathname: "/editor",
      query: { imageUrl },
    })
  }

  const imageIndex = imageData.images.findIndex(
    (image) => image.url === imageUrl
  )
  const originalUrl = imageData.images[imageIndex].url

  const updatedImage = imageData.images[imageIndex].edited

  if (updatedImage) {
    setEditedImage(imageData.images[imageIndex].editedimage)
  }
  console.log(imageData)

  return (
    <section className="flex flex-col items-center gap-4">
      <div style={{ backgroundImage: `url(${originalUrl})` }}>
        <img
          src={updatedImage ? editedImage : imageUrl}
          alt="Edited Image"
          className="object-contain w-full h-full"
        />
      </div>
      <div>
        <button className={buttonStyle} onClick={handleEdit}>
          Edit
        </button>
        <button className={buttonStyle}>Request edit</button>
      </div>
    </section>
  )
}

export default ImageViewer
