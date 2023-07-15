export default function HistoryPost(props) {
  console.log("props", props);
  return(
    <div>
      <h3>{props.content.author}</h3>
      <h4>{props.content.authorSlug}</h4>
      <p>{props.content.content}</p>
      <p>{props.content.dateAdded}</p>
    </div>
  )
};