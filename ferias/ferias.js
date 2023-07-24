function trackProduct(productCode) {
    // Aqui você pode fazer uma chamada à API para rastrear o produto com o código fornecido.
    // Você pode usar bibliotecas como axios para fazer a chamada à API.
    // Por enquanto, vamos apenas simular o rastreamento com uma função de setTimeout.
  
    console.log('Rastreando o produto...');
  
    setTimeout(() => {
      // Simulação do resultado de rastreamento
      console.log('O produto está a caminho!');
    }, 3000);
  }
  
  // Exemplo de uso
  const code = '123456789'; // Código de rastreamento do produto
  trackProduct(code);
  