import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.form`
    width: 40rem;
    height: 40rem;
    background-color: white;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    label {
        display: block;
        align-self: center;
        margin-top: 1rem;
    }

    input {
            margin: 0 1rem;
            padding: 0.25rem;
            width: 70%;
        }

    button {
        padding: 1rem 2rem;
        background-color: var(--cyan);
        margin: 2rem 0;
        border-radius: 0.25rem;
        border: none;
        color: white;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            opacity: 0.5;
        }
    }

    a {
        text-decoration: none;
        margin-top: 6rem;
        &:hover{
            text-decoration: underline;
        }
    }
`;