// Seleziona gli elementi principali
const btn = document.getElementById('iLancio');
const caricamento = document.getElementById('caricamento');

// Seleziona il select per il tipo di gioco
const selectGiocata = document.getElementById('iGiocata');

// Campi di output e input
const fLancioDadi = {
  iDado1: document.getElementById('iDado1'),
  iDado2: document.getElementById('iDado2'),
  oSomma: document.getElementById('oSomma'),
  oEsito: document.getElementById('oEsito'),
  oVincita: document.getElementById('oVincita'),
  iPosta: document.getElementById('iPosta'),
  iGiocata: document.getElementById('iGiocata')
};

// Funzione simulata di operazione lunga
async function funzioneLunga() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operazione completata');
    }, 1000);
  });
}

// Funzione per mostrare overlay vittoria
function mostraVittoria(importoVinto) {
  const overlayVittoria = document.getElementById('vittoriaOverlay');
  const importoSpan = document.getElementById('importoVinto');
  importoSpan.textContent = importoVinto.toFixed(2);
  overlayVittoria.style.display = 'flex';

  // Cambia immagine gif per effetto
  let urlGif = 'LancioDadi/moneyrain.gif?nocache=' + new Date().getTime();
  document.getElementById('overlay').style.backgroundImage = `url('${urlGif}')`;
  
  document.getElementById("vAudio").play(); // Avvia l'audio

  // Bottone chiudi
  document.getElementById('chiudiVittoria').onclick = () => {
    overlayVittoria.style.display = 'none';

    urlGif = 'LancioDadi/rain.gif?nocache=' + new Date().getTime();
    document.getElementById('overlay').style.backgroundImage = `url('${urlGif}')`;
    document.getElementById("vAudio").pause(); // Ferma l'audio
    document.getElementById("vAudio").currentTime = 0; // Riavvolge l'audio all'inizio
  };
}

// Funzione di lancio dadi
function LancioDadi() {
  const mNumeroFacce = 6;

  // Genera dadi
  const mDado1 = Math.floor(Math.random() * mNumeroFacce) + 1;
  const mDado2 = Math.floor(Math.random() * mNumeroFacce) + 1;
  const mSomma = mDado1 + mDado2;

  // Aggiorna i campi
  fLancioDadi.iDado1.value = mDado1;
  fLancioDadi.iDado2.value = mDado2;
  fLancioDadi.oSomma.value = mSomma;

  // Ottieni il tipo di gioco dal select
  const mGioco = parseInt(selectGiocata.value);
  let mQuota = 0;

  // Assegna quota in base al gioco scelto
  switch (mGioco) {
    case 2: mQuota = 36; break;
    case 3: mQuota = 18; break;
    case 4: mQuota = 12; break;
    case 5: mQuota = 9; break;
    case 6: mQuota = 7; break;
    case 7: mQuota = 6; break;
    case 8: mQuota = 7; break;
    case 9: mQuota = 9; break;
    case 10: mQuota = 12; break;
    case 11: mQuota = 18; break;
    case 12: mQuota = 36; break;
    case 0: mQuota = 2; break; // Pari
    case 1: mQuota = 3; break; // Dispari
    default: mQuota = 2; break;
  }

  const mImporto = parseInt(fLancioDadi.iPosta.value);

  // Verifica vittoria
  if (Spoglio(mGioco, mSomma)) {
    fLancioDadi.oEsito.value = "Hai Vinto!!!";
    const mVincita = mImporto * mQuota;
    fLancioDadi.oVincita.value = mVincita;

    // Mostra overlay vittoria
    mostraVittoria(mVincita);
  } else {
    fLancioDadi.oEsito.value = "Non hai vinto. Ritenta";
    fLancioDadi.oVincita.value = 0;
  }
}

// Funzione di verifica del risultato (modificata per giochi più complessi)
function Spoglio(G, S) {
  // G può essere 0,1 o un numero tra 2 e 12
  if (G === S) return true;
  if (G === 0 && S % 2 === 0) return true; // pari
  if (G === 1 && S % 2 === 1) return true; // dispari
  return false;
}

// Evento clic sul bottone di lancio
btn.addEventListener('click', async () => {
  caricamento.style.display = 'block';

  await funzioneLunga();

  // Attesa opzionale
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Lancio dadi e verifica
  LancioDadi();

  // Nascondi caricamento
  caricamento.style.display = 'none';
});