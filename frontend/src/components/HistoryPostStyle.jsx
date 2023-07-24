import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto 10px;
    padding: 15px;
    border: 3px solid #000;
    &:hover {
        box-shadow: 5px 5px #888888;
    }
`;

export const FlexedName = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #888888;
`;

export const ImgStyle = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

export const FlexStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextContent = styled.h3`
    width: 95%;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 3px solid #000;
    color: #888888;
`;

export const DateContent = styled.p`
    color: #888888;
`;

export const ChangedFlag = styled.i`
    color: ${(props) => (props.active === "true" ? "red" : "black")};
    margin-right: 5px;
`;

export const ChangedRetweet = styled.i`
    color: ${(props) => (props.active === "true" ? "red" : "black")};
    margin-right: 5px;
`;

export const ChangedHeart = styled.i`
    color: ${(props) => (props.active === "true" ? "red" : "black")};
`;
