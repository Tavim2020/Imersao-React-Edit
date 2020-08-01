import styled from 'styled-components';


export const FooterBase = styled.footer`
  img {
    width: 250px;
    transition: all 0.5s;
    cursor: pointer;
  }
   img:hover{
     --webkit-transform: scale(1.5);
     transform: scale(1.5);
   }
  
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
