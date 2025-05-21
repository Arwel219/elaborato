function JS_Ex() {
  const A = parseFloat(document.getElementById('A').value) || 0;
  const B = parseFloat(document.getElementById('B').value) || 0;
  const operatore = document.getElementById('operatore').value;
  let C;

  switch (operatore) {
    case '+':
      C = A + B;
      break;
    case '-':
      C = A - B;
      break;
    case '*':
      C = A * B;
      break;
    case '/':
      if (B !== 0) {
        C = A / B;
      } else {
        C = 'Errore: divisione per zero!';
      }
      break;
    default:
      C = 'Operazione non valida';
  }

  document.getElementById('risultato').innerText = C;
}