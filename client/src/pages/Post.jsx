import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${BASE_URL}/blogs/:${id}`);
      setPost(response.data);
    }
    getData();
  }, [id]);
  return (
    <>
    </>
  );
};

export default Post;
