import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  background-color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export function Header() {

    return (
        <div>
            <div>
                <span>MKS</span>
                <span>Sistemas</span>
            </div>
            <Button># 0</Button>
        </div>
    )
}