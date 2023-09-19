import { NextPage } from "next"
import ImageList from "../components/ImageList"
import imageData from "../app/images.json"

type jsonData = {
  url: string
  edited: boolean
}

const imagesList: NextPage = () => {
  const urls: string[] = imageData.images.map((image: jsonData) => image.url)

  return (
    <main className="flex flex-col items-center px-8 bg-primary">
      <h1 className="text-h1 text-black text-center py-8 text-w-xl">
        Image List
      </h1>
      <ImageList images={urls} />
    </main>
  )
}

export default imagesList
