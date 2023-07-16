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
    <div>
      <h3>{props.content.author}</h3>
      <h4>{props.content.authorSlug}</h4>
      <p>{props.content.content}</p>
      <p>{checkedDate()}</p>
    </div>
  )
}