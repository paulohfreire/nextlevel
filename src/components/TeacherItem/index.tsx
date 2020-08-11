import React from 'react';

import whatsappicon from '../../assets/imagens/icons/whatsapp.svg'
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/49009770?s=460&u=3949528d196b83a901b0c57887633c22515cb5f7&v=4" alt="foto de perfil"/>
            <div>
                <strong>Paulo Henrique</strong>
                <span>Tecnologia</span>
            </div>
        </header>

        <p>
         Entusiasta das melhores tecnologias etc...
         <br /><br />
         Apaixonado por novas tendências.
        </p>

         <footer> 
             <p>
                 Preço/hora
                 <strong>R$ 40,00</strong>
             </p>
             <button type="button">
                 <img src={whatsappicon} alt="whatsapp" />
             </button>
         </footer>
     </article>
    );
}

export default TeacherItem;