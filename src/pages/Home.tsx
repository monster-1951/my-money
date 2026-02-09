import { useEffect } from "react"
import HomePage from "../components/HomePage"
import { getSessionUser } from "../api/auth"

const Home = () => {
  useEffect(() => {
    getSessionUser()
  },[])
  return <><HomePage/></>
}

export default Home