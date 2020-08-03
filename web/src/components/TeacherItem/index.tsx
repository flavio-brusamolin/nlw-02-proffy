import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/41995760?s=460&u=59d4cc20b34349fba889a0236724ad2d4e51606f&v=4" alt="Flávio Brusamolin" />
        <div>
          <strong>Flávio Brusamolin</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Desenvolvedor de Software graduando em Engenharia de Computação.
      <br /><br />
      Utilizo as minhas competências para construir aplicações confiáveis, escaláveis e de alta performance.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
