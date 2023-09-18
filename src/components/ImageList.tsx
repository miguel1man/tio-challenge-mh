import { FC } from "react"

interface ImageListProps {
  images: string[]
}

const ImageList: FC<ImageListProps> = ({ images }) => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      {images.map((imageUrl, index) => (
        <article key={index} className="h-full">
          <div className="w-screen h-full">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="object-cover w-screen max-w-screen h-full"
            />
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
