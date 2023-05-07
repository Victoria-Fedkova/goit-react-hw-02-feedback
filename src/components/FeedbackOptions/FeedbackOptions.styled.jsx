import styled from "styled-components";

export const FeedbackWrapper = styled.div`
		display: flex;
        justify-content: center;
        gap:20px;
		flex-wrap: nowrap;
        `;

export const FeedbackOptionsBtn = styled.button`
    cursor: pointer;

    display: block;
    height:calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;

    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;

    border: 1px solid transparent;
    border-radius: 100px;
    background-color: white;
    background-color: #e3e9ed;

    transition: all .15s ease-in-out;

    &:hover, &:focus, &:active{
        background-color: #000;
	color: #e3e9ed;
	/* transition: all 200ms ease-in-out; */
    }

`;