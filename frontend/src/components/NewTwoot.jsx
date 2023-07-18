import { useState } from "react";
import axios from "axios";

export default function NewTwoot() {
  const [count, setCount] = useState(140);
  const [text, setText] = useState("");
  
  const countDown = (e) => {
    setCount(140 - e.target.value.length);
  }
  const getText = (event) => {
    console.log("getText", event.target.value);
    setText(event.target.value);
  }
  const submitBtn = (event) => {
    event.preventDefault();
    const postDate = new Date();
    if(count === 140 ) {
      alert("please enter");
    } else if(count < 0) {
      alert(" your message is too long");
    }else {
      axios.post("http://localhost:8080/twoot", {newTwoot: {
        author:"Henry David Thoreau",
        content:text,
        authorSlug:"henry-david-thoreau",
        dateAdded:postDate,
    }})
    .then((response) => {
      console.log("here", response);
      
    })
    .catch((error) => {
      console.error("Error:", error);
    })
   }
  };
  return (
  <div>
    <h3>Compose Twoot</h3>
    <input
     type="text"
      name="twootContent" 
      id="twootContent"  
      onChange={getText}
      onKeyUp={countDown}
    />
    <div>
      <button onClick={submitBtn}>Twoot</button>
      <p >count: {count}</p>
    </div>
  </div>)
};