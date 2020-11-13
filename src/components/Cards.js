import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vacantes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vacantes/Operativos.jpeg'
              text='Explora las partes internas de la planta'
              label='Personal Operativo'
              path='/form'
            />
            <CardItem
              src='images/vacantes/Profesionistas.jpeg'
              text='Un profesionista debe seguir aprendiendo, ¡Aquí lo podrás hacer!'
              label='Profesionistas'
              path='/form'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vacantes/Tecnicos.jpeg'
              text='Aplica los conocimientos técnicos aqui'
              label='Carreras Técnicas'
              path='/form'
            />
            <CardItem
              src='images/vacantes/Universitarios.jpeg'
              text='Es momento de enfrentar la vida laboral, ¡Hazlo aqui!'
              label='Universitarios'
              path='/form'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
