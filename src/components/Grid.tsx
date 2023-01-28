import styled from "styled-components";
import { Item } from "./Item";

const Background = styled.div`
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    gap: 1.125rem;
    flex-wrap: wrap;
    max-width: 1000px;    
    margin-top: 1.1rem;
    justify-content: center;
    `;

export function Grid() {
    return (
        <Background>
            <Container>
                <Item />
                <Item />
                
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Container>
        </Background>
    )
}