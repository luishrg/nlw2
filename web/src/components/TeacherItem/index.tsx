import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4668472/avatar.png?width=90" alt="Avatar Luis Humberto" />
        <div>
          <strong>Luis Humberto</strong>
          <span>Desenvolvimento Web</span>
        </div>
      </header>

      <p>
        Apaixonado por jogos e desenvolvimento.
            <br /><br />
            Minha vida se resume em duas coisas, ou estou jogando ou estou desenvolvendo; tanto para trabalho ou para estudo.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00 </strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
              Entrar em Contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem