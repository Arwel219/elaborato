// Seleziona gli elementi necessari
const btn = document.getElementById('iCalcolo');
const caricamento = document.getElementById('caricamento');

// Funzione che simula un'operazione lunga (ad esempio, fetch)
async function funzioneLunga() {
    const cordaVal = document.getElementById('iCorda').value;
    const frecciaVal = document.getElementById('iFreccia').value;
    const cordaNum = parseFloat(cordaVal);
    const frecciaNum = parseFloat(frecciaVal);

    // Controlla validità dei valori
    if (isNaN(cordaNum) || isNaN(frecciaNum) || cordaVal.trim() === "" || frecciaVal.trim() === "") {
        alert("Per favore, inserisci valori validi per corda e freccia.");
        // Nascondi caricamento
        caricamento.style.display = 'none';
        return false; // indica che i dati non sono validi
    }

    // Simula una chiamata lunga (ad esempio, elaborazione o fetch)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operazione completata');
        }, 1000); // 1 secondo
    });
}

// Funzione di calcolo
function calcola() {
    // Calcoli
    let corda = parseFloat(document.getElementById('iCorda').value);
    let freccia = parseFloat(document.getElementById('iFreccia').value);
    
    // Controlla che i valori siano validi
    if (isNaN(corda) || isNaN(freccia) || freccia === 0) {
        alert("Inserisci valori validi per Corda e Freccia (Freccia non deve essere zero).");
        return;
    }
    
    // Calcolo Raggio
    let raggio = (corda ** 2) / (8 * freccia) + (freccia / 2);
    
    // Calcolo Angolo (in radianti)
    let angolo = Math.asin((corda / 2) / raggio);
    
    // Calcolo Arco
    let arco = angolo * raggio;
    
    // Mostra i risultati
    document.getElementById('oRaggio').value = raggio.toFixed(2);
    document.getElementById('oArco').value = arco.toFixed(2);
    document.getElementById('oAngolo').value = (angolo * (360/Math.PI)).toFixed(2); // 

    window.alert('Operazione completata!');
}

// Gestore evento clic
btn.addEventListener('click', async () => {
    // Mostra caricamento
    caricamento.style.display = 'block';

    // Esegue la funzione lunga e verifica validità
    const valid = await funzioneLunga();

    // Se i dati sono validi, esegui calcolo
    if (valid !== false) {
        // Attendi 1 secondo prima di chiamare calcola()
        await new Promise((resolve) => setTimeout(resolve, 1000));
        calcola();
    }

    // Nascondi caricamento
    caricamento.style.display = 'none';
});

// Funzione per riempire i campi con valori casuali
function DatiCasuali() {
    document.getElementById('iCorda').value = Math.floor(Math.random() * 100);
    document.getElementById('iFreccia').value = Math.floor(Math.random() * 100);
    document.getElementById('oRaggio').value = "";
    document.getElementById('oArco').value = "";
    document.getElementById('oAngolo').value = "";
}