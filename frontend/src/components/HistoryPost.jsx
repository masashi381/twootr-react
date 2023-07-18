import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
border: 1px solid #000;
`;

const FlexedName = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
margin: 0 auto;
`;

const TextContent = styled.p`
width: 95%;
margin: 0 auto;
border-bottom: 1px solid #000;
`;

const DateContent = styled.p`
font-color: #888;
`;

const ColorChanged = styled.i`
color: ${props => (props.active ? "red" : "black")};
`;

export default function HistoryPost(props) {
  const [active, setActive] = useState(false);
  // console.log("props", props);

  const colorToggle = () => {
    setActive(!active);
  }
  const checkedDate = () => {
    const todayDate = new Date();
    const addedDay = new Date(props.content.dateAdded);
    // console.log("day", addedDay);
    const newTodayDate = todayDate.getTime();
    const newAddedDay = addedDay.getTime();
    const modifiedDate = Math.floor((newTodayDate - newAddedDay) /(24 * 60 * 60 * 1000));
    if(modifiedDate === 0){
      return "posted today";
    }else {
      return `${modifiedDate} days ago`;
    }
    };
    
  return(
    <Container>
      <FlexedName>
        <h3>{props.content.author}</h3>
        <h4>{props.content.authorSlug}</h4>
      </FlexedName>
      <TextContent>{props.content.content}</TextContent>
      <FlexedName>
        <DateContent>{checkedDate()}</DateContent>
        <div>
          <ColorChanged className="fa-solid fa-flag" onClick={colorToggle} active={active}></ColorChanged>
          <ColorChanged className="fa-solid fa-retweet" onClick={colorToggle} active={active}></ColorChanged>
          <ColorChanged className="fa-solid fa-heart" onClick={colorToggle} active={active}></ColorChanged>
        </div>
      </FlexedName>
    </Container>
  )
}