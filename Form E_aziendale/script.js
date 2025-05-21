function E_M_A() {
  const form = document.getElementById('EmailAziendale');

  // Verifica se il form è valido
  if (!form.checkValidity()) {
    alert('Per favore, compila tutti i campi obbligatori.');
    form.reportValidity(); // mostra i messaggi di errore del browser
    return; // ferma l'esecuzione se ci sono campi non validi
  }

  const mNome = form.elements['nome'].value;
  const mCognome = form.elements['cognome'].value;
  const mAzienda = form.elements['azienda'].value;

  const mEmail = mNome.toLowerCase() + '.' + mCognome.toLowerCase() + '@' + mAzienda.toLowerCase() + '.it';

  const emailInput = document.getElementById('email');
  emailInput.value = mEmail.toLowerCase();

  // Opzione 1: Forza la validità e attiva gli effetti
  emailInput.setCustomValidity('');
  emailInput.reportValidity();

  // Opzione 2: Aggiungi classe per effetto visivo
  emailInput.classList.add('has-value');

  // Dispatche evento input
  emailInput.dispatchEvent(new Event('input'));
}