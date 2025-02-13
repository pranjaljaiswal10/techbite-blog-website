import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../utils/constant"

const Home = () => {
    const [post,setPost]=useState(null)
    const 
    async function getData() {
      const response=await axios.get(`${BASE_URL}/blogs/:${id}`)  
    }
    useEffect(()=>{
    getData()
    },[])
  return (
    <>
    </>
  )
}

export default Home