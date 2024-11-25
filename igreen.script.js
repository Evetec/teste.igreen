// Validar formulário
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const nome = document.querySelector('input[type="nome"]').value;
 const email = document.querySelector('input[type="email"]').value;
 const telefone = document.querySelector('input[type="telefone"]').value;
 
 // Enviar dados para servidor
 fetch('/enviar', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome, email, telefone }),
 })
 .then((res) => res.json())
 .then((data) => console.log(data))
 .catch((err) => console.error(err));
});
```

*Recursos adicionais:*

1. *Imagens:* Unsplash, Pexels ou Pixabay.
2. **
