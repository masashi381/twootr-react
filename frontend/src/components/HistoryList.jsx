import HistoryPost from "./HistoryPost";

export default function HistoryList({ post, img }) {
  return (
    <div>
     <HistoryPost post={post} img={img} /> 
    </div>
  )
};