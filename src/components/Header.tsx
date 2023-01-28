import styled from 'styled-components';
import { Montserrat } from '@next/font/google';

const mont = Montserrat({
    weight: ['300','400','600', '700'],
    subsets: ['latin'],
})

const MKS = styled.span`
    font-weight: 600;
    font-size: 2rem;
    
    color: #FFFFFF;
`;

const Sistemas = styled.span`
    font-weight: 300;
    font-size: 1rem;
    margin-left: 0.3rem;
    position: relative;
    bottom: 0.125rem;
    color: #FFFFFF;
`;

const Button = styled.button`
  color: black;
  width: 3.25rem;
  height: 1.625rem;
  background-color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
  border: none;
`;

const Wrapper = styled.section`
    width: 100vw;
    background-color: #0F52BA;
    height: 3rem;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding-left: 1.25rem;
    padding-right: 1.4rem;
`;

export function Header() {


    return (
        <Wrapper>
            <div>
                <MKS>MKS</MKS>
                <Sistemas>Sistemas</Sistemas>
            </div>
            <Button># 0

            </Button>
        </Wrapper>
    )
}