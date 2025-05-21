function SupVol() {
	
	const form = document.getElementById('fParallelepipedo');
	
	if (!form.checkValidity()) {
    alert('Per favore, compila tutti i campi obbligatori.');
    form.reportValidity(); // mostra i messaggi di errore del browser
    return; // ferma l'esecuzione se ci sono campi non validi
  }
	
	let AB,AA,AD;
		AB = parseInt(fParallelepipedo.iLatoAB.value);
		AA = parseInt(fParallelepipedo.iLatoAA.value);
		AD = parseInt(fParallelepipedo.iLatoAA.value);
		mSuperficie = 2*(AB*AA) + 2*(AB*AD) + 2*(AA*AD);
		mVolume = AB*AA*AD;
		fParallelepipedo.oSuperficie.value = mSuperficie;
		fParallelepipedo.oVolume.value = mVolume;
    
}

function DatiCasuali() {
	fParallelepipedo.iLatoAB.value = parseInt(Math.random()*100); 
	fParallelepipedo.iLatoAA.value = parseInt(Math.random()*100);
	fParallelepipedo.iLatoAD.value = parseInt(Math.random()*100); 
	fParallelepipedo.oSuperficie.value = "";
	fParallelepipedo.oVolume.value = "";
return; 
}