import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/constant"

const Home = () => {
  const [allPost,setAllPost]=useState([])
 async function getAllPost(){
    const response=await fetch(`${BASE_URL}/blogs`)
    const json=await response.json()
    setAllPost(json.data)
  }
  useEffect(()=>{
   getAllPost()
  },[])
  return (
    <>
     {
      allPost.map(item=>(
        <div key={item._id}>
          <img src="" alt="" />
          <h1>{item.title}</h1>
          <span>{item.tags.join(",")}</span>
        </div>
      ))
     }
    </>
  )
}

export default Home