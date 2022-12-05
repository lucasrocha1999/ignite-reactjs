import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 2rem 10rem;
`;

export const Content = styled.div`
    display: flex;
    gap: 12px;
`;

export const ButtonLocation = styled.button`
    display: flex;
    align-items: center;

    border-radius: 6px;
    border: transparent;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    padding: 0 8px;

    svg {
        padding-right: 4px;
    }
`;

export const ButtonCart = styled.button`
    padding: 0 10px;

    border-radius: 6px;
    border: transparent;

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
`;