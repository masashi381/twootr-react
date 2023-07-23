import { useState } from "react";
import { Container, FlexedName, TextContent, DateContent, ChangedFlag, ChangedRetweet, ChangedHeart, FlexStyle, ImgStyle } from "./HistoryPostStyle";

export default function HistoryPost({ post, img }) {
  const [flagActive, setFlagActive] = useState(false);
  const [reTweetActive, setReTweetActive] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  const flagColorToggle = () => {
    setFlagActive(!flagActive);
  }

  const reTweetColorToggle = () => {
    setReTweetActive(!reTweetActive);
  }

  const heartColorToggle = () => {
    setHeartActive(!heartActive);
  }

  const checkedDate = () => {
    const todayDate = new Date();
    const addedDay = new Date(post.dateAdded);
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
      <FlexStyle>
          <ImgStyle src={`https://avatars.dicebear.com/api/bottts/${img}.svg`} alt="author's icon" />
          <h3>{post.author}</h3>
        </FlexStyle>
        <h4>{post.authorSlug}</h4>
      </FlexedName>
      <TextContent>{post.content}</TextContent>
      <FlexedName>
        <DateContent>{checkedDate()}</DateContent>
        <div>
          <ChangedFlag className="fa-solid fa-flag" onClick={flagColorToggle} active={flagActive.toString()}></ChangedFlag>
          <ChangedRetweet className="fa-solid fa-retweet" onClick={reTweetColorToggle} active={reTweetActive.toString()}></ChangedRetweet>
          <ChangedHeart className="fa-solid fa-heart" onClick={heartColorToggle} active={heartActive.toString()}></ChangedHeart>
        </div>
      </FlexedName>
    </Container>
  )
}