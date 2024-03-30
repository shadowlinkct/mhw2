function topbar() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.remove('hidden');
    menubutt.removeEventListener('click', topbar); // Rimuovi l'event listener per topbar
    menubutt.addEventListener('click', topbarclose); // Aggiungi l'event listener per topbarclose
}

function topbarclose() {
    const activeDiv = document.getElementById('active');
    activeDiv.classList.add('hidden');
    menubutt.removeEventListener('click', topbarclose); // Rimuovi l'event listener per topbarclose
    menubutt.addEventListener('click', topbar); // Aggiungi l'event listener per topbar
}

const menubutt = document.getElementById('menu');
menubutt.addEventListener('click', topbar);

// Seleziona tutti i div principali
const mainDivs = document.querySelectorAll('.centerlink div');

// Aggiungi un listener di evento a ciascun div principale
mainDivs.forEach(div => {
    // Aggiungi un listener di evento per il click a ciascun div principale
    div.addEventListener('click', function() {
        // Ottieni l'id del dropdown content corrispondente
        const contentId = this.id + 'Content';
        const content = document.getElementById(contentId);

        // Verifica se il dropdown content è già aperto
        const isOpen = content.classList.contains('active');

        // Rimuovi la classe 'active' da tutti i dropdown content
        document.querySelectorAll('.dropdown-content.active')
            .forEach(activeContent => activeContent.classList.remove('active'));

        // Se il dropdown content è già aperto, non fare nient'altro (ovvero, chiudilo)
        if (!isOpen) {
            // Aggiungi la classe 'active' solo al dropdown content corrispondente
            content.classList.add('active');
        }
    });
});

