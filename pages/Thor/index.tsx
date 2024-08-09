import React from "react"
import { posts } from "../../lib/data"
import Card from "../../components/Card"
import NavBar from "../../components/NavBar"
import SoukDor from "../../components/SoukD'or"
import Food from "../moroccan-food"
import Sweet from "../moroccan-sweet"
import About from "../about"
import Footer from "../../components/Footer"

const HomePage = () => {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div>
        <SoukDor />
      </div>
      <div>
        <Food />
      </div>
      <div>
        <Sweet />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
