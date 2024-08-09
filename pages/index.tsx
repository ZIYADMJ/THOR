import Image from "next/image"
import { Inter } from "next/font/google"
import Thor from "./Thor"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Thor />
    </>
  )
}
