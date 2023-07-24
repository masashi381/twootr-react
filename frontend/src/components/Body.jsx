import axios from "axios";
import NewTwoot from "./NewTwoot";
import History from "./History";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
background: #f4f1ec;
`;

export default function Body({ name, nameSlug,}) {
  const [posts, setPosts] = useState([]);
  
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
    return <History key={index} post ={post}/>
  });

  return (
    <BodyContainer>
      <NewTwoot addPosts={addPosts} name={name} nameSlug={nameSlug}/>
      {parsedPost}
    </BodyContainer>
  )
};