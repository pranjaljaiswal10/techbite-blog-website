import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Post = () => {
  const [post, setPost] = useState(null);
  async function getData() {
    const response = await axios.get(`${BASE_URL}/blogs/:${id}`);
    setPost(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    </>
  );
};

export default Post;
