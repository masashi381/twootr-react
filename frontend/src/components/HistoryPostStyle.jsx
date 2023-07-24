import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto 10px;
  border: 1px solid #000;
  &:hover {
    box-shadow: 5px 5px #888;
  }
`;

export const FlexedName = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const ImgStyle = styled.img`
width: 50px;
height: 50px;
`;

export const FlexStyle = styled.div`
display: flex;
`;
export const TextContent = styled.p`
  width: 95%;
  padding-bottom: 10px;
  padding-left: 10px;
  margin: 0 auto;
  border-bottom: 2px solid #000;
`;

export const DateContent = styled.p`
  color: #888;
`;

export const ChangedFlag = styled.i`
  color: ${props => (props.active === 'true' ? "red" : "black")};
  margin-right: 5px;
`;

export const ChangedRetweet = styled.i`
  color: ${props => (props.active === 'true' ? "red" : "black")};
  margin-right: 5px;
`;

export const ChangedHeart = styled.i`
  color: ${props => (props.active === 'true' ? "red" : "black")};
`;