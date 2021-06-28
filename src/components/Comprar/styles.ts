import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;
`;

export const Content = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: center;

    input{
        padding: 0.25rem;
        border-radius: 0.25rem;
        border: none;
        display: block;
    }

    select {
        margin-top: 2rem;
        border-radius: 0.25rem;
        border: none;
        padding: 0.25rem;
    }


`

export const Products = styled.div`
    margin-top: 1rem;
    display: grid;
    gap: 2rem;
    padding: 0 1rem;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
`;

export const Product = styled.div`

    display: flex;
    background-color: white;
    padding: 1rem;
    border-radius: 0.25rem;

    .apresentation {
        h1 {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }
    
        img {
            width: 16rem;
            border-radius: 0.25rem;
        }
    }

    .details {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

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
    }
    
`;