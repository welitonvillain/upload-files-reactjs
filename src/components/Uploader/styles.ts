import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2rem 1rem;

    width: 20rem;
    height: 24rem;
    border-radius: 1.5rem;

    background-color: #FFF;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%100%;

    span {
        font-weight: 500;
        font-size: 1.35rem;
    }

    small {
        font-weight: 400;
        font-size: 0.75rem;
        color: #ADABB0;
    }
`;

export const DropdownArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    background-image: linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 10px 1px;
  background-repeat: repeat-x;
`;