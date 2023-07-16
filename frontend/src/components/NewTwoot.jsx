import { useState } from "react";

export default function NewTwoot() {
  const [length, setLength] = useState([]);
  const checkedInputLength = (event) => {
    setLength(event.target.value);
  }
  console.log(length);
  return (
  <div>
    <h3>Compose Twoot</h3>
    <input
     type="text"
      name="twootContent" 
      id="twootContent" 
      // value={length} 
      onChange={checkedInputLength}
    />
    <div>
      <button>Twoot</button>
      <p>count</p>
    </div>
  </div>)
};