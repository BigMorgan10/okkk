// chat.js : Gestion simple de la messagerie
function sendMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById('message').value = ''; // Réinitialiser l'input
    }
}
