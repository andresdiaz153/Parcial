import React, { useState, useEffect } from 'react';
import Contacto from './components/contacto';
import './App.css';

const App = () => {

  const [contactos, setContactos] = useState([]);

  const obtenerContactos = async () => {
    try {
      const response = await fetch('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project');
      
      const data = await response.json();
       
      setContactos(data);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    obtenerContactos();
  }, []);

  return (
    <div className="container">

      <h1>CONTACTOS</h1>
      
      <div className="contactos">
        {contactos.map(contacto => (
          <Contacto
            key={contacto.identify}
            nombre={contacto.names}
            telefono={contacto.telephone}
            imagen={contacto.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


