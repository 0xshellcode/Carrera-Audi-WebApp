import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
import './FAQs.css';

function FAQs() {
  const [faqs, setfaqs] = useState([
   {
     question: '¿Cómo se lleva a cabo el proceso de reclutamiento y selección para Personal Técnico?',
     answer: 'El proceso de reclutamiento y selección es diferente para cada una de las posiciones. En general, los candidatos registran su información en nuestro Portal de Empleos.',
     open: true
   },
   {
     question: '¿Cuáles son los requisitos para postularse a vacantes de técnicos?',
     answer: 'Los requisitos son variables de acuerdo a la posición a la que aplicas. Algunos de los requisitos son: Bachillerato terminado, carrera técnica titulado o licenciatura, experiencia mínima de un año en sector automotriz o manufactura, disponibilidad para rolar turnos, entre otros.',
     open: false
   },
   {
     question: '¿Qué perfiles técnicos solicitan?',
     answer: 'Los perfiles varían de acuerdo a la posición a la que aplicas. Contamos con distintas áreas laborales en Audi México. Las principales son: Planificación, Calidad, Producción, Logística, entre otras.',
     open: false
   },
   {
     question: 'Hice entrevistas y exámenes, pero no me han contactado. ¿Qué puedo hacer?',
     answer: 'El proceso de reclutamiento lleva algún tiempo. Te agradecemos tener paciencia ya que te estará contactando la persona que inicialmente tuvo contacto contigo. En caso de que no puedas contactarte, puedes ir a nuestras oficinas de aplicación en San José Chiapa.',
     open: false
   },
   {
     question: ' ¿Puedo enviar mi CV por correo?',
     answer: 'Si estas interesado/a en una vacante de Audi México, te invitamos a que registres tu información curricular a la siguiente dirección, pues es el único medio que utilizaremos para evaluar a nuestros candidatos www.audi.com.mx/carreras.',
     open: false
   },
   {
     question: '¿En dónde puedo encontrar las ofertas de empleo?',
     answer: 'Te invitamos a ingresa a nuestro Portal de Empleo a través de www.audi.com.mx/carreras, ahí podrás conocer las diferentes vacantes publicadas que tenemos disponibles para ti.',
     open: false
   },
   {
     question: '¿Cómo va el proceso de mi postulación en el portal? ¿Cómo sé si fui seleccionado en Audi México?',
     answer: 'En nuestro proceso de reclutamiento y selección estamos en constante contacto con los candidatos. Al ser seleccionado/a, uno de nuestros expertos te contactará. Te invitamos a actualizar tu información registrada en nuestro portal cada vez que esta cambie, pues es nuestro único registro de contacto. Si ya iniciaste algún proceso, te recomendamos estés en contacto con quien te ha dado seguimiento.',
     open: false
   },
   {
     question: '¿Me podrían compartir detalles sobre su proceso de selección?',
     answer: 'El proceso de reclutamiento y selección es diferente para cada una de las posiciones. En general, los candidatos registran su información en nuestro Portal de Empleos.',
     open: false
   },
   {
     question: '¿Existe privacidad en la información personal que registro?',
     answer: 'Te comentamos que dichos datos se encuentran protegidos al amparo del Aviso de Privacidad de Candidatos, que te fue proporcionado y en el que solicitamos tu consentimiento para ello. Lo anterior siempre con la seguridad de que serán tratados con la confidencialidad debida.',
     open: false
   }
 ]);

 const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="bg-faqs">
    <div className="FAQs">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
       <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
     ))}
   </div>
    </div>
    </div>
  );
}

export default FAQs;
