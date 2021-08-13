import styled from "styled-components";

export const Overley = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-color: rgba(78, 89, 131, 0.5);

    z-index: 999;

`;

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: ${(props) => props.height? props.height: "60vh"};
    max-width: 90vw;
    min-width: 40vw;
    padding: 24px;
    color:  black;
    background-color:  white;
    box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
    border-radius: 8px;
`;