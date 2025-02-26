import { useEffect, useState } from "react";

const Home = () => {
  const [allPost, setAllPost] = useState(null);
  async function getAllPost() {
    try{
    const response = await fetch(`http://localhost:3000/api/blogs`);
    const json = await response.json();
    console.log(json)
    setAllPost(json.data);
  }
  catch(err){
    console.log(err)
  }
}
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <>
      {allPost?.map((item) => (
        <div key={item._id}>
          <img src={item?.thumbnail} alt="" />
          <h1>{item.title}</h1>
          <span>{item.tags.join(",")}</span>
        </div>
      ))}
    </>
  );
};

export default Home;
