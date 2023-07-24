import React, { useState } from 'react';

const TrackingComponent = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingStatus, setTrackingStatus] = useState('');

  const handleInputChange = (event) => {
    setTrackingCode(event.target.value);
  };

  const handleTrackingSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer uma chamada à API para rastrear o produto com o código de rastreamento fornecido.
    // Você pode usar bibliotecas como axios para fazer a chamada à API.
    // Por enquanto, vamos apenas simular o rastreamento com uma função de setTimeout.

    setTrackingStatus('Rastreando...');

    setTimeout(() => {
      // Simulação do resultado de rastreamento
      setTrackingStatus('O produto está a caminho!');
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleTrackingSubmit}>
        <input
          type="text"
          value={trackingCode}
          onChange={handleInputChange}
          placeholder="Digite o código de rastreamento"
        />
        <button type="submit">Rastrear</button>
      </form>
      <div>{trackingStatus}</div>
    </div>
  );
};

export default TrackingComponent;
