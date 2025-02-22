import { useState } from "react"


const AddPost = () => {
    const [title,setTitle]=useState("")

  return (
  <>
  <div>
  <input type="text" value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
   <input type="file" name="" id="" />
  </div>
  </>
  )
}

export default AddPost