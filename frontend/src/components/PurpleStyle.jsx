import styled from "styled-components";

export const HeaderBackground = styled.div`
    background-color: #711a75;
    position: fixed;
    width: 100%;
    z-index: 1;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0rem;
    color: white;
`;

export const TitleStyle = styled.h3`
    font-family: "Permanent Marker", sans-serif;
    margin: 1rem 2rem;
`;

export const WriteButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: #711a75;
    padding: 0;
    margin: 0 2rem;
    font-family: sans-serif;
    font-size: 1rem;
    color: white;
`;
