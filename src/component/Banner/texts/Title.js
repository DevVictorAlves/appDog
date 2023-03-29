import React, { useState } from 'react';
import './Title.css';
import axios from 'axios';

function Title() {
  const [imageUrl, setImageUrl] = useState('');

  const handleButtonClick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setImageUrl(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="title">
      <h1>Gerador de fotos</h1>
      <button className="button" onClick={handleButtonClick}>Mostrar Imagem</button>
      <p></p>
      {imageUrl && <img src={imageUrl} alt="Imagem de um cachorro" width="20%" height="20%"/>}
    </div>
  );
}

export default Title;
