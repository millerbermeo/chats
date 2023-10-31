const endpointURL = 'http://181.143.234.138:5001/chat_business2/Dashboard/Dashboard/chats_bot.php';

fetch(endpointURL, {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no se completó correctamente');
    }
    return response.json();
  })
  .then(data => {
    // Obtener el contenedor donde se renderizarán los mensajes
    const chatContainer = document.getElementById('chat-container');

    // Recorrer los datos y crear elementos para cada uno
    data.forEach(chat => {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('chat-message');

      const imgUser = document.createElement('div');
      imgUser.classList.add('img-user');
      const userImage = document.createElement('img');
      userImage.classList.add('user-image');
      userImage.src = '../img/what.png';
      imgUser.appendChild(userImage);

      const contentText = document.createElement('div');
      contentText.classList.add('message-content');

      const titleApi = document.createElement('div');
      titleApi.classList.add('message-title');
      titleApi.textContent = chat.men;

      const textApiNumber = document.createElement('p');
      textApiNumber.classList.add('message-number');
      textApiNumber.textContent = chat.numberw;

      const textApiName = document.createElement('p');
      textApiName.classList.add('message-name');
      textApiName.textContent = chat.name;
      
      const dateApi = document.createElement('p');
      dateApi.classList.add('message-date');
      dateApi.textContent = chat.fecha;

      
      contentText.appendChild(textApiName);
      contentText.appendChild(textApiNumber);
      contentText.appendChild(titleApi);
      contentText.appendChild(dateApi);

      chatMessage.appendChild(imgUser);
      chatMessage.appendChild(contentText);

      chatContainer.appendChild(chatMessage);
    });
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });






//   SEGUNDO ENDPONT

const secondEndpointURL = 'http://181.143.234.138:5001/chat_business2/Dashboard/Dashboard/chats_no_respondidos.php';

fetch(secondEndpointURL, {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no se completó correctamente');
    }
    return response.json();
  })
  .then(data => {
    // Obtener el contenedor donde se renderizarán los mensajes
    const chatContainer = document.getElementById('chat-container-2');

    // Recorrer los datos y crear elementos para cada uno
    data.forEach(chat => {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('chat-message');

      const imgUser = document.createElement('div');
      imgUser.classList.add('img-user');
      const userImage = document.createElement('img');
      userImage.classList.add('user-image');
      userImage.src = '../img/what.png';
      imgUser.appendChild(userImage);

      const contentText = document.createElement('div');
      contentText.classList.add('message-content');

      const titleApi = document.createElement('div');
      titleApi.classList.add('message-title');
      titleApi.textContent = chat.men;

      const textApiNumber = document.createElement('p');
      textApiNumber.classList.add('message-number');
      textApiNumber.textContent = chat.numberw;

      const textApiName = document.createElement('p');
      textApiName.classList.add('message-name');
      textApiName.textContent = chat.name;
      
      const dateApi = document.createElement('p');
      dateApi.classList.add('message-date');
      dateApi.textContent = chat.fecha;

      
      contentText.appendChild(textApiName);
      contentText.appendChild(textApiNumber);
      contentText.appendChild(titleApi);
      contentText.appendChild(dateApi);

      chatMessage.appendChild(imgUser);
      chatMessage.appendChild(contentText);

      chatContainer.appendChild(chatMessage);
    });
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });



  //   THREE ENDPONT

const threeEndpointURL = 'http://181.143.234.138:5001/chat_business2/Dashboard/Dashboard/chats_respondidos.php';

fetch(threeEndpointURL, {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no se completó correctamente');
    }
    return response.json();
  })
  .then(data => {
    // Obtener el contenedor donde se renderizarán los mensajes
    const chatContainer = document.getElementById('chat-container-3');

    // Recorrer los datos y crear elementos para cada uno
    data.forEach(chat => {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('chat-message');

      const imgUser = document.createElement('div');
      imgUser.classList.add('img-user');
      const userImage = document.createElement('img');
      userImage.classList.add('user-image');
      userImage.src = '../img/what.png';
      imgUser.appendChild(userImage);

      const contentText = document.createElement('div');
      contentText.classList.add('message-content');

      const titleApi = document.createElement('div');
      titleApi.classList.add('message-title');
      titleApi.textContent = chat.men;

      const textApiNumber = document.createElement('p');
      textApiNumber.classList.add('message-number');
      textApiNumber.textContent = chat.numberw;

      const textApiName = document.createElement('p');
      textApiName.classList.add('message-name');
      textApiName.textContent = chat.name;
      
      const dateApi = document.createElement('p');
      dateApi.classList.add('message-date');
      dateApi.textContent = chat.fecha;

      
      contentText.appendChild(textApiName);
      contentText.appendChild(textApiNumber);
      contentText.appendChild(titleApi);
      contentText.appendChild(dateApi);

      chatMessage.appendChild(imgUser);
      chatMessage.appendChild(contentText);

      chatContainer.appendChild(chatMessage);
    });
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });


  