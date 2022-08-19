import styled from "styled-components";

export const NavbarBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    width: 100%;
    height: 50px;
    
    a {
        margin-left: 20px;
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: red;
    }
`;
