import axios from "axios";
import { useState } from "react";
import { NewTwootContainer, SubTitleStyle, TextStyle, FlexStyle, NewTwootBtn, CounterStyle } from "./NewTwootStyle";

export default function NewTwoot({ addPosts, name, nameSlug}) {
  const [count, setCount] = useState(140);
  const [text, setText] = useState("");
  
  const countDown = (e) => {
    setCount(140 - e.target.value.length);
  };

  const getText = (event) => {
    // console.log("getText", event.target.value);
    setText(event.target.value);
  };

  
  const submitBtn = (event) => {
    event.preventDefault();
    const postDate = new Date();
    if(count === 140 ) {
      alert("please enter");
    } else if(count < 0) {
      alert(" your message is too long");
    }else {
      axios.post("http://localhost:8080/twoot", {newTwoot: {
        author: name,
        content: text,
        authorSlug: nameSlug,
        dateAdded:postDate,
    }})
    .then((response) => {
      console.log("here", response);
      addPosts(response.data);
      setText("");
      setCount(140);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
   }
  };
  return (
  <NewTwootContainer>
    <SubTitleStyle>Compose Twoot</SubTitleStyle>
    <TextStyle
     type="text"
      name="twootContent" 
      id="twootContent"  
      value={text}
      onChange={getText}
      onKeyUp={countDown}
      placeholder="What are you humming about?"
    />
    <FlexStyle>
      <NewTwootBtn onClick={submitBtn}>Twoot</NewTwootBtn>
      <CounterStyle>{count}</CounterStyle>
    </FlexStyle>
  </NewTwootContainer>)
};