import { useState } from "react";
import axios from "axios";

export default function NewTwoot() {
  const [length, setLength] = useState(0);
  
  const checkedInputLength = (event) => {
    setLength(event.target.value.length);
  }
  console.log(length);
  const submitBtn = (event) => {
    event.preventDefault();
    if(length === 0) {
      alert("please enter");
    } else if(length > 140) {
      alert(" your message is too long");
    }else {
      axios.post("http://localhost:8080/twoot", {newTwoot: {
        author:"Henry David Thoreau",
        content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
        authorSlug:"henry-david-thoreau",
        dateAdded:"2022-07-06"
    }})
    .then((response) => {
      console.log("here", response);
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
      onChange={checkedInputLength}
    />
    <div>
      <button onClick={submitBtn}>Twoot</button>
      <p >count: {length}</p>
    </div>
  </div>)
};