import axios from "axios";
import HistoryPost from "./HistoryPost";
import { useEffect, useState } from "react";

export default function HistoryList() {
  const [postsList, setPostsList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/twoots")
    .then((res) => {
      console.log("serverData: " , res.data);
      setPostsList(res.data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
  },[]);
  const parsedPost = postsList.map((post, index) => {
    return <HistoryPost key={index} content={post}/>
  })
  return (
    <div>
      {parsedPost}
    </div>
  )
};