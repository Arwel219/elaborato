
function SalaAcustica() {
let mAltezza, mLarghezza, mLunghezza, coeffLarghezza, coeffLunghezza; 
	mAltezza = parseFloat (fSalaAc.iAltezza.value); 
	fSalaAc.oAltezza.value = mAltezza;
	if (document.getElementById("Sep1").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.14*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(1.39*mAltezza);
	}
	if (document.getElementById("Sep2").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.28*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(1.54*mAltezza);
	}
	if (document.getElementById("Sep3").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.60*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(2.33*mAltezza);
	}
	if (document.getElementById("Llo1").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.4*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(1.9*mAltezza);
	}
	if (document.getElementById("Llo2").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.3*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(1.9*mAltezza);
	}
	if (document.getElementById("Llo3").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.5*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(2.5*mAltezza);
	}
	if (document.getElementById("Volk").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.5*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(2.5*mAltezza);
	}
	if (document.getElementById("Bon").checked) {
		fSalaAc.oLarghezza.value = parseFloat(1.26*mAltezza); 
		fSalaAc.oLunghezza.value = parseFloat(1.59*mAltezza);
	}
return; };