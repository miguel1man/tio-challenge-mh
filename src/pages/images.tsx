import { NextPage } from "next"
import ImageList from "../components/ImageList"
import imageData from "../app/images.json"

const imagesList: NextPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <h1>Image List</h1>
      <ImageList images={imageData.images} />
    </main>
  )
}

export default imagesList
