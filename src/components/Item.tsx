import styled from 'styled-components';
import Image from 'next/image';
import picture from './Picture.png';

const Product = styled.div`
    height: 20.5rem;
    width: 15.68rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.13);
`;

const Picture = styled.div`
    margin-bottom: 1rem;
    
    `;

const HeadItem = styled.div`
    display: flex
    
    `;

const Name = styled.p`
    font-size: 1rem;
    color: #2C2C2C;
    margin-left: 0.875rem;
`;

const Price = styled.span`
    background-color: #373737;
    font-size: 15px;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin-right: 0.75rem;
    height: 1.8rem;
    margin-top: 3px;
    color: #FFFFFF;
    
`;
const Description = styled.p`
    margin-top: 0.7rem;
    font-weight: 300;
    font-size: 0.625rem;
    color: #2C2C2C;
    margin-left: 0.875rem;
`;

const BuyButton = styled.button`
    margin-top: 0.9rem;
    color: #FFFFFF;
    background-color: #0F52BA;
    font-weight: 600;
    font-size: 15px;
    width: 100%;
    border: none;
    height: 2.25rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
`;
export function Item() {
    return (
        <Product>
            <BuyButton>COMPRAR</BuyButton>
            <Description>Redesigned from scratch and completely revised.</Description>
            <HeadItem>
                <Name>Apple Watch Series 4 GPS</Name>
                <Price>R$999</Price>
            </HeadItem>

            <Picture>

                <Image
                    src={picture}
                    alt="Imagem do produto"
                    placeholder="blur"
                    width={127}
                    height={158}

                />
            </Picture>
        </Product>
    )
}