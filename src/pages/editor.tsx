import React, { useRef } from "react"
import EditorPage from "../components/editor"
import { useRouter } from "next/router"

const Editor = () => {
  const canvasRef = useRef(null)
  const router = useRouter()
  const imageUrl = router.query.imageUrl as string

  return (
    <main className="bg-black h-screen flex flex-col items-center">
      <EditorPage imageUrl={imageUrl} />
    </main>
  )
}

export default Editor
