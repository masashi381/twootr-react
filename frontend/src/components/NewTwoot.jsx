import { useState } from "react";

export default function NewTwoot() {
  const [length, setLength] = useState(0);
  const checkedInputLength = (event) => {
    setLength(event.target.value.length);
  }
  console.log(length);
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
      <button>Twoot</button>
      <p >count: {length}</p>
    </div>
  </div>)
};