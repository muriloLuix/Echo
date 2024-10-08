// Função para abrir e fechar o chat
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.classList.toggle('open'); // Abre ou fecha o chat
    if (chatPopup.classList.contains('open')) {
        greetUser(); // Saudação quando abrir
    }
}

// Função para saudação de acordo com a hora do dia
function greetUser() {
    const chatBody = document.getElementById('chatBody');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia!';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde!';
    } else {
        greeting = 'Boa noite!';
    }

    // Exibir a saudação no chat
    const botMessage = document.createElement('div');
    botMessage.className = 'message-bot';
    botMessage.innerHTML = `<img src='assets/img/personFaqs.svg' />${greeting} Eu sou o Eco. Como posso ajudar?`;
    chatBody.appendChild(botMessage);

    // Exibir as opções após um pequeno intervalo
    setTimeout(showOptionsAsMessage, 1000);
}

// Função para exibir as opções de respostas como uma mensagem separada
function showOptionsAsMessage() {
    const chatBody = document.getElementById('chatBody');

    // Criar a caixa de opções dentro do chat como uma mensagem do bot
    const optionsMessage = document.createElement('div');
    optionsMessage.className = 'message-bot';

    // Adicionando as opções como botões, dentro de uma div para manter o estilo consistente
    optionsMessage.innerHTML = `
        <div class="options-container">
            <button onclick="userResponse('1. Gostaria de mais informações sobre os planos.')">1. Gostaria de mais informações sobre os planos.</button>
            <button onclick="userResponse('2. Canal de contato da Echo.')">2. Canal de contato da Echo.</button>
            <button onclick="userResponse('3. Quais são as formas de pagamento?')">3. Quais são as formas de pagamento?</button>
        </div>
    `;

    // Adicionar a mensagem de opções ao corpo do chat
    chatBody.appendChild(optionsMessage);

    // Scroll automático para a última mensagem
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Função para capturar a resposta do usuário
function userResponse(response) {
    const chatBody = document.getElementById('chatBody');

    // Exibir a resposta do usuário no chat
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = response;
    chatBody.appendChild(userMessage);

    // Limpar as opções depois que o usuário seleciona uma
    const chatOptions = document.getElementsByClassName('options-container')[0];
    chatOptions.innerHTML = '';

    // Resposta automática do bot após a escolha
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message-bot';
        switch (response) {
            case '1. Gostaria de mais informações sobre os planos.':
                botMessage.innerHTML = `<img src='assets/img/personFaqs.svg' />Perfeito, você pode falar com um dos nossos atendentes e tirar dúvidas mais precisas<br><a href='https://api.whatsapp.com/send?phone=5541996754583&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20da%20Echo.' target='_blank'>CLICANDO AQUI</a>!`;

                break;
            case '2. Canal de contato da Echo.':
                botMessage.innerHTML = `<img src='assets/img/personFaqs.svg' />A ECHO tem atualmente dois canais de contato: o <a href='https://www.instagram.com/echo.devs/' target='_blank'>Instagram</a> e o <a href='https://api.whatsapp.com/send?phone=5541996754583&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20da%20Echo.' target='_blank'>WhatsApp</a>.`;
                break;
            case '3. Quais são as formas de pagamento?':
                botMessage.innerHTML = `<img src='assets/img/personFaqs.svg' />Atualmente, temos o pagamento mensal pelo valor do plano, à vista no PIX ou BOLETO e no cartão de crédito até 12x.`;
                break;
        }
        chatBody.appendChild(botMessage);

        // Pergunta adicional após a resposta
        setTimeout(() => {
            const additionalMessage = document.createElement('div');
            additionalMessage.className = 'message-bot';
            additionalMessage.innerHTML = `<img src='assets/img/personFaqs.svg' />Consigo ajudar em algo a mais?`;
            chatBody.appendChild(additionalMessage);

            // Mostrar opções novamente
            setTimeout(showOptionsAsMessage, 1000);
        }, 1000);
    }, 1000);
}
