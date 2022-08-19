import styled from "styled-components";

export const PaginationBlock = styled.div`
    margin: 2em 0;
`;

export const PaginationButton = styled.span`
    border: ${props => props.isActive ? '3px solid white' : '1px solid black'};
    background-color: ${props => props.isActive ? 'green' : 'white'};
    margin-right: .5em;
    padding: 5px 10px;
`;
