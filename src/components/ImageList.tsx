import "tailwindcss/tailwind.css"
import { FC } from "react"
import ImageViewer from "./ImageViewer"

interface ImageListProps {
  images: string[]
}

const ImageList: FC<ImageListProps> = ({ images }) => {
  return (
    <section className="max-w-[32em] gap-8">
      {images.map((imageUrl, index) => (
        <article key={index} className="flex flex-col items-center gap-4 pb-8">
          <ImageViewer imageUrl={imageUrl} />
        </article>
      ))}
    </section>
  )
}

export default ImageList
