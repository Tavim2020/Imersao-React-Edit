import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="sport channel Logo" >
        </img>
      </a>
      <p>
        Conteúdo Exclusivo Esportivo.
      </p>
    </FooterBase>
  );
}

export default Footer;
