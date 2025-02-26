import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { BASE_URL, formats, modules } from "../utils/constant";
import axios from "axios";

const AddPost = () => {
  const [post, setPost] = useState({ title: "", content: "", category: "" });
  async function handleSubmit(e) {
    e.preventDefault()

     const response=await axios.post(`${BASE_URL}/blogs`,post,{
      headers:{
        'Content-Type':"multipart/form-data"
    }
     })
   
  }
  return (
    <div className="w-[1300px] mx-auto  pt-8">
      <form action="/upload" onSubmit={(e) => handleSubmit(e)} className="space-y-4" encType={"multipart/form-data"}>
        <input
          type="text"
          value={post.title}
          id="title"
          className="text-3xl outline-none"
          placeholder="Title"
          onChange={(e) => setPost({ ...post, [e.target.id]: e.target.value })}
        />
        <select
          value={post.category}
          onChange={(e) => setPost({ [e.target.id]: e.target.value })}
          id="category"
          className="text-center w-32 outline-none appearance-none bg-gray-50 "
        >
          <option value="" selected>
            select category
          </option>
          <option value="ai">ai</option>
          <option value="language">language</option>
          <option value="skill">skill</option>
        </select>
        <ReactQuill
          id="content" 
          theme="snow"
          value={post.content}
          onChange={(value) => setPost((prev) => ({ ...prev, content: value }))}
          modules={modules}
          formats={formats}
          className="h-[600px]"
          placeholder="Tell your Story"
        />
      </form>
    </div>
  );
};

export default AddPost;
