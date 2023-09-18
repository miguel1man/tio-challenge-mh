import { FC } from "react"
import ImageViewer from "./ImageViewer"

interface ImageListProps {
  images: string[]
}

const ImageList: FC<ImageListProps> = ({ images }) => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      {images.map((imageUrl, index) => (
        <article key={index} className="h-full">
          <div className="w-screen h-full">
            <ImageViewer imageUrl={imageUrl} />
          </div>
          <div>
            <button>Edit</button>
            <button>Request Edit</button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ImageList
