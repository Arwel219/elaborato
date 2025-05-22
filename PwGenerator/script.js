function BuildPass() {
	let setCaratteri = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&%";
	let LunghSetCar = setCaratteri.length;
	let password = "";
	let LP = parseInt(fPwGenerator.lpw.value);
	let n = 0;
	let i = 1;
	while (i <= LP) {
	n = parseInt(Math.random() * LunghSetCar);
	password = password + setCaratteri.charAt(n);
	i++;
	}
	fPwGenerator.pwg.value = password;
	
	const pwInput = document.getElementById('pwg');
	
	// Opzione 1: Forza la validità e attiva gli effetti
	pwInput.setCustomValidity('');
	pwInput.reportValidity();

	// Opzione 2: Aggiungi classe per effetto visivo
	pwInput.classList.add('has-value');

	// Dispatche evento input
	pwInput.dispatchEvent(new Event('input'));
	
	return;
}

  button.addEventListener('click', () => {
    // Per riniziare l'animazione, cambiamo l'URL con un parametro casuale
    const urlGif = 'PwGenerator/pw.gif?nocache=' + new Date().getTime();

    document.body.style.backgroundImage = `url('${urlGif}')`;
  });