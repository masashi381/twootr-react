import axios from "axios";
import NewTwoot from "./NewTwoot";
import History from "./History";
import { useEffect, useState } from "react";


export default function Body() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/twoots")
    .then((res) => {
      console.log("serverData: " , res.data);
      setPosts(res.data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
  },[]);

  const addPosts = (newPosts) => {
    setPosts((prevPosts) => [newPosts, ...prevPosts]);
  };

  const parsedPost = posts.map((post, index) => {
    return <History key={index} content={post}/>
  });

  return (
    <>
    <NewTwoot addPosts={addPosts}/>
    {parsedPost}
    </>
  )
};