import React from "react"
import { useRouter } from "next/router"
import EditComponent from "../components/ImageEditor"

const Editor = () => {
  const router = useRouter()
  const imageUrl = router.query.imageUrl as string
  // TODO: Clean query parameters

  return (
    <main className="bg-primary h-screen flex flex-col items-center">
      <EditComponent imageUrl={imageUrl} />
    </main>
  )
}

export default Editor
