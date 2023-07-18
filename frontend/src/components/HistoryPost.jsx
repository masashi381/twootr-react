import styled from "styled-components";

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
`
export default function HistoryPost(props) {
  // console.log("props", props);
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
          <i className="fa-solid fa-flag"></i>
          <i className="fa-solid fa-retweet"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
      </FlexedName>
    </Container>
  )
}