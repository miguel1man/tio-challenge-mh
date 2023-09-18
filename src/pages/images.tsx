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
    <main className="w-screen flex flex-col items-center px-8 bg-black">
      <h1 className="text-white text-3xl text-center py-8">Image List</h1>
      <ImageList images={urls} />
    </main>
  )
}

export default imagesList
