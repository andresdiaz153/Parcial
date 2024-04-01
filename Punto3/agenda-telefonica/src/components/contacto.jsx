import React from 'react';


const Contacto = ({ nombre, telefono, imagen }) => {
  return (
    <div className="persona">
      {imagen && <img src={imagen} alt={nombre} />}
      <h2>{nombre}</h2>
      <h4>{telefono}</h4>
    </div>
  );
};

export default Contacto;
