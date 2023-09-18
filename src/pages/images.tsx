import { NextPage } from "next"
import ImageList from "../components/ImageList"
import imageData from "../app/images.json"

const imagesList: NextPage = () => {
  return (
    <main className="w-screen flex flex-col items-center px-8 bg-black">
      <h1 className="text-white py-8">Image List</h1>
      <ImageList images={imageData.images} />
    </main>
  )
}

export default imagesList
